import { Menu, MenuWrapper } from "./Style";
import ReactDOM from "react-dom";
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
      <Menu direction="column">
        Вы действительно хотите удалить {whatDelete}
        {whatDelete === "категорию" && ` ${name}`}?
        <div>
          <button onClick={deleteItem}>да</button>
          <button onClick={closeModal}>нет</button>
        </div>
      </Menu>
    </MenuWrapper>,
    document.body
  );
};

export default ConfirmDelete;
