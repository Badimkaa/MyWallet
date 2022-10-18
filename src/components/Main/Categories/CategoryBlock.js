import { Wrapper } from "../../../utils/utils";
import CategoriesWrapper from "../../common/CategoriesWrapper";
import { Label } from "./Style";

const CategoryBlock = ({
  addCategory,
  deleteCategory,
  setSelectedCategory,
  allCategories,
  calculateTotalSum,
  category,
  label,
}) => {
  return (
    <Wrapper direction="column">
      <Label>{label}</Label>
      <CategoriesWrapper
        category={category}
        addCategory={addCategory}
        deleteCategory={deleteCategory}
        categories={allCategories}
        setSelectedCategory={setSelectedCategory}
        calculateTotalSum={calculateTotalSum}
      />
    </Wrapper>
  );
};

export default CategoryBlock;
