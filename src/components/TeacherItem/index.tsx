import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import lang from "../../assets/lang/pt-br/index.json";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/41436010?s=460&u=7a6f90e61f39f764dcac2fecf3ae754197d3198a&v=4"
          alt="Allan Oliveira"
        />
        <div>
          <strong>Allan Oliveira</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de programação avançada.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
        molestiae autem maiores debitis consequatur officia pariatur, laborum
        porro delectus, et earum cum ullam ad dolor temporibus incidunt totam
        voluptatem.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt={lang.whatsappIconAlt} />
          {lang.contactWith}
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
