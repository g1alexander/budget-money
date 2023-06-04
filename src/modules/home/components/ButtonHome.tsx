"use client";

import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

async function postData() {
  // const feed = await fetch(`${process.env.API_URL ?? ""}/api`, {
  //   method: "POST",
  //   body: JSON.stringify({ name: "John Doe" }),
  // }).then((res) => res.text());
  // console.log(feed);
  // return {
  //   feed,
  // };
}

export default function ButtonHome() {
  const hola = async () => {
    console.log("hola");

    await postData();
  };
  return (
    <Button onClick={hola} variant="contained" endIcon={<SendIcon />}>
      Send
    </Button>
  );
}
