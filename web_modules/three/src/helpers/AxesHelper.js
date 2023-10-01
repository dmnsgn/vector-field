import { LineSegments } from '../objects/LineSegments.js';
import { LineBasicMaterial } from '../materials/LineBasicMaterial.js';
import { Float32BufferAttribute } from '../core/BufferAttribute.js';
import { BufferGeometry } from '../core/BufferGeometry.js';
import { Color } from '../math/Color.js';
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
import '../math/ColorManagement.js';
import '../math/Vector2.js';
import '../utils.js';
import '../extras/DataUtils.js';

class AxesHelper extends LineSegments {
    setColors(xAxisColor, yAxisColor, zAxisColor) {
        const color = new Color();
        const array = this.geometry.attributes.color.array;
        color.set(xAxisColor);
        color.toArray(array, 0);
        color.toArray(array, 3);
        color.set(yAxisColor);
        color.toArray(array, 6);
        color.toArray(array, 9);
        color.set(zAxisColor);
        color.toArray(array, 12);
        color.toArray(array, 15);
        this.geometry.attributes.color.needsUpdate = true;
        return this;
    }
    dispose() {
        this.geometry.dispose();
        this.material.dispose();
    }
    constructor(size = 1){
        const vertices = [
            0,
            0,
            0,
            size,
            0,
            0,
            0,
            0,
            0,
            0,
            size,
            0,
            0,
            0,
            0,
            0,
            0,
            size
        ];
        const colors = [
            1,
            0,
            0,
            1,
            0.6,
            0,
            0,
            1,
            0,
            0.6,
            1,
            0,
            0,
            0,
            1,
            0,
            0.6,
            1
        ];
        const geometry = new BufferGeometry();
        geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
        const material = new LineBasicMaterial({
            vertexColors: true,
            toneMapped: false
        });
        super(geometry, material);
        this.type = 'AxesHelper';
    }
}

export { AxesHelper };
