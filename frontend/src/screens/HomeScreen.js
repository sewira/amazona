import React, { useEffect } from "react";

import Product from "../components/Product";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../action/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : error ? (
        "Error"
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
