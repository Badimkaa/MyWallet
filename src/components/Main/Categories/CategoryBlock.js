import { Wrapper } from "../../../utils/utils";
import CategoriesWrapper from "../../common/CategoriesWrapper";

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
      <div>{label}</div>
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
