import { isKYCData } from "../Redux/Reducer/isKYCCheck";
import axios from "axios";

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
    console.log("kyc form res.", res.data);
    if (res) {
      const isCheck = res.data.content?.some((item) => {
        return (
          Address &&
          item.answers["30"] &&
          item.answers["30"]["answer"] &&
          item.answers["30"]["answer"].toLowerCase() ===
            Address.toLowerCase() &&
          item.answers["34"]["answer"] === "1"
        );
      });
      console.log("isCheck", isCheck);
      dispatch(isKYCData(isCheck));
    }
  } catch (error) {
    console.log("getting error in KYC form details.", error);
  }
};
