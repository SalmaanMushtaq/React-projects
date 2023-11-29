import { useState } from "react";
import BillInput from "../BillInput";
import Output from "../Output";
import Reset from "../Reset";
import SelectPersentage from "../SelectPersentage";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [persentageOne, setPersentageOne] = useState("");
  const [persentageTwo, setPersentageTwo] = useState("");
  const totalTip = (bill * (persentageOne + persentageTwo)) / 2 / 100;
  const totalBill = bill + totalTip;

  function handleReset() {
    setBill("");
    setPersentageOne("");
    setPersentageTwo("");
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPersentage persentage={persentageOne} onSelect={setPersentageOne}>
        How did you like the service?
      </SelectPersentage>
      <SelectPersentage persentage={persentageTwo} onSelect={setPersentageTwo}>
        How did your friend like the service?
      </SelectPersentage>
      {bill > 0 && (
        <>
          <Output bill={bill} totalTip={totalTip} totalBill={totalBill} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
};

export default TipCalculator;
