export default () => {
  return localStorage.getItem("loggedin") ? true : false;
};
