import React, { useState } from "react";
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
  return (
    <>
      <Buttons>
        <button disabled={сategoriesList.length === 9} onClick={clickAddButton}>
          Добавить
        </button>
        <button onClick={clickDelButton}>
          {isDelOpen ? "Отмена" : "Удалить"}
        </button>
      </Buttons>
      <FlexDiv>{сategoriesList}</FlexDiv>
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
