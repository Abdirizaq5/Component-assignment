import { useState } from 'react'
import ProductImage from './assets/img.jpg';
import AppHeader from './component/AppHeader';
import ProductForm from './component/ProductForm';


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
    <div>
      <AppHeader image={ProductImage} title="Welcome To Product Page!" />
      <ProductForm />
    </div>
  </>
  );
};





export default App
