
import { Link } from "react-router-dom";

function Header({cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, isEmpty, cartTotal }) {
  
  return (
    <header className="py-5 header header-product">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <h1>
          <Link to="/" className="text-decoration-none text-white">
            TechShop
          </Link>
        </h1>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img id="carritoImagen"
                className="img-fluid"
                src="/img/carrito.png"
                alt="imagen carrito"
              />
              <div id="carrito" className="bg-white p-3">
                {isEmpty ? ( //si el carrito está vacío
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((product) => (
                          <tr key={product.id}>
                            <td>
                              <img
                                className="img-fluid" 
                                src={product.images?.formats?.thumbnail?.url}
                                alt="imagen producto"
                              />
                            </td>
                            <td>{product.name}</td>
                            <td className="fw-bold">{product.price}€</td>
                            <td className="flex align-items-start gap-4">
                              <button type="button" className="btn btn-dark" onClick={() => decreaseQuantity(product.id)}>
                                -
                              </button>
                              {product.quantity}
                              <button type="button" className="btn btn-dark" onClick={() => increaseQuantity(product.id)}>
                                +
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-danger" type="button" onClick={() => removeFromCart(product.id)}>
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-end">
                      Total pagar: <span className="fw-bold">{cartTotal}€</span>
                    </p>
                  </>
                )}

                <button className="btn btn-dark w-100 mt-3 p-2" onClick={()=> clearCart()}>
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
