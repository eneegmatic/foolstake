//built-in
import { useEffect } from "react";
//expernal
import axios from "axios";
//internal
import { ApiRoutes } from "../constants/apiRoutes";

export default function Home() {
  useEffect(() => {
    (async () => {
      // const response = await axios.post(ApiRoutes.ADD_POST, {
      //   title: "test",
      //   content: "test",
      // });

      const response = await axios.get(ApiRoutes.GET_POSTS);
      const data = await response.data;
      console.log(data);
    })();
  }, []);
  return null;
}
