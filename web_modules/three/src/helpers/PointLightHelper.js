import { Mesh } from '../objects/Mesh.js';
import { MeshBasicMaterial } from '../materials/MeshBasicMaterial.js';
import { SphereGeometry } from '../geometries/SphereGeometry.js';
import '../math/Vector3.js';
import '../math/MathUtils.js';
import '../math/Quaternion.js';
import '../math/Vector2.js';
import '../math/Sphere.js';
import '../math/Box3.js';
import '../math/Ray.js';
import '../math/Matrix4.js';
import '../constants.js';
import '../core/Object3D.js';
import '../core/EventDispatcher.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../math/Matrix3.js';
import '../math/Triangle.js';
import '../core/BufferGeometry.js';
import '../core/BufferAttribute.js';
import '../extras/DataUtils.js';
import '../utils.js';
import '../materials/Material.js';
import '../math/Color.js';
import '../math/ColorManagement.js';

class PointLightHelper extends Mesh {
    constructor(light, sphereSize, color){
        const geometry = new SphereGeometry(sphereSize, 4, 2);
        const material = new MeshBasicMaterial({
            wireframe: true,
            fog: false,
            toneMapped: false
        });
        super(geometry, material);
        this.light = light;
        this.color = color;
        this.type = 'PointLightHelper';
        this.matrix = this.light.matrixWorld;
        this.matrixAutoUpdate = false;
        this.update();
    /*
	// TODO: delete this comment?
	const distanceGeometry = new THREE.IcosahedronGeometry( 1, 2 );
	const distanceMaterial = new THREE.MeshBasicMaterial( { color: hexColor, fog: false, wireframe: true, opacity: 0.1, transparent: true } );

	this.lightSphere = new THREE.Mesh( bulbGeometry, bulbMaterial );
	this.lightDistance = new THREE.Mesh( distanceGeometry, distanceMaterial );

	const d = light.distance;

	if ( d === 0.0 ) {

		this.lightDistance.visible = false;

	} else {

		this.lightDistance.scale.set( d, d, d );

	}

	this.add( this.lightDistance );
	*/ }
    dispose() {
        this.geometry.dispose();
        this.material.dispose();
    }
    update() {
        this.light.updateWorldMatrix(true, false);
        if (this.color !== undefined) {
            this.material.color.set(this.color);
        } else {
            this.material.color.copy(this.light.color);
        }
    /*
		const d = this.light.distance;

		if ( d === 0.0 ) {

			this.lightDistance.visible = false;

		} else {

			this.lightDistance.visible = true;
			this.lightDistance.scale.set( d, d, d );

		}
		*/ }
}

export { PointLightHelper };
