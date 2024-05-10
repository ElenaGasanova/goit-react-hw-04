import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar ";
import fetchData from "./services/api";

const App = () => {
  const fetchGallery = (searchValue) => {
    fetchData();
  };

  return (
    <>
      <Toaster />
      <SearchBar fetchGallery={fetchGallery} />
      {/* <ImageGallery /> */}
    </>
  );
};

export default App;
