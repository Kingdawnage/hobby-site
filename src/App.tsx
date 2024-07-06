import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Marquee from './components/Marquee';
import Projectheader from './components/Projectheader';
import Exhibition from './components/Exhibition';

const App:React.FC = () => {
  return (
    <div className='App'>
      <div className="app-content">
        <div className="Container">
          <Header
              title='King'/>
          <Navbar
              tag1='home'
              tag2='projects'
              tag3='about-me'
              tag4='contacts'/>
        </div>
        <div className="Container-1">
          <Aboutme/>
        </div>
        <div className="Container-2">
          <Marquee/>
        </div>
        <div className="Container-3">
          <Projectheader/>
        </div>
        <div className="Container-4">
          <Exhibition/>
        </div>
        <div className="Container-5">
          
        </div>
      </div>
    </div>
  );
}

export default App;
