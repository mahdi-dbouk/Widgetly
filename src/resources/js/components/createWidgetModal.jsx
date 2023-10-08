import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Colors } from "chart.js";
import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import Button from "./shared/button";
import { checkIfAccountExists, checkIfOwnerHasRepo } from "../services/githubService";
 
const PAT = import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN;
const CreateWidgetModal = ({modalState, setModalState}) => {
    const [colorsList, setColors] = useState(['#1c1c1c','#1a1e1c','#2e3d3f']);
    const [color, setColor] = useState('');
    const [owner, setOwner] = useState('');
    const [isOwnerFound, setIsOwnerFound] = useState(false);
    const [isRepoFound, setIsRepoFound] = useState(false);
    const [repo, setRepo] = useState('');

    const checkIfOwnerExists = async () => {
        try {
            const response = await checkIfAccountExists(owner);

            if(response.data.login){
                console.log('found')
                setIsOwnerFound(true)
            }
        } catch (error) {
            console.log('not found')
            setIsOwnerFound(false)
        }
    }
    const checkIfRepoExists = async () => {
        try {
            const response = await checkIfOwnerHasRepo(owner, repo);

            if(response.data.id){
                setIsRepoFound(true)
            }
        } catch (error) {
            setIsRepoFound(false)
        }
    }
    useEffect(() => {
        checkIfOwnerExists()
    },[owner])

    useEffect(()=>{
        checkIfRepoExists()
    }, [repo])

    const addColor = (color) => {
        setColors([...colorsList, color])
    }

    const removeColor = (index) => {
        const updatedColorsList = [...colorsList];
        updatedColorsList.splice(index, 1);
        setColors(updatedColorsList);
    }

    const customStyles = {
        content: {
          width: '60%',
          height: '80%',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    const closeModal = () => {
        setModalState(false);
    }

    return <Modal isOpen={modalState} onRequestClose={closeModal} style={customStyles}>
        <div className="flex flex-row justify-between">
          <span className="text-base font-semibold">Create New Widget</span>
          <button onClick={closeModal}><FontAwesomeIcon icon={faClose} scale={3} color="#1c1c1c"/></button>
        </div>
        <div className="h-full w-full">
            <div className="h-1/5 flex flex-row justify-around gap-2">
                <div className="flex flex-col flex-1">
                  <label htmlFor="owner">Repo Owner</label>
                  <input className="border border-solid px-2 py-1 focus: outline-green-500" type="text" placeholder="Owner" name="owner" onChange={(e) => setOwner(e.target.value)}/>
                  {isOwnerFound && owner != ''? <span className="text-green-500 font-bold text-xs">Found!</span>:<span className="text-red-700 font-bold text-xs">Not Found!</span>}
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="repo-name">Repo Name</label>
                  <input className="border border-solid px-2 py-1 focus: outline-green-500" type="text" placeholder="Name" name="repo-name" onChange={(e) => setRepo(e.target.value)}/>
                  {isRepoFound && repo != ''? <span className="text-green-500 font-bold text-xs">Found!</span>:<span className="text-red-700 font-bold text-xs">{owner} does not have this repo!</span>}
                </div>
            </div>

            <div className="h-1/5 flex flex-row justify-around gap-2">
            <div className="flex flex-col flex-1">
                  <label htmlFor="about">Display Info About:</label>
                  <select name="about" className="border border-solid px-2 py-1 focus: outline-green-500">
                    <option value="commits">Commits</option>
                    <option value="languages">Languages</option>
                    <option value="issues">Issues</option>
                    <option value="traffic">Traffic</option>
                    <option value="contributers">Contributers</option>
                  </select>
                </div>


                <div className="flex flex-col flex-1">
                  <label htmlFor="about">Chart Type:</label>
                  <select name="about" className="border border-solid px-2 py-1 focus: outline-green-500">
                    <option value="commits">Bar</option>
                    <option value="languages">Line</option>
                    <option value="issues">Pie</option>
                    <option value="traffic">Doghnut</option>
                    <option value="contributers">Bubble</option>
                  </select>
                </div>
            </div>
            <div className="h-1/5 flex flex-row justify-around gap-2">
            <div className="flex flex-col flex-1">
                  <label htmlFor="owner">Title</label>
                  <input className="border border-solid px-2 py-1 focus: outline-green-500" type="text" placeholder="Title" name="title" onChange={(e) => {console.log(e.target.value)}}/>
                </div>

            </div>
            <div className="h-1/5 flex flex-row justify-around gap-2">
            <div className="flex flex-col flex-1">
                  <label htmlFor="owner">Description</label>
                  <textarea name="description" onChange={(e)=>console.log(e.target.value)} cols="30" rows="10" placeholder="Description" className="border border-solid px-2 py-1 focus: outline-green-500"/>
                </div>
            </div>

            <div className="h-2/5 flex flex-row justify-around gap-2 my-4">
                <div className="flex flex-col flex-1">
                  <label htmlFor="colors">Choose One or Multiple Colors:</label>
                  <input className="h-20 w-60 flex-1" type="color" name="colors" onChange={(e) => setColor(e.target.value)}/>
                  <Button 
                    text={'Add'}
                    style={'bg-green-500 px-2 py-1 rounded-full text-sm font-bold text-white'}
                    action={() => addColor(color)}
                  />
                </div>
                <div className="overflow-scroll flex flex-col flex-1">
                    <span>Color Palette</span>
                    <ul className="flex-1">
                        {
                            colorsList.map((color, index) =>{
                                return (<li key={index}>
                                    <div className="flex flex-row space-around justify-between items-center gap-4 px-4 py-1">
                                            <div style={{height: 16, width: 50, backgroundColor: color, flex: 1}}></div>
                                        <button onClick={() => removeColor(index)}><FontAwesomeIcon icon={faClose} scale={1} color="#1c1c1c"/></button>
                                    </div>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="h-1/5 w-full flex flex-row justify-end items-end gap-2 py-2">
                <Button
                    text={'Create'}
                    style={'bg-green-500 px-5 py-2 rounded-full text-md font-bold text-white'} 
                    action={null}
                />
                <Button
                    text={'Cancel'} 
                    style={'border border-green-500 px-5 py-2 rounded-full text-md font-bold text-green-500'} 
                />

            </div>

        </div>


    </Modal>
}

export default CreateWidgetModal;