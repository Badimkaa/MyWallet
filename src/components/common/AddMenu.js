import { useState } from "react";
import ReactDOM from "react-dom";
import { handleKeyDown } from "../../utils/helpers";
import { Button } from "../../utils/utils";
import { Buttons, Input, Menu, MenuWrapper } from "./Style";

const AddMenu = ({ setIsAddOpen, addCategory, category }) => {
  let [isFieldEmpty, setIsFieldEmpty] = useState(false);
  let [name, setName] = useState("");
  let addNewCategory = () => {
    if (!name) {
      setIsFieldEmpty(true);
    } else {
      addCategory(name, category);
      setIsAddOpen(false);
      setName(" ");
    }
  };
  let exitAddMenu = () => {
    setIsAddOpen(false);
    setName("");
  };

  return ReactDOM.createPortal(
    <MenuWrapper
      justify="center"
      onKeyDown={(e) => handleKeyDown(e, exitAddMenu, addNewCategory)}
      align="center"
    >
      <Menu direction="column" align="center" justify="space-between">
        <div>Название категории:</div>
        <Input
          type="text"
          autoFocus={true}
          onChange={(e) => setName(e.target.value)}
          isFieldEmpty={isFieldEmpty && isFieldEmpty}
          placeholder={
            isFieldEmpty
              ? "Это поле обязательное!"
              : "Введите название категории:"
          }
        />
        <Buttons align="flex-end">
          <Button margin="10px 5px 10px 0" onClick={addNewCategory}>
            Добавить
          </Button>
          <Button onClick={exitAddMenu}>Отмена</Button>
        </Buttons>
      </Menu>
    </MenuWrapper>,
    document.body
  );
};

export default AddMenu;
