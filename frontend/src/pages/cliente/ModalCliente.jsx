import React, { useState } from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";

export default function ModalCliente({ isOpen, onClose }) {   
    const [nome, setNome] = useState();
    const [numeroTelefone, setNumeroTelefone] = useState();
    const [email, setEmail] = useState();
    const [valorDivida, setValorDivida] = useState();

    const createForm = async (e) => {
        e.preventDefault();

        const data = {
            nome,
            numeroTelefone,
            email,
            valorDivida,
        };

        await postProduto(data);

        // Recarrega a página
        window.location.reload();
    };

    if (isOpen) {
        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Adicionar Cliente</h1>
                        <form onSubmit={async (e) => await createForm(e).then(onClose)}>
                            <div className="label-float">
                                <input
                                    type="text"
                                    id="nome"
                                    placeholder="Nome"
                                    required
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>

                            <div className="label-float">
                                <input
                                    type="number"
                                    id="numeroTelefone"
                                    placeholder="Número *"
                                    onChange={(e) => setNumeroTelefone(e.target.value)}
                                    
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="email *"
                                    onChange={(e) => setEmail(e.target.value)}
                                    
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    step="any"
                                    id="valorDivida "
                                    placeholder="Valor da Divida"
                                    required
                                    onChange={(e) => setValorDivida(e.target.value)}
                                />
                            </div>
                            <div className="display-botoes">
                                <input
                                    type="submit"
                                    name="Adicionar Produto"
                                    id="enviar"
                                    className="buttons"
                                />
                            </div>
                            <div className="display-botoes">
                                <button
                                    className="button-modalc"
                                    onClick={onClose}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </TodoModal>
        );
    }
    return null;
}
