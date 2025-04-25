import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar 
      />
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Tech Shop</h1>
        <ProductList />
      </main>
      
      <Cart />
    </div>
  );
}

export default App;
