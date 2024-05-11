import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar ";
import fetchData from "./services/api";
import { useState } from "react";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [click, setClick] = useState();
  // const [page, setPage] = useState(0);
  // const [total, setTotal] = useState(0);
  // const [query, setQuery] = useState("");

  // useEffect(() => {
  //   const getData = async (query) => {
  //     try {
  //       setLoading(true);
  //       const { results, total } = await fetchData({
  //         query,
  //         page,
  //       });
  //       setPhotos((prev) => [...prev]);
  //       setTotal(total);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(focus);
  //     }
  //   };
  //   getData();
  // }, [query, page]);

  const fetchGallery = async (searchValue) => {
    try {
      setError(false);
      setLoading(true);
      const imagesData = await fetchData(searchValue);
      setGallery(imagesData.results);
    } catch (error) {
      setError(true);
      setGallery([]);
    } finally {
      setLoading(false);
    }

    // setQuery(searchValue);
    // setPhotos([]);
    // setPage(0);
  };
  console.log(gallery.length);
  return (
    <>
      <Toaster />
      <SearchBar fetchGallery={fetchGallery} />
      {gallery.length > 0 && <ImageGallery images={gallery} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <LoadMoreBtn />
    </>
  );
};

export default App;
