import { Component } from "react";
import classes from "./Modal.module.css"

export class Modal extends Component {

    constructor(props){
        super(props);
        this.onEscPress = this.onEscPress.bind(this);
    }

    onEscPress(event){
        if (event.code === "Escape") {
            this.props.modalClose()
        }
    }

    componentDidMount() {
        document.addEventListener('keyup', this.onEscPress)
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.onEscPress)
    }

    render() {
        const {largeImage, modalClose} = this.props;

        return (
            <div className={classes.Overlay} onClick={() => modalClose()}>
                <div className={classes.Modal} onClick={e => e.stopPropagation()}>
                    <img src={largeImage} alt=""/>
                </div>
            </div>
        )
    }
}