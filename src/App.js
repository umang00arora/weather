import "./App.css";
import WeatherApp from "./components/WeatherApp/WeatherApp";
import bg from "./img/bg.jpg"

function App() {
  

  return (
    <div className="bg" style={{backgroundImage: `url(${bg})`}}>
      <WeatherApp />
    </div>
  );
}

export default App;