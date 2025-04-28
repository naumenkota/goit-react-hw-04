
import './App.css'
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { toast } from 'react-hot-toast';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';




function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [totalImage, setTotalImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const imagePerPage= 10;


  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
     
      try {
        setLoading(true);
         const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: query,
          page: page,
          per_page: imagePerPage,
        },
        headers: {
          Authorization: "Client-ID _G-Zc1fD7UTO0hME-8kCd98ZJcpFI-CupvsOgVlRTyo",
        },
         }); 
        
        setImages(prevImages => [...prevImages, ...response.data.results]);
        const total = response.data.total;
        setTotalImage(total);
        
      } catch (error) {
        console.log(error);
        setError(true);
        toast.error("Error. Try again")
      } finally {
           setLoading(false);
         }
  
    }

    fetchImages();
  }, [query, page, imagePerPage]);

  const handleSubmit = newQuery => {
      setQuery(newQuery);
    setPage(1);
     setImages([]);
  }

  const loadMoreImages = () => {
  setPage(prevPage => prevPage + 1); 
  };
  
    const handleImageClick = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>   
       <Toaster />
      <SearchBar onSubmit={handleSubmit}/>
      <ImageGallery images={images} onImageClick={handleImageClick}/>
      {images.length < totalImage && !loading && <LoadMoreBtn loadMoreImages={loadMoreImages} />}
      {loading && images.length > 0 && <Loader loading={loading} />}
      <ErrorMessage error={error} />
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
      
      </div>
  )
}

export default App
