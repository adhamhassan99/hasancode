import "./App.css";
import React from "react";

import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import dataArr from "./assets/data/card.data";

function App() {
  const [arrData, setArrData] = React.useState(dataArr);

  const setFavoriteIcon = (id) => {
    var newArr = [...arrData];

    newArr[id - 1].isFav = !newArr[id - 1].isFav;

    setArrData(newArr);
  };

  return (
    <div className="App">
      <Navbar />

      <div className="card-collection-container">
        {arrData.map((item) => {
          return (
            <Card
              key={item.id}
              onClickk={() => {
                setFavoriteIcon(item.id);
              }}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
