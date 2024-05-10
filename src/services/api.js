import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const key = "XhZXKPXkMqxluEJQ2QNjl1MILulOpG1aR_IS76t49jg";

const fetchData = async () => {
  console.log(1);
  const { data } = await axios.get("photos", {
    params: {
      client_id: key,
    },
  });

  return data;
};

export default fetchData;
