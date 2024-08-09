import ContentUpdate from "../../ui/modules/content-update/content.update";
import Sidebar from "../../ui/components/sidebar/sidebar.component";

export default function UpdateUser() {
  return (
    <div className="flex">
      <Sidebar/>
      <ContentUpdate/>
    </div>
  );
}
