import Header from "./Header"
import { connect } from 'react-redux'
let mapStateToProps = (state) => {
    return {
        totalSum: state.totalSum
    }
}

export default connect(mapStateToProps, null)(Header)