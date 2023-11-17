import { Component } from "react"
import { SearchBar } from "./SearchBar/SearchBar";
import {getImages} from '../api/api'
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";


export class App extends Component {

  state = {
    galleryList: [],
    totalGalleryListCount: 0,
    searchText: '',
    page: 1,
    isLoading: false,
    isModalOpen: false,
    largeImageURL: ''
  }

  onSearchSubmit = async (searchText) => {
    await this.setState({
      galleryList: [],
      page: 1,
      isLoading: true,
      searchText
    })
    const response = await getImages(searchText, this.state.page);
    this.setState(prevState => ({
      page: prevState.page + 1,
      galleryList: [...response.data.hits],
      isLoading: false,
      totalGalleryListCount: response.data.totalHits
    }))
  }

  onLoadMoreClick = async () => {
    this.setState({
      isLoading: true
    })
    const response = await getImages(this.state.searchText, this.state.page);
    this.setState(prevState => ({
      page: prevState.page + 1,
      galleryList: [...prevState.galleryList, ...response.data.hits],
      isLoading: false
    }))
  }

  onImageClick = (largeImageURL) => {
    this.setState({
      isModalOpen: true,
      largeImageURL
    })
  }

  modalClose = () => {
    this.setState({
      isModalOpen: false
    })
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101'
        }}
      >
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        {
          this.state.galleryList.length > 0 &&
          <ImageGallery galleryList={this.state.galleryList} onImageClick={this.onImageClick}/>
        }
        {
          this.state.isLoading &&
          <Loader/>
        }
        {
          this.state.galleryList.length !== this.state.totalGalleryListCount &&
          <Button onLoadMoreClick={this.onLoadMoreClick}/>
        }
        {
          this.state.isModalOpen &&
          <Modal 
            largeImage={this.state.largeImageURL} 
            modalClose={this.modalClose}
          />
        }
      </div>
    );
  }
};
