import { BufferGeometry } from '../core/BufferGeometry.js';
import { Float32BufferAttribute } from '../core/BufferAttribute.js';
import { C as Curves } from '../../../_chunks/Curves-1010459e.js';
import { Vector2 } from '../math/Vector2.js';
import { Vector3 } from '../math/Vector3.js';
import { QuadraticBezierCurve3 } from '../extras/curves/QuadraticBezierCurve3.js';
import '../math/Box3.js';
import '../math/MathUtils.js';
import '../math/Quaternion.js';
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
import '../extras/curves/ArcCurve.js';
import '../extras/curves/EllipseCurve.js';
import '../extras/core/Curve.js';
import '../extras/curves/CatmullRomCurve3.js';
import '../extras/curves/CubicBezierCurve.js';
import '../extras/core/Interpolations.js';
import '../extras/curves/CubicBezierCurve3.js';
import '../extras/curves/LineCurve.js';
import '../extras/curves/LineCurve3.js';
import '../extras/curves/QuadraticBezierCurve.js';
import '../extras/curves/SplineCurve.js';

class TubeGeometry extends BufferGeometry {
    copy(source) {
        super.copy(source);
        this.parameters = Object.assign({}, source.parameters);
        return this;
    }
    toJSON() {
        const data = super.toJSON();
        data.path = this.parameters.path.toJSON();
        return data;
    }
    static fromJSON(data) {
        // This only works for built-in curves (e.g. CatmullRomCurve3).
        // User defined curves or instances of CurvePath will not be deserialized.
        return new TubeGeometry(new Curves[data.path.type]().fromJSON(data.path), data.tubularSegments, data.radius, data.radialSegments, data.closed);
    }
    constructor(path = new QuadraticBezierCurve3(new Vector3(-1, -1, 0), new Vector3(-1, 1, 0), new Vector3(1, 1, 0)), tubularSegments = 64, radius = 1, radialSegments = 8, closed = false){
        super();
        this.type = 'TubeGeometry';
        this.parameters = {
            path: path,
            tubularSegments: tubularSegments,
            radius: radius,
            radialSegments: radialSegments,
            closed: closed
        };
        const frames = path.computeFrenetFrames(tubularSegments, closed);
        // expose internals
        this.tangents = frames.tangents;
        this.normals = frames.normals;
        this.binormals = frames.binormals;
        // helper variables
        const vertex = new Vector3();
        const normal = new Vector3();
        const uv = new Vector2();
        let P = new Vector3();
        // buffer
        const vertices = [];
        const normals = [];
        const uvs = [];
        const indices = [];
        // create buffer data
        generateBufferData();
        // build geometry
        this.setIndex(indices);
        this.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        this.setAttribute('normal', new Float32BufferAttribute(normals, 3));
        this.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
        // functions
        function generateBufferData() {
            for(let i = 0; i < tubularSegments; i++){
                generateSegment(i);
            }
            // if the geometry is not closed, generate the last row of vertices and normals
            // at the regular position on the given path
            //
            // if the geometry is closed, duplicate the first row of vertices and normals (uvs will differ)
            generateSegment(closed === false ? tubularSegments : 0);
            // uvs are generated in a separate function.
            // this makes it easy compute correct values for closed geometries
            generateUVs();
            // finally create faces
            generateIndices();
        }
        function generateSegment(i) {
            // we use getPointAt to sample evenly distributed points from the given path
            P = path.getPointAt(i / tubularSegments, P);
            // retrieve corresponding normal and binormal
            const N = frames.normals[i];
            const B = frames.binormals[i];
            // generate normals and vertices for the current segment
            for(let j = 0; j <= radialSegments; j++){
                const v = j / radialSegments * Math.PI * 2;
                const sin = Math.sin(v);
                const cos = -Math.cos(v);
                // normal
                normal.x = cos * N.x + sin * B.x;
                normal.y = cos * N.y + sin * B.y;
                normal.z = cos * N.z + sin * B.z;
                normal.normalize();
                normals.push(normal.x, normal.y, normal.z);
                // vertex
                vertex.x = P.x + radius * normal.x;
                vertex.y = P.y + radius * normal.y;
                vertex.z = P.z + radius * normal.z;
                vertices.push(vertex.x, vertex.y, vertex.z);
            }
        }
        function generateIndices() {
            for(let j = 1; j <= tubularSegments; j++){
                for(let i = 1; i <= radialSegments; i++){
                    const a = (radialSegments + 1) * (j - 1) + (i - 1);
                    const b = (radialSegments + 1) * j + (i - 1);
                    const c = (radialSegments + 1) * j + i;
                    const d = (radialSegments + 1) * (j - 1) + i;
                    // faces
                    indices.push(a, b, d);
                    indices.push(b, c, d);
                }
            }
        }
        function generateUVs() {
            for(let i = 0; i <= tubularSegments; i++){
                for(let j = 0; j <= radialSegments; j++){
                    uv.x = i / tubularSegments;
                    uv.y = j / radialSegments;
                    uvs.push(uv.x, uv.y);
                }
            }
        }
    }
}

export { TubeGeometry };
