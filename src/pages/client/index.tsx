import { mainRoutes } from "@src/pages/client/routes/mainRoute";
import { Container } from "@src/styled";
import ClientNav from "./nav/pages";

const Client = () => {
  return (
    <Container>
      <ClientNav />
      {mainRoutes()}
    </Container>
  );
};

export default Client;
