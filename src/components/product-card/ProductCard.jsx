import React, { useContext } from "react";
import myContext from "../../context-api/MyContext";
import { useDispatch, useSelector } from "react-redux";
import {
  Addtocart,
  ClearCart,
  DecreaseQuantity,
  IncreaseQuantity,
  Removetocart,
} from "../../redux/CartSlice";

function ProductCard() {
  const context = useContext(myContext);
  const { mode, product } = context;
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart);
  
  const getItemQuantity = (id) => {
    const item = Cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (item) => {
    const existingProduct = Cart.find((cartItem) => cartItem.id === item.id);
    if (existingProduct) {
      // If item is already in cart, just increase its quantity
      dispatch(IncreaseQuantity(item.id));
    } else {
      // If item is not in cart, add it to the cart with quantity 1
      dispatch(Addtocart({ ...item, quantity: 1 }));
    }
  };
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <button
    onClick={() => dispatch(ClearCart())}
    type="button"
    className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm w-32 py-2"
>
    Clear Cart
</button>

        <div className="flex flex-wrap -m-4">
          {product.map((item) => {
            const { imageUrl, category, description, price, title, id } = item;
            const itemQuantity = getItemQuantity(id);
            return (
              <div key={id} className="p-4 md:w-1/4 drop-shadow-lg">
                <div
                  className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <div className="flex justify-center cursor-pointer">
                    <img
                      className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                      src={imageUrl}
                      alt="product"
                    />
                  </div>
                  <div className="p-5 border-t-2">
                    <h2
                      className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      E-Pak
                    </h2>
                    <h1
                      className="title-font text-lg font-medium text-gray-900 mb-3"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {title}
                    </h1>
                    <p
                      className="leading-relaxed mb-3"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {price}
                    </p>

                    {/* Add to Cart Button or Quantity Adjustment */}
                    {itemQuantity === 0 ? (
                      <button
                        onClick={() => handleAddToCart(item)}
                        type="button"
                        className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                      >
                        Add To Cart
                      </button>
                    ) : (
                      <div className="flex items-center">
                        <button
                          onClick={() => {
                            if (itemQuantity > 1) {
                              dispatch(DecreaseQuantity(item.id)); // Decrease quantity if more than 1
                            } else {
                              dispatch(Removetocart(item.id)); // Remove item if quantity is 1
                            }
                          }}
                          type="button"
                          className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-8 py-2"
                        >
                          -
                        </button>
                        <span className="mx-2 text-black">{itemQuantity}</span>
                        <button
                          onClick={() => {
                            dispatch(IncreaseQuantity(item.id));
                          }}
                          type="button"
                          className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-8 py-2"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
