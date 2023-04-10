import React from "react";
import Graph from "react-graph-vis";
import './styles.css';

const GraphV = ({graph}) => {

    const options = {
        layout: {
            hierarchical: true
        },
        edges: {
            color: "#000000"
        },
        height: "500px"
    };

    const events = {
        select: function(event) {
            var { nodes, edges } = event;
        }
    };
    return (
        <Graph
            graph={graph}
            options={options}
            events={events}
            getNetwork={network => {
                //  if you want access to vis.js network api you can set the state in a parent component using this property
            }}
        />
    );
}

export default GraphV