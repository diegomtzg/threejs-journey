const scene = new THREE.Scene()

// Fix viewport size
const sizes = {
    width: 800,
    height: 600
}

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 'red'})
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3 // Move camera back a bit so it's not inside cube. Forward/backwards axis is z, y is up/down
scene.add(camera)

// Renderer
const canvas = document.getElementById('webGLcanvas')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Render scene from camera POV
renderer.render(scene, camera)
