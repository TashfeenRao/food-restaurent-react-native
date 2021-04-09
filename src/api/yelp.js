import axios from "axios";
import { Header } from "react-native/Libraries/NewAppScreen";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "bearer daNURyoSiRfeuoV0dOO89V8wntkOL-jcwz8td6UWY34x71ELVL8ff5-Zqk_9JP0aX-PA5sxohExWgD5i-vMCUjA6GX9OJtrMpKhvTQIXyteYZZouqWpT-udpGklvYHYx",
  },
});
