import { useState } from "react";
import { SectionTitle, SectionWrapper } from "../../../utils/utils";
import AddOperation from "../../common/AddOperation";
import Operation from "./Operation/Operation";

const Finance = ({
  selectedCategory,
  addOperation,
  deleteOperation,
  calculateCategorySum,
  calculateTotalSum,
  editOperation,
}) => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  let openAddOperationModal = () => {
    setIsAddOpen(true);
  };
  let operationsList =
    selectedCategory &&
    selectedCategory.operations.map((o) => {
      return (
        <Operation
          deleteOperation={deleteOperation}
          editOperation={editOperation}
          calculateCategorySum={calculateCategorySum}
          calculateTotalSum={calculateTotalSum}
          o={o}
        />
      );
    });
  return (
    <SectionWrapper align="center" direction="column">
      {selectedCategory ? (
        <>
          <SectionTitle>Финансы</SectionTitle>
          <div>Выбранная категория: {selectedCategory.name}</div>
          <div>Сумма: {selectedCategory.sum}</div>
          <div>
            Операции:{" "}
            {selectedCategory.operations.length !== 0 ? "yes" : "отсутствуют"}
          </div>
          <button onClick={openAddOperationModal}>Добавить</button>
        </>
      ) : (
        <div>Выберите категорию слева</div>
      )}
      {isAddOpen && (
        <AddOperation
          buttonName={"Добавить"}
          updateState={addOperation}
          isAddOpen={isAddOpen}
          setIsAddOpen={setIsAddOpen}
          calculateCategorySum={calculateCategorySum}
          calculateTotalSum={calculateTotalSum}
        />
      )}
      {operationsList}
    </SectionWrapper>
  );
};

export default Finance;
