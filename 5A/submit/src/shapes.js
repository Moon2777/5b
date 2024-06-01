import * as THREE from 'three';

function makeCube(boxWidth, boxHeight, boxDepth){
  const geometry_cube = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  return geometry_cube;
}
//const geometry_cube = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

function makeSphere(radius){
  const geometry_sphere = new THREE.SphereGeometry( radius, 16, 16 );
  return geometry_sphere;
}
//const geometry_sphere = new THREE.SphereGeometry( 0.5, 16, 16 );
function makeCylinder(tRadius, bRadius, height){
  const geometry_cylinder = new THREE.CylinderGeometry(tRadius, bRadius, height);
  return geometry_cylinder;
}
//const geometry_cylinder = new THREE.CylinderGeometry(0.5, 0.5, boxHeight);
function makeCone(radius, height, seg){
  const cone = new THREE.ConeGeometry( radius, height, seg );
  return cone;
}
