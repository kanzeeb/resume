import Footer from './components/footer';
import MyInfo from './components/myInfo';
import Navbar from './components/navbar';
import Separator from './components/separator';
import TechSkills from './components/technologies';
import './styles/main.css'

function App() {
  return (
    <>
      <Separator />
      <Navbar />
      <MyInfo />      
      <TechSkills />
      <Footer />
    </>
  );
}

export default App;
