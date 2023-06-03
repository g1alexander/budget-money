"use client";

async function postData() {
  const feed = await fetch(`/api`, {
    method: "POST",
    body: JSON.stringify({ name: "John Doe" }),
  }).then((res) => res.text());

  console.log(feed);
  return {
    feed,
  };
}

export default function Hola() {
  const hola = async () => {
    console.log("hola");

    await postData();
  };
  return <button onClick={hola}>hjoasdkas</button>;
}
