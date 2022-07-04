import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="App min-vh-100">
      <Banner bannerText="Sextant" />
      <div className="exhibit-container d-flex justify-content-evenly flex-wrap ">
        <Exhibit v={"v4"} heading="This is the first exhibit" />
        <Exhibit v={"v6"} heading="Awesome Exhibit" />

      </div>
    </div>
  );
}

export default App;
