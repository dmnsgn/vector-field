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

class GridHelper extends LineSegments {
    constructor(size = 10, divisions = 10, color1 = 0x444444, color2 = 0x888888){
        color1 = new Color(color1);
        color2 = new Color(color2);
        const center = divisions / 2;
        const step = size / divisions;
        const halfSize = size / 2;
        const vertices = [], colors = [];
        for(let i = 0, j = 0, k = -halfSize; i <= divisions; i++, k += step){
            vertices.push(-halfSize, 0, k, halfSize, 0, k);
            vertices.push(k, 0, -halfSize, k, 0, halfSize);
            const color = i === center ? color1 : color2;
            color.toArray(colors, j);
            j += 3;
            color.toArray(colors, j);
            j += 3;
            color.toArray(colors, j);
            j += 3;
            color.toArray(colors, j);
            j += 3;
        }
        const geometry = new BufferGeometry();
        geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
        const material = new LineBasicMaterial({
            vertexColors: true,
            toneMapped: false
        });
        super(geometry, material);
        this.type = 'GridHelper';
    }
    dispose() {
        this.geometry.dispose();
        this.material.dispose();
    }
}

export { GridHelper };
