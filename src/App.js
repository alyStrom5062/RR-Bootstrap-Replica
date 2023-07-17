import './App.css';
import TopBar from './components/TopBar';
import StoreListing from './components/StoreListing';
import BackgroundImage from './components/BackgroundImage';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <TopBar />
      <BackgroundImage />
      <StoreListing />
    </div>
  );
}

export default App;
