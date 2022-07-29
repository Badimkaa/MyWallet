let initialState = {
    costs: [
        { name: 'Транспорт', id: 0, sum: 0 },
        { name: 'Продукты', id: 1, sum: 0 },
        { name: 'Развлечения', id: 2, sum: 0 },
    ],
    totalSum: 0,
    currentCostsId: 3
}
const ADD_COSTS = 'ADD_COSTS'
const DELETE_COSTS = 'DELETE_COSTS'
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COSTS:
            let newCosts = {
                name: action.name,
                sum: 0,
                id: state.currentCostsId
            }
            return { ...state, costs: [...state.costs, newCosts], currentCostsId: state.currentCostsId + 1 }
        case DELETE_COSTS:
            return { ...state, costs: state.costs.filter(i => i.id !== action.id) }
        default:
            return state;
    }
}
export default mainReducer

export const addCostsCategory = (name) => {
    return { type: ADD_COSTS, name }
}
export const deleteCostsCategory = (id) => {
    return { type: DELETE_COSTS, id }
}