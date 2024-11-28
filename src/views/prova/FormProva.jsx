import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProva () {

    const [texto, setTexto] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [numero, setNumero] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();

    const { state } = useLocation();
    const [idProva, setIdProva] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/prova/" + state.id)
.then((response) => {
                           setIdProva(response.data.id)
                           setTexto(response.data.texto)
                           setValorUnitario(response.data.valorUnitario)
                           setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
            })
        }
}, [state])


    function salvar() {

		let provaRequest = {
            texto: texto,
            valorUnitario: valorUnitario,
            tempoEntregaMaximo: tempoEntregaMaximo
		}
	
        if (idProva != null) { //Alteração:
            axios.put("http://localhost:8080/api/prova/" + idProva, provaRequest)
            .then((response) => { console.log('Prova alterada com sucesso.') })
            .catch((error) => { console.log('Erro ao alterar uma prova.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/prova", provaRequest)
            .then((response) => { console.log('prova cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o prova.') })
        }
     
	}

    return (

        <div>

<MenuSistema tela={'prova'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idProva === undefined &&
    <h2> <span style={{color: 'darkgray'}}> Prova &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
}
{ idProva != undefined &&
    <h2> <span style={{color: 'darkgray'}}> Prova &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}


                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    placeholder='Informe o texto do Prova'
                                    label='Título'
                                    maxLength="100"
                                    value={texto}
			                        onChange={e => setTexto(e.target.value)}
                                />

                            </Form.Group>

            
                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='Valor Unitário'
                                    value={valorUnitario}
			                        onChange={e => setValorUnitario(e.target.value)}
                                    >
                                    
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='Numero'
                                    value={numero}
			                        onChange={e => setNumero(e.target.value)}
                                    >
                                    
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    placeholder='50'
                                    label='Tempo de Entrega Máximo em Minutos'
                                    value={tempoEntregaMaximo}
			                        onChange={e => setTempoEntregaMaximo(e.target.value)}>
                                  
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-prova'}>Listar</Link>
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
