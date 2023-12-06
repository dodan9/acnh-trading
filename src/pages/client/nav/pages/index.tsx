import { useState } from "react";
import SettingModal from "../components/SettingModal";

const ClientNav = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <div onClick={() => setIsModalOpen(true)}>setting</div>

      {isModalOpen && <SettingModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default ClientNav;
