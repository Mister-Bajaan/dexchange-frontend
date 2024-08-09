import Container from "../../components/container/container";
import FormPageContent from "../layout/form-page.content";

export default function ContentAdd() {
  return (
    <Container>
      <FormPageContent
        titlePage="Configuration"
        SecondTitle="Ajouter un compte"
        btnContent="Sauvegarder"
      />
    </Container>
  );
}
