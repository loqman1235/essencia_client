import { createContext, useEffect, useReducer } from "react";

export const ProductContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case "ADD_TO_CART":
      const productExist = state.find(
        (product) => product._id === action.payload._id
      );
      if (!productExist) {
        const newProduct = { ...action.payload, qty: 1 };
        return [...state, newProduct];
      } else {
        return state;
      }
    case "INCREMENT_QTY":
      return state.map((product) => {
        if (product._id === action.payload._id) {
          return { ...product, qty: product.qty + 1 };
        }
        return product;
      });
    case "DECREMENT_QTY":
      return state.map((product) => {
        if (product._id === action.payload._id) {
          return { ...product, qty: product.qty > 1 ? product.qty - 1 : 1 };
        }
        return product;
      });
    case "REMOVE_FROM_CART":
      return state.filter((product) => product._id !== action.payload._id);
    case "CLEAR_CART":
      return [];
  }
};

const ProductContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Adding a product to the shopping cart and preventing duplicate products
  const addProductToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const incrementQty = (product) => {
    const productExist = cart.find((item) => item._id === product._id);
    if (!productExist) {
      addProductToCart(product);
    } else {
      dispatch({ type: "INCREMENT_QTY", payload: product });
    }
  };

  const decrementQty = (product) => {
    const productExist = cart.find((item) => item._id === product._id);
    if (productExist && productExist.qty === 1) {
      removeProductFromCart(product);
    } else {
      dispatch({ type: "DECREMENT_QTY", payload: product });
    }
  };

  const removeProductFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <ProductContext.Provider
      value={{
        cart,
        addProductToCart,
        incrementQty,
        decrementQty,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
