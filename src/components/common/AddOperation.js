import React, { useState } from "react";
import { Input, Menu, MenuWrapper, TextArea } from "./Style";
import ReactDOM from "react-dom";
const AddOperation = ({
  buttonName,
  setIsAddOpen,
  calculateCategorySum,
  calculateTotalSum,
  updateState,
  id,
}) => {
  const [sum, setSum] = useState(0);
  const [note, setNote] = useState("");
  let addNewOperation = () => {
    updateState(sum, note, id);
    calculateCategorySum();
    calculateTotalSum();
    setIsAddOpen(false);
  };
  let exitAddMenu = () => {
    setIsAddOpen(false);
    setNote("");
    setSum(0);
  };
  return ReactDOM.createPortal(
    <MenuWrapper justify="center" align="center">
      <Menu direction="column" height={"200px"}>
        <Input
          type="number"
          autoFocus={true}
          onChange={(e) => setSum(e.target.value)}
          placeholder="Введите сумму:"
        />
        <TextArea
          onChange={(e) => setNote(e.target.value)}
          placeholder="Введите примечание операции:"
        />
        <button onClick={addNewOperation}>{buttonName}</button>
        <button onClick={exitAddMenu}>Отмена</button>
      </Menu>
    </MenuWrapper>,
    document.body
  );
};

export default AddOperation;
