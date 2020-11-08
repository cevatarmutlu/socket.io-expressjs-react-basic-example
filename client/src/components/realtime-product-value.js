import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4002";

export default function RealTimeProduct(props) {
  const [response, setResponse] = useState("");
  const [prod_id] = useState(props.price_id);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, {
        query: {
            id: prod_id,
        }
    });
    socket.on("RealTimeProduct", data => {
      setResponse(data);
    });

  }, [prod_id]);

  let render;
  if (response.data === undefined) {
      render = '';
  }else {
      render = (    
        <div style={{borderStyle: "solid"}}>
          <p>
            Date: <time dateTime={response.date}>{response.date}</time>  <br/>
            Name: {response.data.name} <br/>
            Price: {response.data.price} <br/>
            Category: {response.data.category} <br/>
          </p>
        </div>
    );
  }

  return (
    render
  );
}