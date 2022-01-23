import ChannelBar from "../components/ChannelBar";
import Content from "../components/Content";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";

// Main page
export default function App() {
  return (
    <div className="flex w-screen h-screen">
      <SideBar />
      <ChannelBar />
      <div className="flex flex-col w-full h-full bg-white dark:bg-dcGray">
        <TopNav />
        <Content />
      </div>
    </div>
  );
}
