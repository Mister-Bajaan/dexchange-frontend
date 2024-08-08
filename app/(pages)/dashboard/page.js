import Sidebar from "../../ui/components/sidebar/sidebar.component";
import ContentConfiguration from "../../ui/modules/content-configuration/content";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <ContentConfiguration />
    </div>
  );
}
