import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const key = "XhZXKPXkMqxluEJQ2QNjl1MILulOpG1aR_IS76t49jg";

export const fetchData = async (searchValue, page) => {
  const { data } = await axios.get("search/photos", {
    params: {
      client_id: key,
      query: searchValue,
      per_page: 12,
      page,
    },
  });

  return data;
};

export const fetchByLoadMore = async (searchValue, page) => {
  const { data } = await axios.get("search/photos", {
    params: {
      client_id: key,
      query: searchValue,
      per_page: 12,
      page,
    },
  });

  return data;
};

// const sum = (a, b) => {
//   return a + b;
// };
// sum(2, 5);
