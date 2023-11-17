import { Component } from 'react';
import classes from './ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {

    render() {
        const {galleryItem, onImageClick} = this.props

        return (
            <li className={classes.ImageGalleryItem}>
                <img 
                    className={classes.ImageGalleryItemImage} 
                    src={galleryItem.webformatURL} alt={galleryItem.id} 
                    onClick={() => onImageClick(galleryItem.largeImageURL)}
                />
            </li>
        )
    }
}