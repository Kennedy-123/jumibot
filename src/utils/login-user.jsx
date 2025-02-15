import axios from "axios";
const loginUser = async (loginInput) => {
    const controller = new AbortController();
    const url =  import.meta.env.VITE_BASE_URL
  
    const response = await axios.post(
      `${url}/login-user`,
      loginInput,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        withCredentials: true
      },
    );
  
    return response.data;
  };

  export default loginUser