import { Component } from 'react';
import classes from './ImageGallery.module.css'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {

    render() {
        const {galleryList, onImageClick} = this.props

        return (
            <ul className={classes.ImageGallery}>
                {
                    galleryList.map(galleryItem =>
                        <ImageGalleryItem 
                            key={galleryItem.id} 
                            galleryItem={galleryItem}
                            onImageClick={onImageClick}
                        />
                    )
                }
            </ul>
        )
    }
}