import axios from "axios";
import { moviesByName } from "../constants/endpoints";
import { updateSearchData } from "../redux/Movies/action";

export const getAllMovieByName = (param, loading) => {
  return (dispatch) => {
    const url = `${moviesByName}?query_term=${param}`;
    return axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          //response.data.data
          dispatch(updateSearchData(response.data.data.movies));
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        if (typeof loading === "function") {
          loading();
        }
      });
  };
};
