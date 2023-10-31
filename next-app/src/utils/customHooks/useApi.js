"use client";
import { useEffect, useState } from "react";
import axios from "axios";

// I need to pass the funcion here.
const useApi = (url, mapResults = (result) => result) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);

      setData(mapResults(response.data));
    } catch (error) {
      console.log(`Error: ${error.message}`);
      setData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
};

export { useApi };
