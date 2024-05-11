import ImageCard from "./ImageCard";

const ImageGallery = ({ images }) => {
  console.log(images);

  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
