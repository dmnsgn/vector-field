import { BufferGeometry } from '../core/BufferGeometry.js';
import { Float32BufferAttribute } from '../core/BufferAttribute.js';
import '../math/Vector3.js';
import '../math/MathUtils.js';
import '../math/Quaternion.js';
import '../math/Vector2.js';
import '../math/Box3.js';
import '../core/EventDispatcher.js';
import '../math/Sphere.js';
import '../core/Object3D.js';
import '../math/Matrix4.js';
import '../constants.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../math/Matrix3.js';
import '../utils.js';
import '../extras/DataUtils.js';

class PlaneGeometry extends BufferGeometry {
    copy(source) {
        super.copy(source);
        this.parameters = Object.assign({}, source.parameters);
        return this;
    }
    static fromJSON(data) {
        return new PlaneGeometry(data.width, data.height, data.widthSegments, data.heightSegments);
    }
    constructor(width = 1, height = 1, widthSegments = 1, heightSegments = 1){
        super();
        this.type = 'PlaneGeometry';
        this.parameters = {
            width: width,
            height: height,
            widthSegments: widthSegments,
            heightSegments: heightSegments
        };
        const width_half = width / 2;
        const height_half = height / 2;
        const gridX = Math.floor(widthSegments);
        const gridY = Math.floor(heightSegments);
        const gridX1 = gridX + 1;
        const gridY1 = gridY + 1;
        const segment_width = width / gridX;
        const segment_height = height / gridY;
        //
        const indices = [];
        const vertices = [];
        const normals = [];
        const uvs = [];
        for(let iy = 0; iy < gridY1; iy++){
            const y = iy * segment_height - height_half;
            for(let ix = 0; ix < gridX1; ix++){
                const x = ix * segment_width - width_half;
                vertices.push(x, -y, 0);
                normals.push(0, 0, 1);
                uvs.push(ix / gridX);
                uvs.push(1 - iy / gridY);
            }
        }
        for(let iy = 0; iy < gridY; iy++){
            for(let ix = 0; ix < gridX; ix++){
                const a = ix + gridX1 * iy;
                const b = ix + gridX1 * (iy + 1);
                const c = ix + 1 + gridX1 * (iy + 1);
                const d = ix + 1 + gridX1 * iy;
                indices.push(a, b, d);
                indices.push(b, c, d);
            }
        }
        this.setIndex(indices);
        this.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        this.setAttribute('normal', new Float32BufferAttribute(normals, 3));
        this.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
    }
}

export { PlaneGeometry };
