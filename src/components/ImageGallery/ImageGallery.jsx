import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
	return (
		<div>  
			<ul  className={s.gallery}>
				{images.map(item => (
					<li key={item.id}>
					<ImageCard item={item} onImageClick={onImageClick}/>						
	</li>
				))}
	
			</ul>
			 </div>
    )
}