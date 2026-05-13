import Card from "../Card/Card";
import "./CardList.css";

function CardList({ items }) {
  return (
    <div className="card-list">
      {items.map((item) => (
        <Card 
          key={item.id} 
          title={item.title} 
          description={item.description} 
          image={item.image} 
        />
      ))}
    </div>
  );
}
export default CardList;