import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
    <h3 className="menuItemName">MO Insights</h3>
    </div>
  );
}

export default MenuItem;