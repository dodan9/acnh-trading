import { mainRoutes } from "@src/features/client/routes/mainRoute";
import { Container } from "@src/common/styled";
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
