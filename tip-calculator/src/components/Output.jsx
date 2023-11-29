const Output = ({ bill, totalTip, totalBill }) => {
  return (
    <h3>
      You pay Rs {totalBill} (Rs{bill}+ Rs{totalTip} tip)
    </h3>
  );
};

export default Output;
