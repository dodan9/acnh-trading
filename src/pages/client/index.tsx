import { mainRoutes } from "@src/pages/client/routes/mainRoute";
import { Container } from "@src/styled";

const Client = () => {
  return <Container>{mainRoutes()}</Container>;
};

export default Client;
