import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Marquee from './components/Marquee';

const App:React.FC = () => {
  return (
    <div className='App'>
      <div className="app-content">
        <div className="Container">
          <Header/>
          <Navbar/>
        </div>
        <div className="Container-1">
          <Aboutme/>
        </div>
        <div className="Container-2">
          <Marquee/>
        </div>
      </div>
    </div>
  );
}

export default App;
