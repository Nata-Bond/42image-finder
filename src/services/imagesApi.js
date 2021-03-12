import axios from "axios";

const key = "19012539-7c0dd5e15fe1ddd8f8e676462";

const fetchImages = ({ searchQuery = "", page = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);
};

export default { fetchImages };
