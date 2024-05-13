import ImageCard from "./ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            regular={image.urls.regular}
            openModal={openModal}
            src={image.urls.small}
            alt={image.alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
