import { useCallback } from "react";

function useFetch() {
  const request = useCallback(
    async (url, method = "GET", jwt_Token = null, body = null) => {
      try {
        const response = await fetch("http://localhost:5000/" + url, {
          body,
          method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt_Token}`,
          },
        });
        // if (!response.ok) {
        //   throw new Error(`Could not fetch ${url} status ${response.status}`);
        // }
        const data = await response.json();
        return data;
      } catch (e) {
        console.log(e);
      }
    },
    []
  );

  return request;
}

export default useFetch;
