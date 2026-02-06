// JavaScript Document
	class stage
class Stage
	constructor: ->
		window.requestAnimationFrame = 
			window.requestAnimationFrame or
			window.webkitRequestAnimationFrame or
			window.mozRequestAnimationFrame

		@test()
		@init_scene()
		@make_coordinates()
		@make_meshes()

	test: ->


	init_scene: ->
		@scene = new THREE.Scene

		# Renderer
		width = window.innerWidth * 0.8;
		height = window.innerHeight * 0.8;
		@renderer = new THREE.WebGLRenderer({
			canvas: document.querySelector('.scene')
		})
		@renderer.setSize(width, height)

		# Camera
		@camera = new THREE.PerspectiveCamera(
			45,					# fov
			width / height,		# aspect
			1,					# near
			1000				# far
		)
		@camera.up.set(1, 0, 0)		# Trick
		@scene.add(@camera)

	make_coordinates: ->
		c_line = (direction, color) =>
			m = new THREE.LineBasicMaterial({
				color: color
			})

			v_end = direction.multiplyScalar(100)

			g = new THREE.Geometry()
			g.vertices.push(new THREE.Vector3(0, 0, 0))
			g.vertices.push(v_end)

				
	make_meshes: ->
		size = 40
		geo = new THREE.CylinderGeometry(0, size, size)
		material = new THREE.MeshNormalMaterial()
		mesh = new THREE.Mesh(geo, material)
		@scene.add(mesh)

	draw: =>
		angle = Date.now() * 0.001
		radius = 300

		@camera.position.set(
			0,
			radius * Math.cos(angle),
			radius * Math.sin(angle)
		)
		@camera.lookAt(new THREE.Vector3())
		@camera.rotation.z += Math.PI / 2 		# Trick

		@renderer.render(@scene, @camera)
		requestAnimationFrame(@draw)

stage = new Stage
stage.draw()

document.querySelector('.warn').style.display = 'none'
