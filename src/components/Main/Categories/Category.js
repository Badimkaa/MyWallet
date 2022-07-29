import { useState } from 'react'
import exit from '../../../exit.png'
import ConfirmDelete from './ConfirmDelete'
import { DelItem, Image, Item, ItemName } from './Style'

const Category = ({ name, id, isDelOpen, deleteCostsCategory }) => {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const delItem = () => {
    isDelOpen && setConfirmDelete(true)
  }
  const closeModal = () => {
    console.log(confirmDelete)
    setConfirmDelete(false)
  }
  console.log(confirmDelete)
  return (
    <Item justify='space-evenly' align='center'  onClick={delItem}>
      <ItemName>
        {name}
      </ItemName>
      {/* <div>|</div> */}
      <div>2000</div>
      {
        isDelOpen && <DelItem justify='center' align='center' >
          <Image src={exit} />
        </DelItem>
      }
      {confirmDelete && <ConfirmDelete name={name} deleteCostsCategory={deleteCostsCategory} closeModal={closeModal} setConfirmDelete={setConfirmDelete} id={id} />}
    </Item >
  )
}

export default Category