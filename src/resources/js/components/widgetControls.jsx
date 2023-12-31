import React from "react";
import Button from "./shared/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const WidgetControls = ({setModalState}) => {
    const openModal = () => {
        setModalState(true);
    }
    return <div className="h-14 flex flex-row px-5 justify-start items-center">
        <Button
            text={"New Widget"} 
            icon={<FontAwesomeIcon icon={faAdd} color="white" scale={1} />}
            style={'bg-green-500 p-2 rounded-full text-xs font-bold text-white'}
            action={openModal}
        />
    </div>
}

export default WidgetControls;