import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "37GCsluzklrAf9vDYK3RegkLy7SZ55DL";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
);

const createImageInSideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInSideDOM(imageUrl);
  })
  .catch((err) => console.log(err));
