import NavBar from './components/navbar.js';
import Header from './components/header.js';
import WorksPrev from './components/worksPrev.js';
import Footer from './components/footer.js';
import './App.scss';
import "@fontsource/krub"
import '@fortawesome/react-fontawesome'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <WorksPrev/>
      <Footer />
    </div>
  );
}

export default App;
