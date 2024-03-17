import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-type": "application/json;charset=UTF-8",
  },
  // withCredentials: true, //기본값은 false 출처가 서로다른 요청간의 인증을 허락해준다.
});


export default http;
