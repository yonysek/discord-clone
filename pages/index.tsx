import ChannelBar from "../components/ChannelBar";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import Layout from "../components/Layout";

export default function App() {
  return (
    <Layout>
      <div className="flex">
        <SideBar />
        <ChannelBar />
        <TopNav />
      </div>
    </Layout>
  );
}
