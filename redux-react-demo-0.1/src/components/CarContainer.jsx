import React from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
// import rootReducer from "../redux/RootReducers";
import { buyCar, sellCar } from "../redux/main/actions";

function CarContainer() {
  const buyCarNumber = useSelector((state) => state.buycar.carNumberOfBuyCar);
  const sellCarNumber = useSelector(
    (state) => state.sellcar.carNumberOfSellCar
  );

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Buying Car Number : {buyCarNumber}</h1>
      <h1>Selling Car Number :{sellCarNumber}</h1>
      <button onClick={() => dispatch(buyCar())}>Buy Car</button>
      <button onClick={() => dispatch(sellCar())}>Sell Car</button>
    </div>
  );
}

export default CarContainer;
