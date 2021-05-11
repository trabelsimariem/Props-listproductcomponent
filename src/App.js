
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navbar/NavBar';
import ProductList from './components/productList/ProductList';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
