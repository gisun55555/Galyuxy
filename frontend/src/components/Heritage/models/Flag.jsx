/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 flag.gltf 
*/

import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Flag(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/flag.gltf');
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='AuxScene'>
        <group name='south_korea_(1)glb'>
          <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
            <group name='root'>
              <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
                <group name='Sketchfab_model_0' rotation={[-Math.PI / 2, 0, 0]}>
                  <group name='root_1'>
                    <group
                      name='GLTF_SceneRootNode_2'
                      rotation={[Math.PI / 2, 0, 0]}
                    >
                      <group
                        name='RootNode_(gltf_orientation_matrix)_0_3'
                        rotation={[-Math.PI / 2, 0, 0]}
                      >
                        <group name='RootNode_(model_correction_matrix)_1_4'>
                          <group name='root_2_5'>
                            <group
                              name='GLTF_SceneRootNode_3_6'
                              rotation={[Math.PI / 2, 0, 0]}
                            >
                              <group name='Flag_ShapeKeys_2_4_7'>
                                <group name='mesh_0_5_8'>
                                  <group name='mesh_0_9'>
                                    <mesh
                                      name='mesh_0'
                                      geometry={nodes.mesh_0.geometry}
                                      material={materials.Flag}
                                    />
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/flag.gltf');
