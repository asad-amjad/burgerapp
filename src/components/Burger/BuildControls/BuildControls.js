import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
    
];



const builControls =(props)=>(
    <div className="BuilControls">
        {controls.map(ctrl => (
            <BuildControl
            Key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)} 
            disabled={props.disabled[ctrl.type]}/>

        ))}
    </div>
);

export default builControls;