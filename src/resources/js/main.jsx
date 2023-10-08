import React, { useEffect, useState } from "react";
import Grid from "./components/grid";
import Navbar from "./components/navbar";
import WidgetControls from "./components/widgetControls";
import CreateWidgetModal from "./components/createWidgetModal";

const Main = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        console.log(modalIsOpen);
    },[modalIsOpen])
    return <div>
        <Navbar />
        <WidgetControls setModalState={setIsOpen} />
        <CreateWidgetModal modalState={modalIsOpen} setModalState={setIsOpen}/>
        <Grid />
    </div>
}
export default Main;