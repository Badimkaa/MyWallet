import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Input, Menu, MenuWrapper } from './Style'

const AddMenu = ({ setIsAddOpen, addCategory, category }) => {

    let [name, setName] = useState('')
    let addNewCategory = () => {
        addCategory(name, category)
        setIsAddOpen(false)
        setName('')
    }
    let exitAddMenu = () => {
        setIsAddOpen(false)
        setName('')
    }
    return ReactDOM.createPortal(
        <MenuWrapper justify='center' align='center'>
            <Menu direction='column'>
                <Input autoFocus={true}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Введите название категории:' />
                <button disabled={!name && true} onClick={addNewCategory}>Добавить</button>
                <button onClick={exitAddMenu}>Отмена</button>
            </Menu>
        </MenuWrapper>
        , document.body)
}

export default AddMenu