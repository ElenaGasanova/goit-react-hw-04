import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar ";
import { fetchData, fetchByLoadMore } from "./services/api";
import { useRef, useState } from "react";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal ";

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const savedSearchValue = useRef();
  const page = useRef(1);
  const regularRef = useRef();
  const altRef = useRef();

  // document.addEventListener("keydown", () => {
  //   closeModal();
  // });

  const fetchGallery = async (searchValue) => {
    try {
      setError(false);
      setLoading(true);
      const imagesData = await fetchData(searchValue, page.current);
      setGallery(imagesData.results);
    } catch (error) {
      setError(true);
      setGallery([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMoreClick = async () => {
    try {
      setLoading(true);
      page.current += 1;
      const imagesData = await fetchByLoadMore(
        savedSearchValue.current,
        page.current
      );
      setGallery((prev) => [...prev, ...imagesData.results]);
    } catch {
      setError(true);
      setGallery([]);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (regular, alt) => {
    regularRef.current = regular;
    altRef.current = alt;

    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={fetchGallery} savedSearchValue={savedSearchValue} />
      {gallery.length > 0 && (
        <ImageGallery images={gallery} openModal={openModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {gallery.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMoreClick} />
      )}
      <ImageModal
        openModal={modalIsOpen}
        closeModal={closeModal}
        regularRef={regularRef}
        altRef={altRef}
      />
    </>
  );
};

export default App;
