import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";



export default function Product() {
  const [cartBtn, setCartBtn]=useState("Add To Cart")
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    if(cartBtn==="Add To Cart"){
      dispatch(addCart(product))
      setCartBtn("Remove Item")
    }else{
      dispatch(delCart(product))
      setCartBtn("Add To Cart")
    }
    
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={300} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-5">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bold">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star" />
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-primary px-4 py-2"
            onClick={() => addProduct(product)}
          >
            {cartBtn}
          </button>
          <Link to="/cart" className="btn btn-primary ms-2 px-3 py-2">
            Go to Cart
          </Link>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-6">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
