import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="App min-vh-100">
      <Banner bannerText="Sextant" />
      <div className="exhibit-container d-flex justify-content-evenly flex-wrap ">
        <Exhibit heading="This is the first exhibit" />
        <Exhibit heading="Awesome Exhibit" />
        <Exhibit heading="Awesome Exhibit #2" />
        <Exhibit heading="Awesome Exhibit #3" />

      </div>
    </div>
  );
}

export default App;
