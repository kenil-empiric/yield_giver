import React from "react";
import { isKYCData } from "../Redux/Reducer/isKYCCheck";
import axios from "axios";
import { Toast } from "./toast";

export const fetchFormData = async (dispatch, Address) => {
  //secrete keys
  const {
    REACT_APP_JOTFORM_BASE_URL,
    REACT_APP_JOTFORM_ID,
    REACT_APP_JOTFORM_API_KEY,
  } = process.env;

  try {
    const res = await axios.get(
      `${REACT_APP_JOTFORM_BASE_URL}/${REACT_APP_JOTFORM_ID}/submissions?apiKey=${REACT_APP_JOTFORM_API_KEY}`
    );
    if (res) {
      const isCheck = res.data.content?.some((item) => {
        return (
          Address &&
          item.answers["34"] &&
          item.answers["34"]["answer"] &&
          item.answers["34"]["answer"].toLowerCase() ===
            Address.toLowerCase() &&
          item.answers["35"]["answer"] === "1"
        );
      });
      dispatch(isKYCData(isCheck));
    }
  } catch (error) {
    Toast.error("Something wents wrong in KYC form.");
    console.log("getting error in KYC form details.", error);
  }
};
