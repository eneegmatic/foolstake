//built-in
import { useEffect } from "react";
//expernal
import axios from "axios";
//internal
import { ApiRoutes } from "../constants/apiRoutes";

export default function Home() {
  useEffect(() => {
    (async () => {
      const response = await axios.post(ApiRoutes.ADD_POST, {
        title: "test",
        content: "test",
      });
      const data = await response.data;
      console.log(data);
    })();
  }, []);
  return null;
}
