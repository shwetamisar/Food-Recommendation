import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emo = "😋";

  const FoodDB = {
    indian: [
      { food: "butter Chicken", rating: "4.5/5" },
      { food: "Biryani", rating: "4.2/5" }
    ],
    Chinese: [
      { food: "Schezwan Rice", rating: "4/5" },
      { food: "Noodles Manchow", rating: "3.4/5" }
    ],
    Italian: [
      { food: "Pizza", rating: "4.3/5" },
      { food: "Pasta", rating: "4.1/5"}
    ]
  };
  var country = Object.keys(FoodDB);
  var [Fooder, setFood] = useState("indian");

  function Waiter(item) {
    Fooder = item;
    setFood(Fooder);
  }
  return (
    <div className="App">
      <h1 style={{ color: "orange" }}> {emo}FoodyLife</h1>
      <h3>Checkout my favorite dishes of different countries.</h3>
      <span>
        {country.map((item) => (
          <button
            onClick={() => Waiter(item)}
            key={item}
            style={{
              padding: "0.2rem",
              cursor: "pointer",
              margin: "0.5rem",
              width: "80px",
              fontWeight: "bold",
              backgroundColor: "#fdba74",
              borderRadius: "5px"
            }}
          >
            {item}
          </button>
        ))}
      </span>
      <hr></hr>
      <div>
        {FoodDB[Fooder].map((item) => {
          return (
            <div
              key={item.food}
              style={{
                fontsize: "larger",
                marginTop: "2rem",
                marginLeft: "20rem",
                marginRight: "20rem",
                border: "2px solid brown",
                padding: "5px",
                borderRadius: "5px"
              }}
            >
              <div style={{ padding: "5px", fontWeight: "bold" }}>
                {item.food}
              </div>
              <div>{item.rating}</div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
