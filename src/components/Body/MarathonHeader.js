import React, { useState } from "react";
// import { FiEdit2 } from "react-icons/fi";
import {
  FaFileArchive,
  FaEdit,
  FaCheckCircle,
  FaRegTimesCircle,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { editCurrentMarathonName } from "../../redux/Application/action";
import Icon from "../Atoms/Icon";

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
      <p className="d-flex align-items-center">
        {!editMarathonName ? (
          <span className="mr-2">{currentMarathonName}</span>
        ) : (
          <>
            <input
              type="text"
              value={newMarathonName}
              onChange={handleEditingMarathonName}
              className="mr-3 edit-marathon-name"
            />
            <span className="d-flex">
              <Icon
                component={<FaCheckCircle onClick={handleEditSuccessful} />}
              />{" "}
              <Icon
                component={<FaRegTimesCircle onClick={handleEditCancel} />}
              />
            </span>
          </>
        )}
        <span>
          {!editMarathonName && (
            <Icon
              component={<FaEdit onClick={() => setEditMarathonName(true)} />}
            />
          )}
        </span>
      </p>
      <div>
        <Icon
          component={<FaFileArchive className="icon" title="Archive this" />}
        />
      </div>
    </div>
  );
};

export default MarathonHeader;
