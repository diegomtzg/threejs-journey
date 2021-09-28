import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Clock
// const clock = new THREE.Clock()

// var time = Date.now()

gsap.to(mesh.position, {x: 2, duration: 1, delay: 1})
gsap.to(mesh.position, {x: 1, duration: 1, delay: 2})

const tick = () => {
    // Calculate time between frames to standardize animation speed (agnostic of screen framerate)
    // Animation will now run as a function of the time that each frame takes
    // const elapsedTime = clock.getElapsedTime() // Seconds since clock was initialized

    // 1 revolution per second
    // mesh.rotation.y = elapsedTime * Math.PI * 2

    // Move in a circle
    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)

    // Render
    renderer.render(scene, camera)

    // Called on next frame, higher framerates move "faster"
    window.requestAnimationFrame(tick)
}

tick()
