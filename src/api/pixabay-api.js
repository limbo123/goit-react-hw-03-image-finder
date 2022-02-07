import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

export const fetchPhotos = (query, page) => {
    return axios
    .get(`/?q=${query}&page=${page}&key=25544631-4b01387b29552653d899bd0f0&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits)

} 
