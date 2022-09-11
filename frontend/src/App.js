import data from "./Data";

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {
            data.products.map(product => (
              <div key={product.slug} className="product">
                <a href={`/product/${product.slug}`}>
                  <img src ={product.image} alt={product.name}/>
                  <div className="product-info">
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                  </div>
                </a>
                <button>Add to cart</button>
              </div>
            ))
          }

        </div>
      </main>
    </div>    
  );
};

export default App;
