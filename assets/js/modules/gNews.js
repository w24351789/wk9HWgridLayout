import axios from 'axios';
const apiKey = "1a1e3f52668d4687ae7e585116f09f7e";

export default axios.create({
  method: "get",
  baseURL: "https://newsapi.org/v2",
  params: {
    pageSize: 1
  },
  headers: {
    Authorization: apiKey
  }
});