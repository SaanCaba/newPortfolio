import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Tecnologias from './components/Tecnologias';
import SideBar from './components/SideBar';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import WhatsAppIcon from './components/WhatsAppIcon';
import Redes from './components/Redes';

function App() {
  return (
    <div id='inicio' className="App position-relative">
      <Navbar />
      <SideBar />
      <WhatsAppIcon />
      <Aboutme />
      <Tecnologias />
      <Projects />
      <footer className='py-5'>
      <ContactMe />
      <Redes />
      </footer>
    </div>
  );
}

export default App;
