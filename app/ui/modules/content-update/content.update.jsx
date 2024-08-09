import ButtonCTA from "../../components/button/btn-CTA/button";
import InputForm from "../../components/input/input";
import Topbar from "../../components/topbar/topbar.component";
import FormPageContent from "../layout/form-page.content";

export default function ContentUpdate() {
  return (
    <div className="w-full bg-gray-100 space-y-4">
      <FormPageContent
        titlePage="Voir l'utilisateur"
        userName="ADAMA DIOM"
        btnContent="Modifier"
      />
    </div>
  );
}
