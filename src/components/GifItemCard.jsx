export const GifItemCard = ({ title, url }) => {
  const card = {
    width: "18rem",
  };
  return (
    <div className="card m-2" style={card}>
      <img src={url} alt={title} className="card-img-top" />
      <div class="card-body">
        <p class="card-text">{title}</p>
      </div>
    </div>
  );
};
