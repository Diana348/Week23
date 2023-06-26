import "./App.css";
import PriceCol from "./components/ui/PriceCol";
import data from "./data/prices";

function App() {
  return (
    <div className="App">
      {data.map((elem) => (
        <PriceCol
          name={elem.name}
          price={elem.price}
          speed={elem.speed}
          info={elem.info}
          isChosen={elem.isChosen}
          key={elem.name}
          titleColor={elem.titleColor}
          speedBlockColor={elem.speedBlockColor}
        />
      ))}
    </div>
  );
}

export default App;
