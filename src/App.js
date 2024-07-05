import './App.css';
import Navbar from './Navbar.js' ;
import Home from './Home.js';

function App() {
  const title = "Welcome to the blog";
  const likes = 10;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
