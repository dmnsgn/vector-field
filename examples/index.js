import VectorField from "../index.js";

import createCanvasContext from "canvas-context";

import { createNoise4D } from "simplex-noise";

import {
  Clock,
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Object3D,
  AxesHelper,
  BoxGeometry,
  Mesh,
  MeshNormalMaterial,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { Pane } from "tweakpane";

const CONFIG = {
  speed: 100,
  scale: 0.25,
};

const clock = new Clock();

const TAU = Math.PI * 2;

const noise4D = createNoise4D(Math.random);
function directionFn([x, y, z], [stepX, stepY, stepZ]) {
  const n =
    (noise4D(
      x * CONFIG.scale,
      y * CONFIG.scale,
      z * CONFIG.scale,
      (CONFIG.speed / 1000) * clock.elapsedTime
    ) +
      1) *
    0.5;
  const theta = 4 * n * Math.PI;
  const phi = 4 * n * TAU;

  const direction = [
    Math.sin(theta) * Math.cos(phi),
    Math.sin(theta) * Math.sin(phi),
    Math.cos(theta),
  ];

  const mesh = this.field[stepX][stepY][stepZ].mesh;
  if (mesh) mesh.rotation.fromArray(direction);

  return direction;
}
const vectorField = new VectorField(directionFn, [24, 12, 12], [1, 1, 1]);

vectorField.update();

// GUI
const pane = new Pane();
pane.addBinding(CONFIG, "speed", { min: 0, max: 500 });
pane.addBinding(CONFIG, "scale", { min: 0, max: 1 });

// SCENE
const { canvas } = createCanvasContext("webgl2");
document.querySelector("main").appendChild(canvas);
const renderer = new WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor({ r: 0, g: 0, b: 0 });

const scene = new Scene();
const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
Object.assign(camera.position, { x: 2, y: 2, z: 2 });
const controls = new OrbitControls(camera, renderer.domElement);
Object.assign(controls, {
  enableDamping: true,
  dampingFactor: 0.05,
  screenSpacePanning: false,
  maxDistance: 50,
});
scene.add(new AxesHelper(1));

// Debug
const arrowSize = 0.05;
const debugMeshes = new Object3D();
for (let x = 0; x < vectorField.steps[0]; x++) {
  for (let y = 0; y < vectorField.steps[1]; y++) {
    for (let z = 0; z < vectorField.steps[2]; z++) {
      const mesh = new Mesh(
        new BoxGeometry(arrowSize * 0.04, arrowSize, arrowSize * 0.04),
        new MeshNormalMaterial()
      );
      mesh.geometry.translate(0, arrowSize * 0.5, 0);
      mesh.position.fromArray(vectorField.field[x][y][z].position);

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
  clock.start();
  frame();
});

// Events
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
