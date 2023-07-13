import { useEffect, useState } from "react";
import bg1 from "@/images/bg1.jpg";

export const Calculator = () => {
  const [weight, setWeight] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [cream, setCream] = useState(0);
  const [suger, setSuger] = useState(0);

  const handleChange = (e) => {
    setWeight(e.target.value.trim());
  };

  const suger_const = 0.136;
  const cheese_const = 0.741;
  const cream_const = 0.123;

  useEffect(() => {
    setCheese(Math.round(weight * cheese_const));
    setCream(Math.round(weight * cream_const));
    setSuger(Math.round(weight * suger_const));
  }, [weight]);

  const isWaight = weight !== 0 && weight !== "";
  return (
    <>
      <input
        type="number"
        name="weight"
        placeholder="Сколько крема? 😉"
        onChange={handleChange}
      />

      {isWaight && (
        <div>
          <img src={bg1} alt="bg" />
          <h2>Требуеться игридиентов</h2>
          <p>Творог: {cheese}г</p>
          <p>Сливки: {cream}г</p>
          <p>Сахарная пудра: {suger}г</p>
        </div>
      )}
    </>
  );
};
