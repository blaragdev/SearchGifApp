import { GifItemCard } from "./";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);

  return (
    <div className="m-3">
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="d-flex flex-row flex-wrap justify-content-center">
        {images.map((image) => (
          <GifItemCard key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
