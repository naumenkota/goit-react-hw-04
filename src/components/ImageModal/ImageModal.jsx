import Modal from 'react-modal';
import s from "./ImageModal.module.css";


export default function ImageModal({ image, onClose }) {
     if (!image) return null;

  return (
    <Modal
      className={s.modal}
      overlayClassName={s.overlay}
      isOpen={!!image}
      
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <button onClick={onClose} className={s.button}>Close</button>
      <div className={s.modalcontent}> 
      <img src={image.urls.regular} alt={image.alt_description}/>
      <p>{image.description || 'No description'}</p>
      <p>{image.user.name}</p>
        <p>Likes: {image.likes}</p>
        </div>
    </Modal>
  ); 
}