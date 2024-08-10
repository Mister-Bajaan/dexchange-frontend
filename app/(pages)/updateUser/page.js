import Sidebar from "@components/LayoutsComponents/NavigationComponents/SidebarComponents/sidebar.component";
import ContentUpdate from "@modules/ContentUpdateUser/content.update";

export default function UpdateUser() {
  return (
    <div className="flex">
      <Sidebar />
      <ContentUpdate />
    </div>
  );
}
