import { useState } from "react";
import { Announcement } from "../components/modals/Announcement";
import { Header } from "../components/header/Header";
import { Header2 } from "../components/header/Header2";
import { Header3 } from "../components/header/Header3";
import { Slides } from "../components/Slides";
import { Part1 } from "../components/Part1";

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
      <div className="lg:mx-auto lg:container px-10 py-3 lg:p-0">
        <Part1 />
      </div>
    </div>
  );
};
