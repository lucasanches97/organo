import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {



    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalavar = (evento) => {

        evento.preventDefault()         // previne o comportamento padrão do navegador de recarregar a página.
        props.aoColaboradorCadastrado({

            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')   // para o formulário ficar vazio, após inserir um colaborador.
        setTime('')

    }

    return (

        <section className="formulario">

            <form  onSubmit={aoSalavar}>
                
                <h2>Preencha os dados para criar o card e fazer parte do time</h2>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}   // tem acesso ao valor que foi alterado e vai definir com o valor que recebeu.
                
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>

        </section>
    )
}

export default Formulario