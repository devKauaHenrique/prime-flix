import axios from 'axios';
//Para importar o axios instalado no cmd
//O Axios é semelhante ao 'fetch' para buscar a API

// BASE DA URL: https://api.themoviedb.org/3/
// URL API: /movie/now_playing?api_key=b17b94c206f968e4dec1dbb0c6a812ec&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;