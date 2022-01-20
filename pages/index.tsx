import ChannelBar from "../components/ChannelBar";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";

export default function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
      <TopNav />
    </div>
  );
}
