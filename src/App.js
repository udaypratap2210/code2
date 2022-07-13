import "./App.css";
import CustomizedTables from "../src/Table";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  let call = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const response = await res.json();
      setData(response.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    call();
  }, []);

  return (
    <div className="App">
      <CustomizedTables data={data} />
    </div>
  );
}

export default App;
