import SimplexNoise from "simplex-noise";

import {
  Clock,
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Object3D,
  Vector3,
  AxesHelper,
  ArrowHelper,
  Color
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as dat from "dat.gui";

import VectorField from "./index.js";

const CONFIG = {
  speed: 100,
  scale: 0.75
};

const clock = new Clock();
const tempDirection = new Vector3();
const tempColor = new Color();

const simplex = new SimplexNoise(Math.random);
function directionFn([x, y, z], [stepX, stepY, stepZ]) {
  let n =
    simplex.noise4D(
      x * CONFIG.scale,
      y * CONFIG.scale,
      z * CONFIG.scale,
      (CONFIG.speed / 1000) * clock.elapsedTime
    ) *
    Math.PI *
    2;
  const theta = n;
  const phi = n;

  const direction = [
    Math.sin(theta) * Math.sin(phi),
    Math.cos(theta),
    Math.sin(theta) * Math.cos(phi)
  ];

  const mesh = this.field[stepX][stepY][stepZ].mesh;
  if (mesh) {
    mesh.setDirection(tempDirection.fromArray(direction));
    mesh.setColor(tempColor.fromArray([...direction, 1]));
  }

  return direction;
}
const vectorField = new VectorField(directionFn, [12, 6, 6], [1, 0.5, 0.5]);

vectorField.update();

// GUI
const gui = new dat.GUI();
gui.add(CONFIG, "speed", 0, 500);
gui.add(CONFIG, "scale", 0, 1);

// SCENE
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new Scene();
const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
Object.assign(camera.position, {
  x: 1,
  y: 1.5,
  z: 1.5
});
const controls = new OrbitControls(camera, renderer.domElement);
Object.assign(controls, {
  enableDamping: true,
  dampingFactor: 0.05,
  screenSpacePanning: false,
  maxDistance: 50
});
scene.add(new AxesHelper(1));

// Debug
const debugMeshes = new Object3D();
for (let x = 0; x < vectorField.steps[0]; x++) {
  for (let y = 0; y < vectorField.steps[1]; y++) {
    for (let z = 0; z < vectorField.steps[2]; z++) {
      const mesh = new ArrowHelper(
        tempDirection.fromArray(vectorField.field[x][y][z].direction),
        new Vector3()
          .fromArray(vectorField.field[x][y][z].position)
          .sub(new Vector3(...vectorField.bounds.map(bound => bound * 0.5))),
        0.05,
        0xffffff
      );
      vectorField.field[x][y][z].mesh = mesh;
      debugMeshes.add(mesh);
    }
  }
}
scene.add(debugMeshes);

// LOOP
const frame = () => {
  clock.getDelta();

  vectorField.update(); // Debug meshes updated in directionFn
  renderer.render(scene, camera);
  controls.update();

  requestAnimationFrame(frame);
};

// Kick off
requestAnimationFrame(() => {
  document.body.appendChild(renderer.domElement);
  clock.start();
  frame();
});

// Events
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
