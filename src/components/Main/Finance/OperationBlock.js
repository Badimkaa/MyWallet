import Operation from "./Operation/Operation";
import { ColumnTitle, Grid } from "./Style";

const OperationBlock = ({
  selectedCategory,
  deleteOperation,
  calculateCategorySum,
  calculateTotalSum,
  editOperation,
}) => {
  let operationsList =
    selectedCategory &&
    selectedCategory.operations
      .map((o) => {
        return (
          <Operation
            key={o.id}
            deleteOperation={deleteOperation}
            editOperation={editOperation}
            calculateCategorySum={calculateCategorySum}
            calculateTotalSum={calculateTotalSum}
            o={o}
          />
        );
      })
      .reverse();
  return (
    <Grid>
      <ColumnTitle>Сумма</ColumnTitle>
      <ColumnTitle>Дата</ColumnTitle>
      <ColumnTitle>Примечание</ColumnTitle>
      {/* <ColumnTitle></ColumnTitle> */}
      {/* <ColumnTitle></ColumnTitle> */}
      <ColumnTitle>Изменить</ColumnTitle>
      <ColumnTitle>Удалить</ColumnTitle>
      {operationsList}
    </Grid>
  );
};

export default OperationBlock;
