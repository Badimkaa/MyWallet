import { useState } from "react";
import deleteUrl from "../../../assets/images/delete.png";
import ConfirmDelete from "../../common/ConfirmDelete";
import { DelItem, Image, Item, ItemName } from "./Style";

const Category = ({
  name,
  id,
  isDelOpen,
  deleteCategory,
  setSelectedCategory,
  sum,
  isActive,
  calculateTotalSum,
}) => {
  const selectCategory = () => {
    setSelectedCategory(id);
  };

  const [confirmDelete, setConfirmDelete] = useState(false);
  const delItem = (e) => {
    isDelOpen ? setConfirmDelete(true) : selectCategory();
  };
  return (
    <Item
      justify="space-evenly"
      isActive={isActive}
      align="center"
      onClick={delItem}
    >
      <ItemName>{name}</ItemName>
      <div>{sum}</div>
      {isDelOpen && (
        <DelItem justify="center" align="center" isActive={isActive}>
          <Image src={deleteUrl} />
        </DelItem>
      )}
      {confirmDelete && (
        <ConfirmDelete
          whatDelete={"категорию"}
          name={name}
          deleteFunc={deleteCategory}
          setConfirmDelete={setConfirmDelete}
          calculateTotalSum={calculateTotalSum}
          id={id}
        />
      )}
    </Item>
  );
};

export default Category;
