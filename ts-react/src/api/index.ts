import ky from "ky";
import { FirebaseList, IData, IDataItem } from "../types/data";

const requestApi = ky.create({ prefixUrl: "https://pizza-v2-ab04b-default-rtdb.firebaseio.com" });

export const postData = (data: IData) => {
  return requestApi.post("data.json", { json: data }).json<IDataItem>();
};

export const fetchData = () => {
  return requestApi.get("data.json").json<FirebaseList<IData>>();
};
