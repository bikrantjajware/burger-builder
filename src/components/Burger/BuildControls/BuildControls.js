import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label : 'Salad',type:'salad'},
    {label : 'Bacon',type:'bacon'},
    {label : 'Cheese',type:'cheese'},
    {label : 'Meat',type:'meat'},
]
const buildControls = (props) => (
    <div className={classes.buildControls}> 
    <center><p>Current Price:<strong>{props.price.toFixed(2)}</strong></p></center>
        { controls.map( cntrl =>{ 
            console.log(cntrl.type);
            return (
        <BuildControl 
            key={cntrl.label} 
            label={cntrl.label}
            added={ () => props.ingredientsAdded(cntrl.type) }
            removed={ () => props.ingredientsRemoved(cntrl.type) }
            disabled = {props.disabled[cntrl.type] }
            /> )} )}

            <center><button className={classes.OrderButton} onClick={props.ordered} disabled={!props.purchasable} >ORDER NOW</button></center>
    </div>
)

export default buildControls;