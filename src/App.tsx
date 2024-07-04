import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <div className="app-content">
        <div className="Container">
          <Header/>
          <Navbar/>
        </div>
      </div>
    </div>
  );
}

export default App;
