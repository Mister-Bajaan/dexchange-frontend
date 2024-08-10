import Sidebar from "@components/LayoutsComponents/NavigationComponents/SidebarComponents/sidebar.component";
import ContentAdd from "@modules/ContentAddUser/content.add";

export default function AddUser() {

  
  return (
    <div className="flex">
      <Sidebar />
      <ContentAdd />
    </div>
  );
}
