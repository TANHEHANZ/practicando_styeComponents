import React, { useRef, useState } from "react";
import { Padre } from "../style/style";
import Carta from "./carta";
import happy from "../assets/happytoolgue.mp3"; // Importa tu archivo de audio

const Sobre = () => {
  const [abrir, setAbrir] = useState(false);
  const audioRef = useRef(null);
  const abriendo = () => {
    setAbrir(!abrir);
    console.log("pulsado", abrir);
    if (!abrir) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <Padre>
      <div className={`envelope ${abrir ? "open" : ""}`} onClick={abriendo}>
        <section></section>
        <article>
          <p> De: Curalacacha </p>
          <p> Para: La persona que mas amo </p>
        </article>
      </div>
      <Carta abrir={abrir} />
      <audio ref={audioRef} src={happy} />
    </Padre>
  );
};

export default Sobre;
