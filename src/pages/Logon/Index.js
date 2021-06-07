import React from "react";
import { Logon } from "./Styles";
import Form from "../../components/Form/index";

export default function LogonPage() {
  return (
    <Logon>
      <div className="logo">SEU LOGO AQUI</div>
      <Form />
      <div className="links">
        <a href="http://jeanlima.dev.br/">Esqueceu a senha?</a>
        <a href="http://jeanlima.dev.br/">Esqueceu o usuário?</a>
      </div>
    </Logon>
  );
}
