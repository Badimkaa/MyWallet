import { connect } from "react-redux";
import {
  addCategory,
  calculateTotalSum,
  deleteCategory,
  setSelectedCategory,
} from "../../../store/reducer";
import Categories from "./Categories";
let mapStateToProps = (state) => {
  return {
    allCategories: state.allCategories,
  };
};

export default connect(mapStateToProps, {
  addCategory,
  deleteCategory,
  setSelectedCategory,
  calculateTotalSum,
})(Categories);
