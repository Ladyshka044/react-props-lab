import "./Card.css";

function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => alert(title)}>Дізнатися більше</button>
    </div>
  );
}
export default Card;