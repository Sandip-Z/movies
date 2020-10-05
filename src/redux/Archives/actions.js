export const ADD_TO_ARCHIVE = "ADD_TO_ARCHIVE";

export const addToArchive = (slugname, data) => {
  console.log("hello");
  return {
    type: ADD_TO_ARCHIVE,
    slugname,
    data,
  };
};
