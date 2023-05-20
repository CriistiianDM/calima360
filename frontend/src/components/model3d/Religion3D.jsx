import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Object_3d from '../../assets/3D/mascara.glb'


const Religion3D = (props)  => {

        const { nodes, materials } = useGLTF(Object_3d);
        return (
            <group {...props} dispose={null}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials["Scratched Gold"]}
            />
            </group>
        );
}

useGLTF.preload(Object_3d);


export default Religion3D;