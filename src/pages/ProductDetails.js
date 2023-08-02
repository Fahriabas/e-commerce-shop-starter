import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading.......
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* disini untuk menaruh image */}
          <div>
            <img src={image} alt=""/>
          </div>
          {/* disini untuk menaruh text descrisi dab llai lain */}
          <div>text</div>
        </div>
        {/* immage, text wrapper */}
      </div>
    </section>
  );
};

export default ProductDetails;
