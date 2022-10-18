import { useState } from "react";
import { Img, Cell, Pre } from "./Style";
import change from "../../../../assets/images/change.png";
import deleteUrl from "../../../../assets/images/delete.png";
import ConfirmDelete from "../../../common/ConfirmDelete";
import AddOperation from "../../../common/AddOperation";

const Operation = ({
  o,
  deleteOperation,
  editOperation,
  calculateCategorySum,
  calculateTotalSum,
}) => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  let openAddOperationModal = () => {
    setIsAddOpen(true);
  };
  const [confirmDelete, setConfirmDelete] = useState(false);
  return (
    <>
      <Cell justify="center" align="center">
        {o.sum}р
      </Cell>
      <Cell justify="center" align="center">
        {o.date}
      </Cell>
      <Pre>{o.note}</Pre>
      <Cell primary justify="center" onClick={openAddOperationModal}>
        <Img url={change} />
      </Cell>
      <Cell
        primary
        justify="center"
        onClick={() => {
          setConfirmDelete(true);
        }}
      >
        <Img url={deleteUrl} />
      </Cell>
      {confirmDelete && (
        <ConfirmDelete
          whatDelete={"операцию"}
          name={o.name}
          setConfirmDelete={setConfirmDelete}
          deleteFunc={deleteOperation}
          isCategorySumFuncNeed={true}
          calculateCategorySum={calculateCategorySum}
          calculateTotalSum={calculateTotalSum}
          id={o.id}
        />
      )}
      {isAddOpen && (
        <AddOperation
          buttonName={"Изменить"}
          updateState={editOperation}
          prevNote={o.note}
          prevSum={o.sum}
          id={o.id}
          isAddOpen={isAddOpen}
          isCategorySumFuncNeed={true}
          calculateCategorySum={calculateCategorySum}
          calculateTotalSum={calculateTotalSum}
          setIsAddOpen={setIsAddOpen}
        />
      )}
    </>
  );
};

export default Operation;
