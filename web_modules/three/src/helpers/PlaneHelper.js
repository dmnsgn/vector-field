import { Line } from '../objects/Line.js';
import { Mesh } from '../objects/Mesh.js';
import { LineBasicMaterial } from '../materials/LineBasicMaterial.js';
import { MeshBasicMaterial } from '../materials/MeshBasicMaterial.js';
import { Float32BufferAttribute } from '../core/BufferAttribute.js';
import { BufferGeometry } from '../core/BufferGeometry.js';
import '../math/Sphere.js';
import '../math/Box3.js';
import '../math/Vector3.js';
import '../math/MathUtils.js';
import '../math/Quaternion.js';
import '../math/Ray.js';
import '../math/Matrix4.js';
import '../constants.js';
import '../core/Object3D.js';
import '../core/EventDispatcher.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../math/Matrix3.js';
import '../materials/Material.js';
import '../math/Color.js';
import '../math/ColorManagement.js';
import '../math/Vector2.js';
import '../utils.js';
import '../extras/DataUtils.js';
import '../math/Triangle.js';

class PlaneHelper extends Line {
    constructor(plane, size = 1, hex = 0xffff00){
        const color = hex;
        const positions = [
            1,
            -1,
            0,
            -1,
            1,
            0,
            -1,
            -1,
            0,
            1,
            1,
            0,
            -1,
            1,
            0,
            -1,
            -1,
            0,
            1,
            -1,
            0,
            1,
            1,
            0
        ];
        const geometry = new BufferGeometry();
        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
        geometry.computeBoundingSphere();
        super(geometry, new LineBasicMaterial({
            color: color,
            toneMapped: false
        }));
        this.type = 'PlaneHelper';
        this.plane = plane;
        this.size = size;
        const positions2 = [
            1,
            1,
            0,
            -1,
            1,
            0,
            -1,
            -1,
            0,
            1,
            1,
            0,
            -1,
            -1,
            0,
            1,
            -1,
            0
        ];
        const geometry2 = new BufferGeometry();
        geometry2.setAttribute('position', new Float32BufferAttribute(positions2, 3));
        geometry2.computeBoundingSphere();
        this.add(new Mesh(geometry2, new MeshBasicMaterial({
            color: color,
            opacity: 0.2,
            transparent: true,
            depthWrite: false,
            toneMapped: false
        })));
    }
    updateMatrixWorld(force) {
        this.position.set(0, 0, 0);
        this.scale.set(0.5 * this.size, 0.5 * this.size, 1);
        this.lookAt(this.plane.normal);
        this.translateZ(-this.plane.constant);
        super.updateMatrixWorld(force);
    }
    dispose() {
        this.geometry.dispose();
        this.material.dispose();
        this.children[0].geometry.dispose();
        this.children[0].material.dispose();
    }
}

export { PlaneHelper };
