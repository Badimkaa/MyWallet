/* eslint-disable no-case-declarations */
const ADD_CATEGORY = "ADD_CATEGORY";
const ADD_OPERATION = "ADD_OPERATION";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
const DELETE_OPERATION = "DELETE_OPERATION";
const EDIT_OPERATION = "EDIT_OPERATION";
const CALCULATE_CATGORY_SUM = "CALCULATE_CATGORY_SUM";
const CALCULATE_TOTAL_SUM = "CALCULATE_TOTAL_SUM";

const COSTS = "costs";
const INCOME = "income";
let initialState = {
  allCategories: [
    {
      name: "Транспорт",
      id: 0,
      type: COSTS,
      sum: 0,
      isActive: false,
      operations: [],
    },
    {
      name: "Продукты",
      id: 1,
      type: COSTS,
      sum: 0,
      isActive: false,
      operations: [],
    },
    {
      name: "Развлечения",
      id: 2,
      type: COSTS,
      sum: 0,
      isActive: false,
      operations: [],
    },
    {
      name: "Зарплата",
      id: 3,
      type: INCOME,
      sum: 0,
      isActive: false,
      operations: [],
    },
    {
      name: "Пенсия",
      id: 4,
      type: INCOME,
      sum: 0,
      isActive: false,
      operations: [],
    },
  ],
  totalSum: 0,
  currentOperationsId: 0,
  currentCategorysId: 5,
};

const mainReducer = (state = initialState, action) => {
  let selectedCategory = state.allCategories.find((c) => c.isActive === true);
  switch (action.type) {
    case ADD_CATEGORY:
      let newCategory = {
        name: action.name,
        id: state.currentCategorysId,
        type: action.categoryType,
        sum: 0,
        isActive: false,
        operations: [],
      };
      return {
        ...state,
        allCategories: [...state.allCategories, newCategory],
        currentCategorysId: state.currentCategorysId + 1,
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        allCategories: state.allCategories.filter((c) => c.id !== action.id),
      };

    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        allCategories: state.allCategories.map((c) => {
          if (c.id === action.id) {
            return { ...c, isActive: true };
          } else return { ...c, isActive: false };
        }),
      };

    case ADD_OPERATION:
      let newOperation = {
        category: selectedCategory.name,
        id: state.currentOperationsId,
        sum: +action.sum,
        note: action.note,
        date: new Date().toLocaleString().substring(0, 10),
      };
      return {
        ...state,
        allCategories: state.allCategories.map((category) => {
          if (category.isActive) {
            return {
              ...category,
              operations: [...category.operations, newOperation],
            };
          }
          return category;
        }),
        currentOperationsId: state.currentOperationsId + 1,
      };

    case CALCULATE_CATGORY_SUM:
      return {
        ...state,
        allCategories: state.allCategories.map((category) => {
          if (category.isActive) {
            return {
              ...category,
              sum: category.operations.reduce((acc, rec) => {
                if (selectedCategory.type === COSTS) {
                  return acc - Number(rec.sum);
                } else {
                  return acc + Number(rec.sum);
                }
              }, 0),
            };
          }
          return category;
        }),
      };
    case CALCULATE_TOTAL_SUM:
      return {
        ...state,
        totalSum: state.allCategories.reduce((acc, rec) => {
          return acc + Number(rec.sum);
        }, 0),
      };
    case EDIT_OPERATION:
      return {
        ...state,
        allCategories: state.allCategories.map((category) => {
          if (category.isActive) {
            return {
              ...category,
              sum: category.sum - action.sum,
              operations: category.operations.map((operation) => {
                if (operation.id === action.id) {
                  return {
                    ...operation,
                    sum: action.sum,
                    note: action.note,
                  };
                }
                return operation;
              }),
            };
          }
          return category;
        }),
      };

    case DELETE_OPERATION:
      return {
        ...state,
        allCategories: state.allCategories.map((category) => {
          if (category.isActive) {
            return {
              ...category,
              operations: category.operations.filter((o) => o.id !== action.id),
            };
          }
          return category;
        }),
      };

    default:
      return state;
  }
};
export default mainReducer;

export const addCategory = (name, categoryType) => {
  return { type: ADD_CATEGORY, name, categoryType };
};
export const calculateCategorySum = () => {
  return { type: CALCULATE_CATGORY_SUM };
};
export const calculateTotalSum = () => {
  return { type: CALCULATE_TOTAL_SUM };
};
export const deleteCategory = (id) => {
  return { type: DELETE_CATEGORY, id };
};
export const setSelectedCategory = (id) => {
  return { type: SET_SELECTED_CATEGORY, id };
};
export const addOperation = (sum, note) => {
  return { type: ADD_OPERATION, sum, note };
};
export const deleteOperation = (id) => {
  return { type: DELETE_OPERATION, id };
};
export const editOperation = (sum, note, id) => {
  return { type: EDIT_OPERATION, sum, note, id };
};
