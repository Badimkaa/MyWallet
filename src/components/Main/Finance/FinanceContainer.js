import Finance from "./Finance";
import { connect } from "react-redux";
import {
  addOperation,
  deleteOperation,
  editOperation,
  calculateCategorySum,
  calculateTotalSum,
} from "../../../store/reducer";
import { selectedCategory } from "../../../store/selectors";

let mapStateToProps = (state) => {
  return {
    selectedCategory: selectedCategory(state),
    allCategories: state.allCategories,
  };
};

export default connect(mapStateToProps, {
  addOperation,
  deleteOperation,
  editOperation,
  calculateCategorySum,
  calculateTotalSum,
})(Finance);
