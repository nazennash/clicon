import { useState } from "react";
import { Announcement } from "../components/modals/Announcement";
import { Header } from "../components/Header";
import { Header2 } from "../components/Header2";
import { Header3 } from "../components/Header3";
import { Slides } from "../components/Slides";

export const Home = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <Announcement closeModal={closeModal} />}
      <Header />
      <Header2 />
      <div className="mx-auto px-10 py-3">
        <Header3 />
        <Slides />
      </div>
    </div>
  );
};
