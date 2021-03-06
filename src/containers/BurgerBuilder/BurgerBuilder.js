import React,{Component} from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon:0.7,
    cheese : 0.4,
    meat : 1.3,
}


class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0,
        },
        totalPrice : 4,
        purchasable:false,
        purchasing : false,

    }
    purchaseHandler = () =>
    {
        this.setState({
            purchasing:true,
        })
        
    }
    purchaseCancelHandler = () => 
    {
        this.setState({
            purchasing :false,
        })
    }

    purchaseContinueHandler = () => 
    {
        alert('Continue  ordering!!!');
    }


    updatePurchasableState(ingredients)
    {
        const sum = Object.keys(ingredients).map( (ikey) => {
            return ingredients[ikey];
        }).reduce( (sum,ele) => {
            return sum+ele;
        });

        this.setState({
            purchasable: sum>0
        })
    }
  




    addIngredientHandler = (type) => {
        

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const updatedPrice = this.state.totalPrice+priceAddition;

        this.setState( {
            totalPrice:updatedPrice,
            ingredients : updatedIngredients,
        })
        this.updatePurchasableState(updatedIngredients);

        console.log(this.state.ingredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if( oldCount <=0 ) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const updatedPrice = this.state.totalPrice - priceDeduction;

        this.setState( {
            totalPrice:updatedPrice,
            ingredients : updatedIngredients,
        })
        this.updatePurchasableState(updatedIngredients);
    }

    

    render() 
    {

        const disabledInfo = {...this.state.ingredients};
       for(let key in disabledInfo)
        {
                disabledInfo[key] = disabledInfo[key] <= 0;
        }
       
        return (
            <Auxillary>
                <Modal show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  purchaseCancelled={this.purchaseCancelHandler}
                                  purchaceContinue = {this.purchaseContinueHandler}
                                  price={this.state.totalPrice}
                                     />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                
                <BuildControls ingredientsAdded={this.addIngredientHandler}
                                ingredientsRemoved = {this.removeIngredientHandler} 
                                disabled={disabledInfo}
                                price = {this.state.totalPrice}
                                purchasable={this.state.purchasable}
                                ordered={this.purchaseHandler} />
            </Auxillary>
        );
    }
}

export default BurgerBuilder;