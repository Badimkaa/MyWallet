import { Buttons, Menu, MenuWrapper } from "./Style";
import ReactDOM from "react-dom";
import { Button } from "../../utils/utils";
const ConfirmDelete = ({
  name,
  id,
  setConfirmDelete,
  deleteFunc,
  whatDelete,
  calculateTotalSum,
  calculateCategorySum,
  isCategorySumFuncNeed,
}) => {
  document.body.onkeydown = function (e) {
    if (e.key === "Enter") {
      deleteItem();
    } else if (e.key === "Escape") {
      closeModal(e);
    }
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setConfirmDelete(false);
  };
  const deleteItem = () => {
    deleteFunc(id);
    isCategorySumFuncNeed && calculateCategorySum();
    calculateTotalSum();
    setConfirmDelete(false);
  };
  return ReactDOM.createPortal(
    <MenuWrapper justify="center" align="center">
      <Menu direction="column" width="330px" justify="center" align="center">
        Вы действительно хотите удалить {whatDelete} 
{whatDelete === "категорию" && ` "${name}"`}?
        <Buttons>
          <Button onClick={deleteItem}>да</Button>
          <Button onClick={closeModal}>нет</Button>
        </Buttons>
      </Menu>
    </MenuWrapper>,
    document.body
  );
};

export default ConfirmDelete;
