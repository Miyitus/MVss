/*
DAN's UNIVERSE
WebGL + Blender + Collada + Three.js super cool script made for Dan Leach and his sounds.
Author: Miyö Van Stenis
URL: http://www.miyovanstenis.com/
year: 2015

*/



$(function(){
   /*global variables*/
	var scene, camera, renderer;
	var spotLight, hemi;
	var SCREEN_WIDTH, SCREEN_HEIGHT;
	var loader, model;
	
 	function init(){
		/*creates empty scene object and renderer*/
		scene = new THREE.Scene();
		
		
		camera =  new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 500);
		renderer = new THREE.WebGLRenderer({antialias:true});
		
				

				// ground

				var groundTexture = THREE.ImageUtils.loadTexture( 'img/aq.png' );
				groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
				groundTexture.repeat.set( 100, 100);
				groundTexture.anisotropy = 60;
				
				var groundMaterial = new THREE.MeshPhongMaterial( { color: 0xfafe0f, specular: 0x8a2be2, map: groundTexture } );

				var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 20000, 20000 ), groundMaterial );
				mesh.position.y = -250;
				mesh.rotation.x = - Math.PI / 2;
				mesh.receiveShadow = true;
				scene.add( mesh );

		renderer.setClearColor(0x8a2be2);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.shadowMapEnabled= true;
		renderer.shadowMapSoft = true;
		
		/*add controls*/
		controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.addEventListener( 'change', render );
					
		camera.position.x = 0;
		camera.position.y = 0;
		camera.position.z = 45;	
		camera.lookAt(scene.position);


		
		
		/*datGUI controls object*/
		guiControls = new function(){
			this.rotationX  = 0.0;
			this.rotationY  = 0.0;
			this.rotationZ  = 0.0;
			
			this.lightX = 88;
			this.lightY = 86;
			this.lightZ = 52;
			this.intensity = 2.5;		
			this.distance = 373;
			this.angle = 1.6;
			this.exponent = 38;
			this.shadowCameraNear = 34;
			this.shadowCameraFar = 2635;
			this.shadowCameraFov = 68;
			this.shadowCameraVisible=false;
			this.shadowMapWidth=512;
			this.shadowMapHeight=512;
			this.shadowBias=0.00;
			this.shadowDarkness=0.11;		

		}
        hemi = new THREE.HemisphereLight(0xffffff, 0x0099FF);
        scene.add(hemi);
        
		/*adds spot light with starting parameters*/
		spotLight = new THREE.SpotLight(0xffffff);
		spotLight.castShadow = true;
		spotLight.position.set (20, 35, 40);
		spotLight.intensity = guiControls.intensity;		
		spotLight.distance = guiControls.distance;
		spotLight.angle = guiControls.angle;
		spotLight.exponent = guiControls.exponent;
		spotLight.shadowCameraNear = guiControls.shadowCameraNear;
		spotLight.shadowCameraFar = guiControls.shadowCameraFar;
		spotLight.shadowCameraFov = guiControls.shadowCameraFov;
		spotLight.shadowCameraVisible = guiControls.shadowCameraVisible;
		spotLight.shadowBias = guiControls.shadowBias;
		spotLight.shadowDarkness = guiControls.shadowDarkness;
		scene.add(spotLight);
        
        /*add loader call add model function*/
        loader = new THREE.JSONLoader();
        loader.load( 'birdie.json', addModel );
		
        
		
		$("#webGL-container").append(renderer.domElement);
		
		/*stats*/	
		stats = new Stats();		
		$("#webGL-container").append( stats.domElement );		
	}

    
    function addModel( geometry,  materials ){
        var material = new THREE.MeshFaceMaterial( materials );
        model = new THREE.Mesh( geometry, material );
        model.scale.set (10,10,10);
        model.position.set (-10,-20,0);
        scene.add( model );            
    }
    
	function render() {	
		spotLight.position.x = guiControls.lightX;
		spotLight.position.y = guiControls.lightY;
		spotLight.position.z = guiControls.lightZ;	
	}
	
	function animate(){
		requestAnimationFrame(animate);
		render();
		stats.update();		
		renderer.render(scene, camera);
	}
    init();
    animate();
    
    $(window).resize(function(){
        SCREEN_WIDTH = window.innerWidth;
        SCREEN_HEIGHT = window.innerHeight;
        camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
        camera.updateProjectionMatrix();
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    });
	});