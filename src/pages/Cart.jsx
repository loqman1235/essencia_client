import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeProductFromCart, clearCart } = useContext(ProductContext);
  const { isAuthenticated } = useContext(AuthContext);

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );

  const handleCheckout = async () => {
    const { email, address } = JSON.parse(localStorage.getItem("user"));
    // console.log(email);
    try {
      const response = await api.post("/create-checkout-session", {
        cart,
        email,
        address,
        total,
      });
      console.log(response.data);
      window.location.href = response.data.sessionUrl;
      // Clear cart
      clearCart();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full px-5 md:px-10 mb-20 mt-5">
      <h3 className="font-playfair font-bold text-2xl mb-2">Mon Panier</h3>
      {cart.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table mb-5">
            {/* head */}
            <thead>
              <tr>
                <th className="px-0">Produits</th>
                <th className="px-0">Quantité</th>
                <th className="px-0">Sous-total</th>
                <th className="px-0">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product._id}>
                  <td className="flex items-center gap-5 px-0">
                    <div className="w-20 h-20 p-2 overflow-hidden bg-[#FDF6E9]">
                      <img
                        src={`http://localhost:3001/${
                          product.images && product.images[0]
                        }`}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold font-serif uppercase">
                        {product.name}
                      </h3>
                      <p className="uppercase">{product.volume} ml</p>
                      <span className="text-[#088080]  font-semibold">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  </td>
                  <td className="px-0">
                    <p className="font-semibold">{product.qty}</p>
                  </td>
                  <td className="text-[#088080] font-semibold px-0">
                    ${product.price * product.qty.toFixed(2)}
                  </td>
                  <td className="px-0">
                    <button
                      className="text-black"
                      onClick={() => removeProductFromCart(product)}
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full flex items-center justify-between">
            <h3 className="text-lg font-bold">Total: ${total.toFixed(2)}</h3>
            <button
              className="primary_btn"
              onClick={() => {
                if (isAuthenticated) {
                  handleCheckout();
                } else {
                  navigate("/login");
                }
              }}
            >
              Procéder à la caisse
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-400">Votre panier est vide.</p>
      )}
    </div>
  );
};

export default Cart;
