import { Menu, MenuWrapper } from "./Costs/Style"
import ReactDOM from 'react-dom'
const ConfirmDelete = ({ name, id, closeModal, confirmDelete, deleteCostsCategory, setConfirmDelete }) => {

    return ReactDOM.createPortal(
        <MenuWrapper justify='center' align='center'>
            <Menu direction='column'>
                Вы действительно хотите удалить категорию "{name}"?
                <div>
                    <button onClick={() => { deleteCostsCategory(id) }}>да</button>
                    <button onClick={() => { closeModal() }}>нет</button>
                </div>
            </Menu>
        </MenuWrapper>
        , document.body)
}

export default ConfirmDelete