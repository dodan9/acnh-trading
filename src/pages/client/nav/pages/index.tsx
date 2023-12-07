import { useState } from "react";
import SettingModal from "../components/SettingModal";
import { useNavigate } from "react-router";
import { Nav } from "../style";

const ClientNav = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <Nav>
      <div onClick={() => navigate("/")}>home</div>
      <div onClick={() => setIsModalOpen(true)}>setting</div>

      {isModalOpen && <SettingModal onClose={() => setIsModalOpen(false)} />}
    </Nav>
  );
};

export default ClientNav;
