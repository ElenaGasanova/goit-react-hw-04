import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    height: "400px",
    padding: "0",
    border: "none",
  },
  overlay: {
    backgroundColor: "#3b3939",
  },
};

function ImageModal({ regularRef, altRef, openModal, closeModal }) {
  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={regularRef.current} alt={altRef.current} />
      </Modal>
    </div>
  );
}

export default ImageModal;
