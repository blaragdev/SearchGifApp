export const getGifs = async (category) => {
  const key = "fyVkegrMqb7MF9re1WE3sDIx5vNDRX4z";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=12`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  // console.log(gifs);
  return gifs;
};
