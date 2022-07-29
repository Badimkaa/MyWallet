import { useState } from 'react'
import { CategoriesWrapper } from '../../../../utils/utils'
import Category from '../Category'
import AddMenu from './AddMenu'
import { Buttons, FlexDiv } from './Style'

const Costs = ({ addCostsCategory, deleteCostsCategory, costs }) => {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isDelOpen, setIsDelOpen] = useState(false)
  let costsLists = costs.map(el => {
    return <Category
      key={el.id}
      name={el.name}
      id={el.id}
      isDelOpen={isDelOpen}
      setIsDelOpen={setIsDelOpen}
      deleteCostsCategory={deleteCostsCategory}
    />
  })
  const clickAddButton = () => {
    setIsAddOpen(true)
    setIsDelOpen(false)
  }
  const clickDelButton = () => {
    isDelOpen ? setIsDelOpen(false) : setIsDelOpen(true)
  }
  return (
    <CategoriesWrapper direction='column' >
      <div>Расходы</div>
      <Buttons>
        <button
          disabled={costsLists.length === 9} onClick={clickAddButton}
        >
          Добавить
        </button>
        <button onClick={clickDelButton}>{isDelOpen ? 'Отмена' : 'Удалить'}</button>
      </Buttons>
      <FlexDiv >
        {costsLists}
      </FlexDiv>
      {isAddOpen
        && <AddMenu
          addCostsCategory={addCostsCategory}
          setIsAddOpen={setIsAddOpen}
          isAddOpen={isAddOpen} />}
    </CategoriesWrapper>
  )
}

export default Costs
