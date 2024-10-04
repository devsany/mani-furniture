import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { furniture_json } from "../JSON/PRODUCT_JSON";
import { useEffect, useState } from "react";
import ProductIdNav from "./ProductIdNav";

const ProductID = () => {
  const [data, setData] = useState({});
  const param = useParams();
  console.log(param);
  console.log(data);
  const fliter_Product_id = () => {
    const productId_Data = furniture_json.furniture.filter(
      (item) => item.id == param.id
    );
    setData(productId_Data[0]);
  };
  useEffect(() => {
    fliter_Product_id();
  });

  return (
    <div>
      <NavLink to="/product_page">Back</NavLink>

      <ProductIdNav data={data} />
    </div>
  );
};

export default ProductID;
