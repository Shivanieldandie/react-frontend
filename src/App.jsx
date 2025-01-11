import React, { useState, useEffect} from 'react'

function App() {
  const [Product,setProduct] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/products")
    .then((response) => response.json())
   
    .then((data) => console.log(data))
  }, []);
  return (
    <ul style={{ listStyleType: "none"}}>
      {Product.map((item) => (
        <li>
          <img src={item.img} width={200} height={200} />
          {item.title}
        </li>
      )
    )}
    </ul>
  );
}

export default App