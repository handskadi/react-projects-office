import "./styles.css";
import { useState } from "react";

export default function Challenge() {
  const [price, setPrice] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [hisTip, setHisTip] = useState(0);
  const totalTip = price * ((myTip + hisTip) / 2 / 100);
  console.log(totalTip);
  return (
    <div>
      <hr />
      <br />
      <Input
        type="text"
        placeholder="Enter Price"
        price={price}
        setPrice={setPrice}
      >
        How much is the meal?
      </Input>
      <SelectPercentage tip={myTip} setTip={setMyTip}>
        How much satsfied are you?
      </SelectPercentage>
      <SelectPercentage tip={hisTip} setTip={setHisTip}>
        How much satsfied is your friend?
      </SelectPercentage>
      {price > 0 ? (
        <p>
          You will pay {price + totalTip}$ (Price is {price}$ & Trip is{" "}
          {totalTip}$ )
        </p>
      ) : null}
    </div>
  );
}

function Input({ children, placeholder, type, price, setPrice }) {
  return (
    <div>
      <label> {children} </label>
      <input
        type={type}
        placeholder={placeholder}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, tip, setTip }) {
  return (
    <div>
      <label> {children} </label>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
