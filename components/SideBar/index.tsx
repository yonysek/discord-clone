import { BsGlobe, BsFillLightningFill, BsSearch } from "react-icons/bs";
import { FaPoo, FaDiscord } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 flex flex-col w-16 h-screen bg-dcLightGray dark:bg-dcSuperDarkGray ">
      <SideBarIcon icon={<FaDiscord size="24" />} />
      <Divider />
      <SideBarIcon icon={<FaPoo size="24" />} />
      <SideBarIcon icon={<BsGlobe size="24" />} />
      <SideBarIcon icon={<BsFillLightningFill size="24" />} />
      <Divider />
      <SideBarIcon icon={<BsSearch size="20" />} />
    </div>
  );
}

type IconProps = {
  icon: any;
  tooltip?: string;
};

const SideBarIcon = ({ icon, tooltip = "tooltip" }: IconProps) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;
