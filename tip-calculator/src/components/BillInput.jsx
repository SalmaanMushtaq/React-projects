const BillInput = ({ bill, onSetBill }) => {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        name="bill"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
};

export default BillInput;
