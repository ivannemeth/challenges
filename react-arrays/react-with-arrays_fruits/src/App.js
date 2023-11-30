import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "banana", color: "yellow" },
    { id: 2, name: "apple", color: "red" },
    { id: 3, name: "cucumber", color: "green" },
    { id: 4, name: "carrot", color: "orange" },
    { id: 5, name: "potato", color: "brown" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
