import s from "./ImageCard.module.css";

const ImageCard = ({ regular, src, alt, openModal }) => {
  return (
    <div className={s.wrapper}>
      <img onClick={() => openModal(regular, alt)} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
