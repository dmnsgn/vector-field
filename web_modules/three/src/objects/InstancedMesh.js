import { InstancedBufferAttribute } from '../core/InstancedBufferAttribute.js';
import { Mesh } from './Mesh.js';
import { Box3 } from '../math/Box3.js';
import { Matrix4 } from '../math/Matrix4.js';
import { Sphere } from '../math/Sphere.js';
import '../core/BufferAttribute.js';
import '../math/Vector3.js';
import '../math/MathUtils.js';
import '../math/Quaternion.js';
import '../math/Vector2.js';
import '../constants.js';
import '../extras/DataUtils.js';
import '../math/Ray.js';
import '../core/Object3D.js';
import '../core/EventDispatcher.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../math/Matrix3.js';
import '../math/Triangle.js';
import '../materials/MeshBasicMaterial.js';
import '../materials/Material.js';
import '../math/Color.js';
import '../math/ColorManagement.js';
import '../core/BufferGeometry.js';
import '../utils.js';

const _instanceLocalMatrix = /*@__PURE__*/ new Matrix4();
const _instanceWorldMatrix = /*@__PURE__*/ new Matrix4();
const _instanceIntersects = [];
const _box3 = /*@__PURE__*/ new Box3();
const _identity = /*@__PURE__*/ new Matrix4();
const _mesh = /*@__PURE__*/ new Mesh();
const _sphere = /*@__PURE__*/ new Sphere();
class InstancedMesh extends Mesh {
    computeBoundingBox() {
        const geometry = this.geometry;
        const count = this.count;
        if (this.boundingBox === null) {
            this.boundingBox = new Box3();
        }
        if (geometry.boundingBox === null) {
            geometry.computeBoundingBox();
        }
        this.boundingBox.makeEmpty();
        for(let i = 0; i < count; i++){
            this.getMatrixAt(i, _instanceLocalMatrix);
            _box3.copy(geometry.boundingBox).applyMatrix4(_instanceLocalMatrix);
            this.boundingBox.union(_box3);
        }
    }
    computeBoundingSphere() {
        const geometry = this.geometry;
        const count = this.count;
        if (this.boundingSphere === null) {
            this.boundingSphere = new Sphere();
        }
        if (geometry.boundingSphere === null) {
            geometry.computeBoundingSphere();
        }
        this.boundingSphere.makeEmpty();
        for(let i = 0; i < count; i++){
            this.getMatrixAt(i, _instanceLocalMatrix);
            _sphere.copy(geometry.boundingSphere).applyMatrix4(_instanceLocalMatrix);
            this.boundingSphere.union(_sphere);
        }
    }
    copy(source, recursive) {
        super.copy(source, recursive);
        this.instanceMatrix.copy(source.instanceMatrix);
        if (source.instanceColor !== null) this.instanceColor = source.instanceColor.clone();
        this.count = source.count;
        if (source.boundingBox !== null) this.boundingBox = source.boundingBox.clone();
        if (source.boundingSphere !== null) this.boundingSphere = source.boundingSphere.clone();
        return this;
    }
    getColorAt(index, color) {
        color.fromArray(this.instanceColor.array, index * 3);
    }
    getMatrixAt(index, matrix) {
        matrix.fromArray(this.instanceMatrix.array, index * 16);
    }
    raycast(raycaster, intersects) {
        const matrixWorld = this.matrixWorld;
        const raycastTimes = this.count;
        _mesh.geometry = this.geometry;
        _mesh.material = this.material;
        if (_mesh.material === undefined) return;
        // test with bounding sphere first
        if (this.boundingSphere === null) this.computeBoundingSphere();
        _sphere.copy(this.boundingSphere);
        _sphere.applyMatrix4(matrixWorld);
        if (raycaster.ray.intersectsSphere(_sphere) === false) return;
        // now test each instance
        for(let instanceId = 0; instanceId < raycastTimes; instanceId++){
            // calculate the world matrix for each instance
            this.getMatrixAt(instanceId, _instanceLocalMatrix);
            _instanceWorldMatrix.multiplyMatrices(matrixWorld, _instanceLocalMatrix);
            // the mesh represents this single instance
            _mesh.matrixWorld = _instanceWorldMatrix;
            _mesh.raycast(raycaster, _instanceIntersects);
            // process the result of raycast
            for(let i = 0, l = _instanceIntersects.length; i < l; i++){
                const intersect = _instanceIntersects[i];
                intersect.instanceId = instanceId;
                intersect.object = this;
                intersects.push(intersect);
            }
            _instanceIntersects.length = 0;
        }
    }
    setColorAt(index, color) {
        if (this.instanceColor === null) {
            this.instanceColor = new InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count * 3), 3);
        }
        color.toArray(this.instanceColor.array, index * 3);
    }
    setMatrixAt(index, matrix) {
        matrix.toArray(this.instanceMatrix.array, index * 16);
    }
    updateMorphTargets() {}
    dispose() {
        this.dispatchEvent({
            type: 'dispose'
        });
    }
    constructor(geometry, material, count){
        super(geometry, material);
        this.isInstancedMesh = true;
        this.instanceMatrix = new InstancedBufferAttribute(new Float32Array(count * 16), 16);
        this.instanceColor = null;
        this.count = count;
        this.boundingBox = null;
        this.boundingSphere = null;
        for(let i = 0; i < count; i++){
            this.setMatrixAt(i, _identity);
        }
    }
}

export { InstancedMesh };
