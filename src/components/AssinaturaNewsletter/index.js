import { Newsletter, Container, Formulario } from "./styles";
import { useState } from "react";

export default function AssinaturaNewsletter() {
  const [email, setEmail] = useState("");

  function validate(email) {
    if (!email.includes("@")) {
      return false;
    }
    return true;
  }

  return (
    <Newsletter>
      <Container>
        <div>
          <h1>
            Sua casa com as
            <br />
            <strong>
              melhores <br /> plantas
            </strong>
          </h1>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
        </div>

        <Formulario
          action="/"
          onSubmit={(evt) => {
            evt.preventDefault();
            if (validate(email)) {
              alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}.`);
            }
          }}
        >
          <div>
            <input
              type="email"
              value={email}
              onChange={(evt) => {
                setEmail(evt.target.value);
              }}
              placeholder="Insira seu E-mail"
            />
            <button type="submit">Assinar Newsletter</button>
          </div>
        </Formulario>
      </Container>
    </Newsletter>
  );
}
