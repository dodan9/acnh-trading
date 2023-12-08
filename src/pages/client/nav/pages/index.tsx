import { useNavigate } from "react-router";
import { Nav } from "../style";

const ClientNav = () => {
  const navigate = useNavigate();

  return (
    <Nav>
      <div onClick={() => navigate("/")}>home</div>
      {import.meta.env.DEV && (
        <div onClick={() => navigate("/console")}>console</div>
      )}
      <div onClick={() => navigate("/my-island")}>setting</div>
    </Nav>
  );
};

export default ClientNav;
