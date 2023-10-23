import React from "react";
import img from "../assets/img1.jpeg";
import img1 from "../assets/img2.jpeg";
import img2 from "../assets/img3.png";
import img3 from "../assets/img2.png";
const Carta = ({ abrir }) => {
  return (
    <article className={`cartaStyle ${abrir ? "ver" : ""}`}>
      <h1>Amor mio</h1>
      <div>
        <p>
          Hoy celebramos un mes más juntos, un mes de risas, tristezas,
          aprendizaje y crecimiento. Quiero que sepas lo especial que eres para
          mí, no solo como mi pareja, sino como alguien que me inspira cada día.
        </p>
      </div>
      <div>
        <p>
          Aunque últimamente hayan momentos de distancia, quiero que entiendas
          que mi amor por ti no ha disminuido en lo más mínimo. Al contrario,
          crece con cada día que pasa. Extraño tu sonrisa, tus abrazos, y todo
          lo que eres.
        </p>
      </div>

      <div>
        <p>
          En este día especial, quiero recordarte cuánto te amo y cuánto
          significas para mí. Eres mi compañera, mi apoyo y mi alegría. Espero
          que podamos superar cualquier obstáculo que se interponga en nuestro
          camino, porque juntos somos capaces de enfrentar cualquier desafío.
        </p>
        {/* <img src={img2} alt="" /> */}
      </div>

      <div>
        <p>
          Feliz aniversario, mi amor. Gracias por este tiempo maravilloso y
          emocionante, y espero que tengamos muchos más juntos.
        </p>
      </div>
      <div>
        <p>Con amor te digo cada una de estas palabras</p>
        <img src={img3} alt="" />
      </div>
    </article>
  );
};

export default Carta;
