import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emo = "😋";

  const FoodDB = {
    indian: [
      {
        food: "butter Chicken",
        description:
          "Butter chicken is one of the most popular Indian curries.Typically a mild curry, it combines onions, butter and cream in a velvety smooth tomato sauce with chicken chunks.",
        rating: "4.5/5"
      },
      {
        food: "Biryani",
        description:
          "Rice and meat or vegetables are prepared separately, then combined and slow-cooked in the oven to create this aromatic dry dish",
        rating: "4.2/5"
      },
      {
        food: "Chole Kulche",
        description:
          "This dish is a delicious combination of an all-purpose flour bread tossed in butter along with tangy and spicy chole",
        rating: "3.9/5"
      }
    ],
    Chinese: [
      {
        food: "Peri Peri Chicken Satay",
        description:
          "Chicken Satay is a mouth-watering starter recipe. Boneless chicken chunks marinated in a pool of spices and grilled to perfection.",
        rating: "4/5"
      },
      {
        food: "Dimsum",
        description:
          "Small bite-sized rounds stuffed with veggies or meat. Dimsums are perfect steamed snack to delight those evening cravings.",
        rating: "4.2/5"
      },
      {
        food: "Spring Rolls",
        description:
          "A crisp appetizer where shredded veggies are encased in thin sheets and then fried golden. ",
        rating: "3.4/5"
      }
    ],
    Italian: [
      {
        food: "Pizza margherita",
        description:
          "It is the most famous italian dish with a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella, basil, a drizzle of olive oil, and a sprinkle of salt.",
        rating: "4.3/5"
      },
      {
        food: "Lasagna",
        description:
          "lasagna, pasta dish of Italian origin, Loaded with parmesan cheese and layered with a mix of vegetables.",
        rating: "4.2/5"
      },
      {
        food: "Bruschetta",
        description:
          "Bruschetta has grilled bread topped with veggies, rubbed garlic and tomato mix.",
        rating: "3.8/5"
      }
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
              <div>{item.description}</div>
              <div style={{ padding: "5px", fontWeight: "bold" }}>
                {item.rating}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
