import './App.css';
import Banner from './components/banner/Banner';
import Categories from './components/categories/Categories';
import Header from './components/header/Header';
import Items from './components/items/Items';
import Footer from './footer/Footer';

function App() {
  return (
    <div >
      <Header></Header>
      <Banner></Banner>
      <Categories></Categories>
      <Items></Items>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
