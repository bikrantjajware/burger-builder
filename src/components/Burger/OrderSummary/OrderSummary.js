import React,{Component} from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component{

    componentDidUpdate()
    {
        console.log('[orderSummary] willupdate');
    }

    

    render()
    {

        const ingredientsSummary = Object.keys(this.props.ingredients).map( (igKey)=>
        {
            return (<li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey} : {this.props.ingredients[igKey]}</span>
            </li>)
            
            
        });
        
        return (
            <Auxillary> 
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients</p>
        <ul>
            {ingredientsSummary}
        </ul>
        <strong>Total Price:{this.props.price.toFixed(2)}</strong>
        <p>Proceed to checkout..?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType='Success' clicked={this.props.purchaceContinue}>CONTINUE</Button>
    </Auxillary>);
        
    }

}
export default OrderSummary;