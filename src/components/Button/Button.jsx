import { Component } from 'react';
import classes from './Button.module.css'

export class Button extends Component {

    render() {
        const {onLoadMoreClick} = this.props

        return (
            <button 
                type='button' 
                className={classes.Button} 
                onClick={() => onLoadMoreClick()}
            >Load more</button>
        )
    }
}