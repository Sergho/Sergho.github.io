const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
const light = new THREE.SpotLight(0xffffff);
light.position.set(-40, 40, -15);
light.castShadow = true;
light.shadow.mapSize = new THREE.Vector2(5000, 5000);
light.shadow.camera.far = 130;
light.shadow.camera.near = 40;
scene.add(light)
const axes = new THREE.AxesHelper(20);
// scene.add(axes);
const plane_geometry = new THREE.PlaneGeometry(60, 20);
const plane_material = new THREE.MeshLambertMaterial({color: 0xffffff});
const plane = new THREE.Mesh(plane_geometry, plane_material);
plane.receiveShadow = true;
plane.rotation.x = -0.5 * Math.PI;
plane.position.set(10, 0, 0);
scene.add(plane);
const cube_geometry = new THREE.BoxGeometry(4, 4, 4);
const cube_material = new THREE.MeshLambertMaterial({color: 0xff0000});
const cube = new THREE.Mesh(cube_geometry, cube_material);
cube.castShadow = true;
cube.position.set(-4, 4, 0);
scene.add(cube);
const sphere_geometry = new THREE.SphereGeometry(4, 20, 20);
const sphere_material = new THREE.MeshLambertMaterial({color: 0x7777ff});
const sphere = new THREE.Mesh(sphere_geometry, sphere_material);
sphere.position.set(20, 4, 2);
sphere.castShadow = true;
scene.add(sphere);
camera.position.set(-20, 30, 20);
camera.lookAt(scene.position);

let cube_step = Math.PI;
let sphere_step = 0;

function animate(){
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;
  cube.rotation.z += 0.02;
  cube_step += 0.1;
  sphere_step += 0.04;
  cube.position.y = 6 + 2*Math.sin(cube_step);
  sphere.position.x = 20 + 10 * Math.cos(sphere_step);
  sphere.position.y = 4 + 10 * Math.abs(Math.sin(sphere_step))

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
  stats.update();
}
animate();