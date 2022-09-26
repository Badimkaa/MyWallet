import React from "react";
import { Button, Wrapper } from "./Style";
import change from "../../../../assets/images/change.png";
import deleteUrl from "../../../../assets/images/delete.png";
import ConfirmDelete from "../../../common/ConfirmDelete";
import { useState } from "react";
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
    <Wrapper justify="space-between">
      <div>{o.category}</div>
      <div>{o.sum}</div>
      <div>{o.date}</div>
      <div>{o.note}</div>
      <Button url={change} onClick={openAddOperationModal}></Button>
      <Button
        url={deleteUrl}
        onClick={() => {
          setConfirmDelete(true);
        }}
      ></Button>
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
          id={o.id}
          isAddOpen={isAddOpen}
          isCategorySumFuncNeed={true}
          calculateCategorySum={calculateCategorySum}
          calculateTotalSum={calculateTotalSum}
          setIsAddOpen={setIsAddOpen}
        />
      )}
    </Wrapper>
  );
};

export default Operation;
