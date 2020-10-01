import axios from "axios";
import { loginUrl, register } from "../constants/endpoints";

export const loginUser = (user) => {
  return (dispatch) => {
    const url = loginUrl;
    return axios({
      method: "post",
      url,
      data: {
        ...user,
      },
    })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };
};
