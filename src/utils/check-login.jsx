import axios from "axios";

const checkLoginStatus = async () => {
  const url =  import.meta.env.VITE_BASE_URL
  try {
    const res = await axios.get(`${url}/check-login`, { withCredentials: true });
    return res.data.logged_in
  } catch (error) {
    console.error("Error checking login status", error);
  }
};

export default checkLoginStatus