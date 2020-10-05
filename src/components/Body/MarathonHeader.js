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
import { addToArchive } from "../../redux/Archives/actions";
import Icon from "../Atoms/Icon";

const generateSlugName = (name) => {
  return name.toLowerCase().replaceAll(" ", "_");
};

const MarathonHeader = () => {
  const dispatch = useDispatch();
  const currentMarathonName = useSelector(
    (state) => state.ApplicationReducer.currentMarathonName
  );

  const watchList = useSelector((state) => state.MovieToWatchReducer.toWatch);
  const watchingList = useSelector(
    (state) => state.MovieWatchingReducer.watching
  );
  const watchedList = useSelector((state) => state.MovieWatchedReducer.watched);

  const [editMarathonName, setEditMarathonName] = useState(false);
  const [newMarathonName, setNewMarathonName] = useState(currentMarathonName);

  const handleEditingMarathonName = (e) => {
    setNewMarathonName(e.target.value); //
  };

  const cloneCurrentMarathon = () => {
    const data = {
      watchList,
      watchingList,
      watchedList,
      name: currentMarathonName,
    };
    return data;
  };

  const handleArchive = () => {
    const data = cloneCurrentMarathon();
    const slug = generateSlugName(currentMarathonName);
    dispatch(addToArchive(slug, data));
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
          <span className="mr-2 marathon-title">{currentMarathonName}</span>
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
              component={
                <FaEdit
                  onClick={() => setEditMarathonName(true)}
                  title="Edit Name"
                />
              }
            />
          )}
        </span>
      </p>
      <div onClick={handleArchive}>
        <Icon
          component={<FaFileArchive className="icon" title="Archive this" />}
        />
      </div>
    </div>
  );
};

export default MarathonHeader;
