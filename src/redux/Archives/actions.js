const ADD_TO_ARCHIVE = "ADD_TO_ARCHIVE";

const addToArchive = ({ slugname, data }) => {
  return {
    type: ADD_TO_ARCHIVE,
    slugname,
    data,
  };
};
