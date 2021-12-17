import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useHistory } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
  id,
  img,
  name,
  price,
  description,
  stock,
}) => {
  //useStory for buttons: go Back, go to Home and go to Cart
  const { push, goBack } = useHistory();

  //STATES
  const [quantity, setQuantity] = useState(1);

  //CONTEXT
  const { addToCart, productInCart } = useContext(CartContext);

  //FUNCTION: create a new object item
  const handleAdd = () => {

    if (productInCart(id)) {

      alert("el producto ya se encuentra en el carrito");
      
    } else {

      if (quantity > 0) {
        const newItem = {
          id,
          name,
          price,
          img,
          quantity,
        };

        addToCart(newItem);
      }
    }
  };

  return (
    <>
      <div className="card mb-3 w-75">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={img}
              className="img-fluid rounded-start"
              alt="foto producto"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="product-description">Descripción: {description}</p>
              <p className="product-price">${price}</p>

              {productInCart(id) ? (
                <>
                  <CustomButton
                    textButton={"Finalizar Compra"}
                    onClick={() => push("/cart")}
                  />
                </>
              ) : (
                <>
                  {/* ItemCounter recibe el quantity y setQuantity que se modifican desde el componte ItemCounter */}

                  <ItemCount
                    quantity={quantity}
                    modifyQuantity={setQuantity}
                    stock={stock}
                  />

                  <CustomButton
                    textButton={"Agregar al Carrito"}
                    onClick={handleAdd}
                    disabled={setQuantity > stock}
                  />
                </>
              )}

              <p className="product-stock mt-1">
                Stock disponible: {stock} unidades
              </p>
              <CustomButton textButton={"Volver"} onClick={() => goBack()} />
              <CustomButton
                textButton={"Volver al inicio"}
                onClick={() => push("/")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;