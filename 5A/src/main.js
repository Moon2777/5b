import * as THREE from 'three';
import {OBJLoader} from 'three_objloader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

main();

function main(){
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({antialias: true, canvas});

  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 2;

  const scene = new THREE.Scene();



  {
		const color = 0xFFFFFF;
		const intensity = 3;
		const light = new THREE.DirectionalLight( color, intensity );
		light.position.set( - 1, 2, 4 );
		scene.add( light );
	}

  const boxWidth = 0.5;
  const boxHeight = 0.5;
  const boxDepth = 0.5;
  const geometry_cube = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const geometry_sphere = new THREE.SphereGeometry( 0.5, 16, 16 );
  const geometry_cylinder = new THREE.CylinderGeometry(0.5, 0.5, boxHeight);


  const loader = new THREE.TextureLoader();

  /*const texture = loader.load( 'https://threejs.org/manual/examples/resources/images/wall.jpg' );
  texture.colorSpace = THREE.SRGBColorSpace;

  const material = new THREE.MeshBasicMaterial({
    map: texture
  });*/

  const materials = [
    new THREE.MeshBasicMaterial({map: loadColorTexture('../image/bocchi_1.jpg')}),
    new THREE.MeshBasicMaterial({map: loadColorTexture('../image/bocchi_2.png')}),
    new THREE.MeshBasicMaterial({map: loadColorTexture('../image/bocchi_3.png')}),
    new THREE.MeshBasicMaterial({map: loadColorTexture('../image/bocchi_4.png')}),
    new THREE.MeshBasicMaterial({map: loadColorTexture('../image/bocchi_5.png')}),
    new THREE.MeshBasicMaterial({map: loadColorTexture('../image/bocchi_6.png')}),
  ];
  function make_material(color){
    const material = new THREE.MeshPhongMaterial({color});
    return material;
  }

  const shapes = [
    makeInstance(geometry_cube,  0, materials),
    makeInstance(geometry_sphere, -2,  make_material(0x8844aa) ),
    makeInstance(geometry_cylinder,  2, make_material(0xaa8844) ),
  ];

  //const cube = new THREE.Mesh(geometry, materials);
  //scene.add(cube);
  //cubes.push(cube);





  {
    const objLoader = new OBJLoader();
    objLoader.load('../chair-for-videogame.obj', (root) => {
      scene.add(root);
    });
  }

  function resizeRendererToDisplaySize( renderer ) {

  		const canvas = renderer.domElement;
  		const width = canvas.clientWidth;
  		const height = canvas.clientHeight;
  		const needResize = (canvas.width !== width) || (canvas.height !== height);

      if (needResize) {
  			renderer.setSize( width, height, false );
  		}

  		return needResize;
  	}

  //cube stuff
  function makeInstance(geometry, x, mat){


    const cube = new THREE.Mesh(geometry, mat);
    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  function loadColorTexture(path){
    const texture = loader.load( path );
    texture.colorSpace = THREE.SRGBColorSpace;

    return texture;
  }

  function render(time){
    time *= 0.001;

    if (resizeRendererToDisplaySize( renderer )) {
			const canvas = renderer.domElement;
			camera.aspect = (canvas.clientWidth / canvas.clientHeight);
			camera.updateProjectionMatrix();
		}

    shapes.forEach( (cube,ndx ) => {
      const speed = 1 + ndx * .1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    } );

    renderer.render( scene, camera );
    requestAnimationFrame( render );
  }

  requestAnimationFrame(render);

}
