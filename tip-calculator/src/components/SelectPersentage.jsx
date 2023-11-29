const SelectPersentage = ({ children, persentage, onSelect }) => {
  return (
    <div>
      <label>{children}</label>
      <select
        value={persentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Abssolutely Amazing (20%)</option>
      </select>
    </div>
  );
};

export default SelectPersentage;
