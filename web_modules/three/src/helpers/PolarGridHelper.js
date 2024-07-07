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

class PolarGridHelper extends LineSegments {
    constructor(radius = 10, sectors = 16, rings = 8, divisions = 64, color1 = 0x444444, color2 = 0x888888){
        color1 = new Color(color1);
        color2 = new Color(color2);
        const vertices = [];
        const colors = [];
        // create the sectors
        if (sectors > 1) {
            for(let i = 0; i < sectors; i++){
                const v = i / sectors * (Math.PI * 2);
                const x = Math.sin(v) * radius;
                const z = Math.cos(v) * radius;
                vertices.push(0, 0, 0);
                vertices.push(x, 0, z);
                const color = i & 1 ? color1 : color2;
                colors.push(color.r, color.g, color.b);
                colors.push(color.r, color.g, color.b);
            }
        }
        // create the rings
        for(let i = 0; i < rings; i++){
            const color = i & 1 ? color1 : color2;
            const r = radius - radius / rings * i;
            for(let j = 0; j < divisions; j++){
                // first vertex
                let v = j / divisions * (Math.PI * 2);
                let x = Math.sin(v) * r;
                let z = Math.cos(v) * r;
                vertices.push(x, 0, z);
                colors.push(color.r, color.g, color.b);
                // second vertex
                v = (j + 1) / divisions * (Math.PI * 2);
                x = Math.sin(v) * r;
                z = Math.cos(v) * r;
                vertices.push(x, 0, z);
                colors.push(color.r, color.g, color.b);
            }
        }
        const geometry = new BufferGeometry();
        geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
        const material = new LineBasicMaterial({
            vertexColors: true,
            toneMapped: false
        });
        super(geometry, material);
        this.type = 'PolarGridHelper';
    }
    dispose() {
        this.geometry.dispose();
        this.material.dispose();
    }
}

export { PolarGridHelper };
