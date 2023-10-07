import React from "react";
import Grid from "./components/grid";
import Navbar from "./components/navbar";
import WidgetControls from "./components/widgetControls";

const Main = () => {
    return <div>
        <Navbar />
        <WidgetControls />
        <Grid />
    </div>
}
export default Main;