import ChannelBar from "../components/ChannelBar";
import SideBar from "../components/SideBar";
import { Room } from "./../types/rooms";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
    </div>
  );
}

// Experiment (later discovered I can't fetch from the api folder)
// export async function getStaticProps() {
//   const data = await fetchRooms();

//   return {
//     props: {
//       rooms: data,
//     },
//   };
// }
