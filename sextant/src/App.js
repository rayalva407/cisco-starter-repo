import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="App min-vh-100">
      <Banner />
      <div className="exhibit-container d-flex flex-wrap">
        <Exhibit />
        <Exhibit />
        <Exhibit />
        <Exhibit />
        <Exhibit />
        <Exhibit />
        <Exhibit />
        <Exhibit />
        <Exhibit />
      </div>
    </div>
  );
}

export default App;
