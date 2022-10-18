import { useState } from "react";
import {
  Button,
  FlexBox,
  SectionTitle,
  SectionWrapper,
} from "../../../utils/utils";
import AddOperation from "../../common/AddOperation";
import OperationBlock from "./OperationBlock";
import { Div, Info, Value } from "./Style";

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
  let isOperationsExist =
    selectedCategory && selectedCategory.operations.length !== 0;

  if (selectedCategory) {
    selectedCategory.operations.length !== 0 ? (
      <OperationBlock
        selectedCategory={selectedCategory}
        deleteOperation={deleteOperation}
        editOperation={editOperation}
        calculateCategorySum={calculateCategorySum}
        calculateTotalSum={calculateTotalSum}
      />
    ) : (
      "Нет операций"
    );
  }
  return (
    <SectionWrapper align="center" direction="column">
      {selectedCategory ? (
        <>
          <SectionTitle>Финансы</SectionTitle>
          <FlexBox width="100%" justify="space-between">
            <Info justify="center" fs="22px" width="48%">
              <Div>Категория:&nbsp;</Div>
              <Value title={selectedCategory.name}>
                {selectedCategory.name}
              </Value>
            </Info>
            <Info justify="center" fs="22px" width="48%">
              <Div>Сумма:&nbsp;</Div>
              <Value title={`${selectedCategory.sum}р`}>
                {selectedCategory.sum}р
              </Value>
            </Info>
          </FlexBox>
          <Button width="220px" onClick={openAddOperationModal}>
            Добавить операцию
          </Button>
        </>
      ) : (
        <Info justify="center" align="center">
          Выберите категорию слева
        </Info>
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
      {isOperationsExist && (
        <OperationBlock
          selectedCategory={selectedCategory}
          deleteOperation={deleteOperation}
          editOperation={editOperation}
          calculateCategorySum={calculateCategorySum}
          calculateTotalSum={calculateTotalSum}
        />
      )}
      {selectedCategory && !isOperationsExist && (
        <Info justify="center" align="center">
          Нет операций
        </Info>
      )}
    </SectionWrapper>
  );
};

export default Finance;
