import React from "react"
import { Input } from "../Input/Input";
import { LogonForm } from "./Styles";


export default function Form() {
    return (
        <LogonForm>
            <label>
                <span>Usuário</span>
                <Input Width={200}>
                </Input>
            </label>    
            <label>
                <span>Senha</span>
                <Input Width={200}></Input>
            </label>    
        </LogonForm>
    )
}