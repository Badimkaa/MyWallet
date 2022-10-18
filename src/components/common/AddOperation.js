import { useState } from "react";
import { Buttons, Input, Menu, MenuWrapper, TextArea } from "./Style";
import ReactDOM from "react-dom";
import { Button } from "../../utils/utils";
import { handleKeyDown } from "../../utils/helpers";
const menuHeight = "250px";
const AddOperation = ({
  buttonName,
  setIsAddOpen,
  calculateCategorySum,
  calculateTotalSum,
  updateState,
  id,
  prevNote,
  prevSum,
}) => {
  const [sum, setSum] = useState(prevSum || "");
  const [note, setNote] = useState(prevNote);
  let [isFieldEmpty, setIsFieldEmpty] = useState(false);
  let addNewOperation = () => {
    if (!sum) {
      setIsFieldEmpty(true);
    } else {
      updateState(sum, note, id);
      calculateCategorySum();
      calculateTotalSum();
      setIsAddOpen(false);
      setIsFieldEmpty(false);
    }
  };
  let exitAddMenu = () => {
    setIsAddOpen(false);
    setNote("");
    setSum(0);
  };
  const handleChange = (evt) => {
    setSum(evt.target.value.replace(/[^0-9]/g, ""));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  console.log(note);
  return ReactDOM.createPortal(
    <MenuWrapper justify="center" align="center">
      <Menu
        direction="column"
        height={menuHeight}
        onKeyDown={(e) => handleKeyDown(e, exitAddMenu, addNewOperation)}
      >
        <div>Название операции</div>
        <form onSubmit={onSubmit}>
          <Input
            width="250px"
            type="number"
            // defaultValue={}
            value={sum}
            max={9999999999}
            autoFocus={true}
            onChange={handleChange}
            isFieldEmpty={isFieldEmpty && isFieldEmpty}
            placeholder={
              isFieldEmpty ? "Это поле обязательно!" : "Введите сумму:"
            }
          />
        </form>
        <div>Описание операции</div>
        <TextArea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Введите примечание операции:"
        />
        <Buttons justify="center">
          <Button onClick={addNewOperation}>{buttonName}</Button>
          <Button onClick={exitAddMenu}>Отмена</Button>
        </Buttons>
      </Menu>
    </MenuWrapper>,
    document.body
  );
};

export default AddOperation;
