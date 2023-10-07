import React from "react";
import GridLayout from "react-grid-layout";
import Widget from "./widget";

const Grid = () => {

    const layout = [
        { i: "a", x: 0, y: 0, w: 15, h: 10},
        { i: "b", x: 16, y: 0, w: 15, h: 10},
        { i: "c", x: 0, y: 11, w: 15, h: 10},
        { i: "d", x: 16, y: 11, w: 15, h: 10}
      ];
      return <GridLayout
          className="layout"
          layout={layout}
          cols={30}
          rowHeight={30}
          width={1200}
        >
          <div key="d" className="border-2 border-blue-600 p-5 rounded-md h-auto"><Widget title={"Github Commits Per Date"} type='commits'/></div>
          <div key="a" className="border-2 border-blue-600 p-5 rounded-md h-auto"><Widget title={"Languages Used"} type='langs'/></div>
{/*           <div key="b" className="border-2 border-blue-600 p-5 rounded-md h-auto"><Widget title={"Github Commits Per Date"}/></div>
          <div key="c" className="border-2 border-blue-600 p-5 rounded-md h-auto"><Widget title={"Github Commits Per Date"}/></div> */}

        </GridLayout> 
}

export default Grid;