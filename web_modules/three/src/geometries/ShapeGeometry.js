import { BufferGeometry } from '../core/BufferGeometry.js';
import { Float32BufferAttribute } from '../core/BufferAttribute.js';
import { Shape } from '../extras/core/Shape.js';
import { ShapeUtils } from '../extras/ShapeUtils.js';
import { Vector2 } from '../math/Vector2.js';
import '../math/Vector3.js';
import '../math/MathUtils.js';
import '../math/Quaternion.js';
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
import '../extras/core/Path.js';
import '../extras/core/CurvePath.js';
import '../extras/core/Curve.js';
import '../../../_chunks/Curves-1010459e.js';
import '../extras/curves/ArcCurve.js';
import '../extras/curves/EllipseCurve.js';
import '../extras/curves/CatmullRomCurve3.js';
import '../extras/curves/CubicBezierCurve.js';
import '../extras/core/Interpolations.js';
import '../extras/curves/CubicBezierCurve3.js';
import '../extras/curves/LineCurve.js';
import '../extras/curves/LineCurve3.js';
import '../extras/curves/QuadraticBezierCurve.js';
import '../extras/curves/QuadraticBezierCurve3.js';
import '../extras/curves/SplineCurve.js';
import '../extras/Earcut.js';

class ShapeGeometry extends BufferGeometry {
    copy(source) {
        super.copy(source);
        this.parameters = Object.assign({}, source.parameters);
        return this;
    }
    toJSON() {
        const data = super.toJSON();
        const shapes = this.parameters.shapes;
        return toJSON(shapes, data);
    }
    static fromJSON(data, shapes) {
        const geometryShapes = [];
        for(let j = 0, jl = data.shapes.length; j < jl; j++){
            const shape = shapes[data.shapes[j]];
            geometryShapes.push(shape);
        }
        return new ShapeGeometry(geometryShapes, data.curveSegments);
    }
    constructor(shapes = new Shape([
        new Vector2(0, 0.5),
        new Vector2(-0.5, -0.5),
        new Vector2(0.5, -0.5)
    ]), curveSegments = 12){
        super();
        this.type = 'ShapeGeometry';
        this.parameters = {
            shapes: shapes,
            curveSegments: curveSegments
        };
        // buffers
        const indices = [];
        const vertices = [];
        const normals = [];
        const uvs = [];
        // helper variables
        let groupStart = 0;
        let groupCount = 0;
        // allow single and array values for "shapes" parameter
        if (Array.isArray(shapes) === false) {
            addShape(shapes);
        } else {
            for(let i = 0; i < shapes.length; i++){
                addShape(shapes[i]);
                this.addGroup(groupStart, groupCount, i); // enables MultiMaterial support
                groupStart += groupCount;
                groupCount = 0;
            }
        }
        // build geometry
        this.setIndex(indices);
        this.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        this.setAttribute('normal', new Float32BufferAttribute(normals, 3));
        this.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
        // helper functions
        function addShape(shape) {
            const indexOffset = vertices.length / 3;
            const points = shape.extractPoints(curveSegments);
            let shapeVertices = points.shape;
            const shapeHoles = points.holes;
            // check direction of vertices
            if (ShapeUtils.isClockWise(shapeVertices) === false) {
                shapeVertices = shapeVertices.reverse();
            }
            for(let i = 0, l = shapeHoles.length; i < l; i++){
                const shapeHole = shapeHoles[i];
                if (ShapeUtils.isClockWise(shapeHole) === true) {
                    shapeHoles[i] = shapeHole.reverse();
                }
            }
            const faces = ShapeUtils.triangulateShape(shapeVertices, shapeHoles);
            // join vertices of inner and outer paths to a single array
            for(let i = 0, l = shapeHoles.length; i < l; i++){
                const shapeHole = shapeHoles[i];
                shapeVertices = shapeVertices.concat(shapeHole);
            }
            // vertices, normals, uvs
            for(let i = 0, l = shapeVertices.length; i < l; i++){
                const vertex = shapeVertices[i];
                vertices.push(vertex.x, vertex.y, 0);
                normals.push(0, 0, 1);
                uvs.push(vertex.x, vertex.y); // world uvs
            }
            // indices
            for(let i = 0, l = faces.length; i < l; i++){
                const face = faces[i];
                const a = face[0] + indexOffset;
                const b = face[1] + indexOffset;
                const c = face[2] + indexOffset;
                indices.push(a, b, c);
                groupCount += 3;
            }
        }
    }
}
function toJSON(shapes, data) {
    data.shapes = [];
    if (Array.isArray(shapes)) {
        for(let i = 0, l = shapes.length; i < l; i++){
            const shape = shapes[i];
            data.shapes.push(shape.uuid);
        }
    } else {
        data.shapes.push(shapes.uuid);
    }
    return data;
}

export { ShapeGeometry };
