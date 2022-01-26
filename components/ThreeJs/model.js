import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
  scene,
  glbPath,
  option={receiveShadow: true, castShadow: true}
) {
  const {receiveShadow, castShadow} = option
  return new Promise((resolve, reject)=>{
    const loader = new GLTFLoader()
    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'cyborg'
        obj.position.y=0
        obj.position.x=0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child){
          if(child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow

          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
