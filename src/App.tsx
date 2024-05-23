import React from "react";
import "./App.css";
import { UserInfoModal } from "./components";

function App() {
  const [isModalOpen, setModelOpen] = React.useState(false);

  const openModal = () => setModelOpen(true);
  const closeModal = () => setModelOpen(false);

  return (
    <>
      <div className="container">
        <h1>Modal Demo Application</h1>
        <button onClick={openModal}>Open Modal</button>
      </div>
      <UserInfoModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}

export default App;
