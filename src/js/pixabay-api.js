import axios from "axios";

const API_KEY = "55699882-78e76ba09440d2b00f4853bc0";

export default function getImagesByQuery(query) {
    return axios("https://pixabay.com/api/", {
        params: {
            key: API_KEY,
            q: `${query}`,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
    .then(({ data }) => {
        return data;
    })
}