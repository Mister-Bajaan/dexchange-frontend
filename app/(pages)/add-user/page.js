import ContentAdd from "../../ui/modules/content-add/content.add";
import Sidebar from "../../ui/components/sidebar/sidebar.component";

export default function AddUser() {
  return (
    <div className="flex">
      <Sidebar />
      <ContentAdd />
    </div>
  );
}
