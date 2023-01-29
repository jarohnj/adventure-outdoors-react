import axios from "axios";


const searchImages = async(term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID 9ckpeeCJba9PZyuuOXTUhY6j856VSf5gCBYJJUHUojg",
      },
      params: {
        query: term,
      },
    });

    return response.data.results;
}

export default searchImages;