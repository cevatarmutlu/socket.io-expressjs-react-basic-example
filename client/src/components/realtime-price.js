import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4002";

export default function ClientComponent(props) {
  const [response, setResponse] = useState("");
  const [prod_id] = useState(props.price_id);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, {
        query: {
            id: prod_id,
        }
    });
    socket.on("RealTimePrice", data => {
      setResponse(data);
    });

  }, [prod_id]);

  return (
    <div>
      <p>
        Date: <time dateTime={response.date}>{response.date}</time> Price {response.price}
      </p>
    </div>
  );
}