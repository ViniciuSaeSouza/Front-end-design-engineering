"use client";
import { ClienteType } from "@/types/type";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Cadastro() {
    const navigate = useRouter();

    const [cliente, setCliente] = useState<ClienteType>({
        nome: "",
        email: "",
        senha: "",
        cep: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const cabecalho = {
            method: "POST",
            headers: { "Content-type" : "application/json" },
            body: JSON.stringify(cliente),
        };
        try {
            const response = await fetch(
                "http://localhost:8080/cadastro/",
                cabecalho
            );

            if (response.ok) {
                alert(`${cliente.nome} cadastrado com sucesso!`);
                setCliente({ nome: "", email: "", senha: "", cep: "" });
                navigate.push("/");
            } else {
                alert("Erro ao cadastrar!");
            }
        } catch (erro) {
            console.log("Erro ao cadastrar o produto: ", erro);
        }
    };

    const styleInput =
        "relative border-2 border-black/30 rounded-md p-3 text-xl w-[100%] mt-2 mb-4";
    const styleLabel = "font-roboto text-2xl";
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="font-inter text-5xl mt-14 mb-8 text-center">
                Cadastre-se
            </h1>

            <form className="border-2 px-4 py-4">
                <div>
                    <label className={styleLabel} htmlFor="idNome">
                        Nome
                    </label>{" "}
                    <br />
                    <input
                        className={styleInput}
                        type="text"
                        name="nome"
                        id="idNome"
                        value={cliente.nome}
                        onChange={handleChange}
                        placeholder="João Fulano da Silva"
                        required
                    />
                </div>
                <div>
                    <label className={styleLabel} htmlFor="idEmail">
                        E-mail
                    </label>{" "}
                    <br />
                    <input
                        className={styleInput}
                        type="text"
                        name="email"
                        id="idEmail"
                        value={cliente.email}
                        onChange={handleChange}
                        placeholder="fulano@exemplo.com.br"
                        required
                    />
                </div>
                <div>
                    <label className={styleLabel} htmlFor="idSenha">
                        Senha
                    </label>{" "}
                    <br />
                    <input
                        className={styleInput}
                        type="password"
                        name="senha"
                        id="idSenha"
                        value={cliente.senha}
                        onChange={handleChange}
                        placeholder="Mínimo 1 dígito"
                        required
                    />
                </div>
                <div>
                    <label className={styleLabel} htmlFor="idCep">
                        Cep
                    </label>{" "}
                    <br />
                    <input
                        className={styleInput}
                        type="text"
                        name="cep"
                        id="idCep"
                        value={cliente.cep}
                        onChange={handleChange}
                        placeholder="xxxxx-xx"
                        required
                    />
                </div>

                <button
                    className="bg-blue_1 border-2 border-blue_1 text-white text-xl rounded-lg w-[100%] py-2 hover:bg-white hover:border-2 hover:text-black"
                    type="submit" onSubmit={(e) => handleSubmit(e)}
                >
                    CADASTRAR
                </button>
            </form>
        </div>
    );
}
