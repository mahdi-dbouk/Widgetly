import React from "react";
import Button from "./shared/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faAdd } from "@fortawesome/free-solid-svg-icons";

const WidgetControls = () => {
    return <div className="h-14 flex flex-row px-5 justify-start items-center">
        <Button
            text={"New Widget"} 
            icon={<FontAwesomeIcon icon={faAdd} color="white" scale={2} />}
            style={'bg-green-500 p-2 rounded-full text-sm font-bold text-white'}
            action={null}
        />
    </div>
}

export default WidgetControls;