import axios from "axios";

export default axios.create({
  headers: {
    Authorization:
      "Client-ID cfc4e146c3ff711101d121bfe96c1b0fcf41f66ebf93aac78567bee75d0d2a3d"
  },
  baseURL: "https://api.unsplash.com"
});
