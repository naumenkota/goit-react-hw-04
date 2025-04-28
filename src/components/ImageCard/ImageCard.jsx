export default function ImageCard({item, onImageClick}) {
    return (
        <div>
  <img src={item.urls.small} alt={item.alt_description} onClick={() => onImageClick(item)} />
</div>
    )
}