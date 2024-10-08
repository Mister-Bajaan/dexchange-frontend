import Sidebar from "@components/LayoutsComponents/NavigationComponents/SidebarComponents/sidebar.component";
import ContentConfiguration from "@modules/ContentConfiguration/configuration.content";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <ContentConfiguration />
    </div>
  );
}
