import React from "react";

function Registered() {
  return (
    <div className="relative">
      <h1>Hello world</h1>
      <div className="absolute bg-opacity-50 rounded-lg shadow-xl">
        <p>je suis une explication</p>
      </div>
      <div className="px-4 py-2 bg-white rounded-lg shadow-xl absolute top-120px">
        <p>Cliquez sur ce bouton pour enregistrer vos modifications</p>
      </div>
    </div>
  );
}

export default Registered;
