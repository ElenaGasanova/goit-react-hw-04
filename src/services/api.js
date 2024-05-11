import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const key = "XhZXKPXkMqxluEJQ2QNjl1MILulOpG1aR_IS76t49jg";

const fetchData = async (searchValue) => {
  const { data } = await axios.get("search/photos", {
    params: {
      client_id: key,
      query: searchValue,
      per_page: 12,
    },
  });

  return data;
};

export default fetchData;
