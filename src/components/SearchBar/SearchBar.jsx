import { toast } from 'react-hot-toast';


export default function SearchBar({ onSubmit }) {
    const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const image = form.elements.image.value;
    if (image.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(image);
    form.reset();
    };
    
    return (
<header>
  <form  onSubmit = {handleSubmit}>
          <input
    type="text"
    name="image"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
          <button type="submit">Search</button>
  </form>
</header>
    )
}