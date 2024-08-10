import FormPageContent from "@components/FormComponents/form/FormComponent";
import Topbar from "@components/LayoutsComponents/NavigationComponents/topbar/topbar.component";

export default function ContentAdd() {
  return (
    <div className="w-full bg-gray-100 space-y-4">
      <Topbar />
      <FormPageContent
        titlePage="Configuration"
        secondTitle="Ajouter un compte"
        btnContent="Sauvegarder"
      />
    </div>
  );
}
