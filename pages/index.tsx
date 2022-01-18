import ChannelBar from "../components/ChannelBar";
import SideBar from "../components/SideBar";
import { Room } from "./../types/rooms";

export default function App({ rooms }: { rooms: { data: Room[] } }) {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar rooms={rooms} />
    </div>
  );
}

export async function getStaticProps() {
  const url =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "development"
      ? "http://localhost:3000"
      : `${process.env.VERCEL_URL}/api/rooms`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      rooms: data,
    },
  };
}
