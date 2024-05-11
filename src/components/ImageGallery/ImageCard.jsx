import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt }) => {
  return (
    <div className={s.wrapper}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
