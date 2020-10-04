import React, { useState } from "react";
// import { FiEdit2 } from "react-icons/fi";
import { FaFileArchive, FaEdit, FaCheck, FaCross } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { editCurrentMarathonName } from "../../redux/Application/action";

const MarathonHeader = () => {
  const currentMarathonName = useSelector(
    (state) => state.ApplicationReducer.currentMarathonName
  );
  const dispatch = useDispatch();
  const [editMarathonName, setEditMarathonName] = useState(false);
  const [newMarathonName, setNewMarathonName] = useState(currentMarathonName);

  const handleEditingMarathonName = (e) => {
    setNewMarathonName(e.target.value); //
  };

  const handleEditSuccessful = (e) => {
    dispatch(editCurrentMarathonName(newMarathonName));
    setEditMarathonName(false);
  };

  const handleEditCancel = (e) => {
    setNewMarathonName(currentMarathonName); //
    setEditMarathonName(false);
  };

  return (
    <div className="d-flex justify-content-between marathon-header">
      <p>
        {!editMarathonName ? (
          <span>{currentMarathonName}</span>
        ) : (
          <>
            <input
              type="text"
              value={newMarathonName}
              onChange={handleEditingMarathonName}
            />
            <span>
              <FaCheck onClick={handleEditSuccessful} />{" "}
              <FaCross onClick={handleEditCancel} />
            </span>
          </>
        )}
        <span>
          {!editMarathonName && (
            <FaEdit
              className="ml-3"
              onClick={() => setEditMarathonName(true)}
            />
          )}
        </span>
      </p>
      <div>
        <FaFileArchive className="icon" title="Archive this" />
      </div>
    </div>
  );
};

export default MarathonHeader;
