import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import Widget from "./widget";
import { useSelector } from "react-redux";

const Grid = () => {

  const widgetData = useSelector((state) => state.widget);
  const [widgetsList, setWidgetsList] = useState([])

  useEffect(()=>{
    if(widgetData.title)
      setWidgetsList([...widgetsList, widgetData])
  },[widgetData])


    const layout = [
        {i: 'a', x: 0, y: 0, w: 10, h: 5, minW: 5},
        {i: 'b', x: 11, y: 0, w: 10, h: 5},
        {i: 'c', x: 0, y: 6, w: 10, h: 5},
        {i: 'd', x: 11, y: 6, w: 10, h: 5},
        {i: 'e', x: 0, y: 11, w: 10, h: 5}
      ];
      return <GridLayout
          className="layout"
          layout={layout}
          cols={30}
          rowHeight={30}
          width={1200}
        >
          {widgetsList.map((widget, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-200 shadow-md p-5 rounded-md"
                    data-grid={layout[index]}
                  >
                    <Widget
                      title={widget.title}
                      description={widget.description}
                      about={widget.about}
                      type={widget.chartType}
                      owner={widget.owner}
                      repo={widget.repo}
                      colors={widget.colors}
                    />
                  </div>
                ))}

        </GridLayout> 
}

export default Grid;