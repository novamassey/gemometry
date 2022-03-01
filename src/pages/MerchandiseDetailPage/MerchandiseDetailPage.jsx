import MerchandiseListItem from "../../components/MerchandiseListItem/MerchandiseListItem";
import "../../utilities/send-request";
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import "./MerchandiseDetail.css";

export default function MerchandiseDetailPage({ user }) {
  const [itemSingle, setItemSingle] = useState();
  const [cart, setCart] = useState(null);
  const [image, setImage] = useState(true);
  const { id } = useParams();
  const isMounted = useRef(true);

  const navigate = useNavigate();

  async function getItem() {
    const itemOne = await itemsAPI.getById(id);
    setItemSingle(itemOne);
  }

  async function handleAddToCart(itemId) {
    const cart = await ordersAPI.addItemCart(itemId);
    setCart(cart);
    navigate("/orders/cart");
  }

  async function handleChangeImage() {
    setImage(!image);
  }

  async function getOrder() {
    const cart = await ordersAPI.getCart();
    setCart(cart);
  }

  useEffect(function () {
    if (isMounted.current) {
      getItem();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  <NewOrderPage item={itemSingle} cart={cart} getOrder={getOrder} />;

  return (
    <div>
      <div className="MerchandiseDetailPage">
        <div className="DetailText">
          <h2>{itemSingle && itemSingle.name}</h2>
          <p>{itemSingle && itemSingle.description}</p>
          <h2>${itemSingle && itemSingle.price}</h2>
        </div>
        <div className="DetailImage">
          {image && (
            <img
              className="DetailImg"
              onClick={handleChangeImage}
              src={itemSingle && itemSingle.img_url_detail}
            />
          )}
          {!image && (
            <img
              className="DetailImg"
              onClick={handleChangeImage}
              src={itemSingle && itemSingle.img_url_detail_extra}
            />
          )}
        </div>
        {user ? (
          <button
            className="detailButton"
            onClick={() => handleAddToCart(itemSingle._id)}
          >
            ADD TO CART
          </button>
        ) : (
          <Link className="LinkDetail" to="/login">
            LOGIN/SIGNUP TO ADD TO CART
          </Link>
        )}
      </div>
    </div>
  );
}
