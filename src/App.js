import CardList from "./components/CardList/CardList";
import "./App.css";

function App() {
  // Оновлений масив даних з унікальними картинками
  const cardsData = [
    {
      id: 1,
      title: "Лісова прогулянка",
      description: "Затишний лісовий пейзаж для відпочинку на природі.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Місто вночі",
      description: "Нічне місто з яскравими вогнями та неймовірною атмосферою.",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Гірський пейзаж",
      description: "Краєвид величних гір під яскравим сонячним небом.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Морський берег",
      description: "Спокійний пляж із чистою водою та м'яким піском.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Захід сонця",
      description: "Романтичний захід сонця, що фарбує небо у дивовижні кольори.",
      image: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Мій фотокаталог</h1>
      {/* Передаємо масив у компонент CardList через пропс items */}
      <CardList items={cardsData} />
    </div>
  );
}

export default App;