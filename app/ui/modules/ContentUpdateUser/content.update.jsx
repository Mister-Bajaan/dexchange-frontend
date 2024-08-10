import Topbar from "@components/LayoutsComponents/NavigationComponents/topbar/topbar.component";
import FormPageContent from "../../components/FormComponents/form/FormComponent";

export default function ContentUpdate() {
  return (
    <div className="w-full bg-gray-100 space-y-4">
      <Topbar />
      <FormPageContent
        titlePage="Voir l'utilisateur"
        secondTitle="ADAMA DIOM"
        btnContent="Modifier"
      />
    </div>
  );
}
