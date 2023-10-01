import { LineSegments } from '../objects/LineSegments.js';
import { LineBasicMaterial } from '../materials/LineBasicMaterial.js';
import { BufferAttribute, Float32BufferAttribute } from '../core/BufferAttribute.js';
import { BufferGeometry } from '../core/BufferGeometry.js';
import '../objects/Line.js';
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

class Box3Helper extends LineSegments {
    updateMatrixWorld(force) {
        const box = this.box;
        if (box.isEmpty()) return;
        box.getCenter(this.position);
        box.getSize(this.scale);
        this.scale.multiplyScalar(0.5);
        super.updateMatrixWorld(force);
    }
    dispose() {
        this.geometry.dispose();
        this.material.dispose();
    }
    constructor(box, color = 0xffff00){
        const indices = new Uint16Array([
            0,
            1,
            1,
            2,
            2,
            3,
            3,
            0,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            4,
            0,
            4,
            1,
            5,
            2,
            6,
            3,
            7
        ]);
        const positions = [
            1,
            1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            -1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            -1,
            -1,
            -1,
            1,
            -1,
            -1
        ];
        const geometry = new BufferGeometry();
        geometry.setIndex(new BufferAttribute(indices, 1));
        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
        super(geometry, new LineBasicMaterial({
            color: color,
            toneMapped: false
        }));
        this.box = box;
        this.type = 'Box3Helper';
        this.geometry.computeBoundingSphere();
    }
}

export { Box3Helper };
