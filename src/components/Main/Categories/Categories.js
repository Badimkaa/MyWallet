import { SectionTitle, SectionWrapper } from "../../../utils/utils";
import CategoryBlock from "./CategoryBlock";

const Categories = ({
  allCategories,
  addCategory,
  deleteCategory,
  setSelectedCategory,
  calculateTotalSum,
}) => {
  const categoriesBlocksList = [
    { label: "Расходы", category: "costs" },
    { label: "Доходы", category: "income" },
  ].map(({ label, category }) => {
    return (
      <CategoryBlock
        key={label}
        label={label}
        category={category}
        allCategories={allCategories}
        addCategory={addCategory}
        deleteCategory={deleteCategory}
        setSelectedCategory={setSelectedCategory}
        calculateTotalSum={calculateTotalSum}
      />
    );
  });
  return (
    <SectionWrapper direction="column" align="center">
      <SectionTitle>Категории</SectionTitle>
      {categoriesBlocksList}
    </SectionWrapper>
  );
};

export default Categories;
