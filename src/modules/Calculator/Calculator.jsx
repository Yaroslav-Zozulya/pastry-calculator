import { useState } from "react";
import data from "@/db.json";

export const Calculator = () => {
  const [weight, setWeight] = useState(0);
  const [proportions, setProportions] = useState(null);

  const handleInputChange = (e) => {
    setWeight(e.target.value.trim());
  };

  const handleSelectChange = (e) => {
    const id = e.target.options[e.target.selectedIndex].value;
    const newProportions = data.receipts.find(
      (item) => item.id === Number(id)
    ).ingredients;
    setProportions(newProportions);
  };

  const isWeight = Number(weight) !== 0 && weight !== "";

  return (
    <div className="w-full sm:w-72 md:w-96 mx-auto">
      <select
        className="w-full mb-2 p-1 rounded-lg"
        onChange={handleSelectChange}
      >
        <option value="">Выберите вариант</option>
        {data.receipts.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <input
        className="w-full mb-2 p-1 rounded-lg"
        type="number"
        name="weight"
        placeholder="Сколько крема? 😉"
        onChange={handleInputChange}
      />

      {isWeight && (
        <ul className="rounded-lg shadow-lg p-2 bg-sky-200">
          {proportions.map((item) => (
            <li className="text-base font-semibold mb-1" key={item.name}>
              {item.name}: {Math.round(weight * item.proportion)}г
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
