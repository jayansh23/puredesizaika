import logo from './logo.svg';
import './App.css';
import Header from './container/shared/Header';
import Footer from './container/shared/Footer';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>

  )
};

export default App;
