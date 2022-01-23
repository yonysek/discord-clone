import {
  BsGlobe,
  BsFillLightningFill,
  BsSearch,
  BsTerminalFill,
} from "react-icons/bs";
import { FaPoo, FaDiscord } from "react-icons/fa";

// Sidebar with icons and tooltips
export default function SideBar() {
  return (
    <div className="sidebar">
      <SideBarIcon
        icon={<FaDiscord size="24" />}
        tooltip="UNDER CONSTRUCTION!"
      />
      <Divider />
      <SideBarIcon icon={<FaPoo size="24" />} tooltip="Server about..." />
      <SideBarIcon icon={<BsGlobe size="24" />} tooltip="Geography lovers!" />
      <SideBarIcon
        icon={<BsFillLightningFill size="24" />}
        tooltip="WE LOVE STORMS!"
      />
      <SideBarIcon
        icon={<BsTerminalFill size="24" />}
        tooltip="Coding masters"
      />
      <Divider />
      <SideBarIcon icon={<BsSearch size="20" />} tooltip="Search" />
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
