import { connect } from 'react-redux'
import { addCostsCategory, deleteCostsCategory } from "../../../../store/reducer"
import Costs from './Costs'
let mapStateToProps = (state) => {
    return {
        costs:state.costs,
    }
}

export default connect(mapStateToProps,{addCostsCategory, deleteCostsCategory})(Costs)