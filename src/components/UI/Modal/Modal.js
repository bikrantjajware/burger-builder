import classes from './Modal.module.css';
import React,{Component} from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component{

    shouldComponentUpdate(nextProps,nextState)
    {
            return nextProps.show !== this.props.show
        
    }

    componentDidUpdate(){
        console.log('Modal willupdate');
    }

    render(){
        return (
            <Auxillary>
        <Backdrop show={this.props.show} clicked={this.props.modelClosed}/>
        <div className={classes.Modal} 
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-10vh)',  
                    opacity : this.props.show ? '1' : '0'
                }}
                >

        {this.props.children}


    </div>
    </Auxillary>
        );
    }
}


export default Modal;