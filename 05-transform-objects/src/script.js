import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

// Group objects together to apply transformations to all of them
const group = new THREE.Group()
scene.add(group)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'white' })
const mesh = new THREE.Mesh(geometry, material)
group.add(mesh)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)
group.add(cube2)
cube2.position.x = -2

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'blue'})
)
cube3.position.x = 2
group.add(cube3)

group.scale.x = 2

// Scale
// mesh.scale.x = 2
mesh.scale.set(1, 2, 0.5)

// Rotate (either with rotation or quaternion)
// Use object.rotation.reorder to avoid gimbal lock
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI / 4 // 45deg in radians
mesh.rotation.y = Math.PI / 4 // 45deg in radians
console.log(mesh.quaternion)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.z = 10
scene.add(camera)

// Axes Helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)