import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      axios.get(url).then((resp) => {
        setData(resp.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  return { data };
}

export default useFetch;
