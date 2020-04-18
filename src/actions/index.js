import { MY_DATA } from "./types";
import Axios from "axios";

export const dataApi = () => async (dispatch) => {
  const response = await Axios.get(
    "https://gitconnected.com/v1/portfolio/mishrarahul7"
  );
  dispatch({
    type: MY_DATA,
    payload: response.data,
  });
};
