import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Data from "./Components/data";
export default function App() {
  let Cards = Data.map(function (items) {
    console.log(items);
    return <Card key={items.id} items={items} />;
  });
  return (
    <>
      <Navbar />
      <Hero />

      <section className="cards-list">{Cards}</section>
    </>
  );
}
