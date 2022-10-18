import { useState } from "react";
import { Button } from "../../utils/utils";
import Category from "../Main/Categories/Category";
import AddMenu from "./AddMenu";
import { Buttons, FlexDiv } from "./Style";

const CategoriesWrapper = ({
  categories,
  deleteCategory,
  setSelectedCategory,
  category,
  addCategory,
  calculateTotalSum,
}) => {
  let minHeight = category === "costs";
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  let сategoriesList = categories
    .filter((el) => el.type === category)
    .map((el) => {
      return (
        <Category
          key={el.id}
          name={el.name}
          id={el.id}
          sum={el.sum}
          isActive={el.isActive}
          isDelOpen={isDelOpen}
          deleteCategory={deleteCategory}
          setSelectedCategory={setSelectedCategory}
          calculateTotalSum={calculateTotalSum}
        />
      );
    });
  const clickAddButton = () => {
    setIsAddOpen(true);
    setIsDelOpen(false);
  };
  const clickDelButton = () => {
    isDelOpen ? setIsDelOpen(false) : setIsDelOpen(true);
  };
  let isDisabled = false;
  if (
    (сategoriesList.length === 9 && category === "costs") ||
    (сategoriesList.length === 6 && category === "income")
  ) {
    isDisabled = true;
  }
  return (
    <>
      <Buttons>
        <Button disabled={isDisabled} onClick={clickAddButton}>
          Добавить
        </Button>
        <Button isDelOpen={isDelOpen && isDelOpen} onClick={clickDelButton}>
          {isDelOpen ? "Отмена" : "Удалить"}
        </Button>
      </Buttons>
      <FlexDiv minHeight={minHeight}>{сategoriesList}</FlexDiv>
      {isAddOpen && (
        <AddMenu
          category={category}
          addCategory={addCategory}
          setIsAddOpen={setIsAddOpen}
          isAddOpen={isAddOpen}
        />
      )}
    </>
  );
};

export default CategoriesWrapper;
