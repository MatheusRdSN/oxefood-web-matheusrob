import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormProduto () {

    const [codigo, setCodigo] = useState();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();

    function salvar() {

		let produtoRequest = {
            codigo: codigo,
            titulo: titulo,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMinimo: tempoEntregaMinimo,
            tempoEntregaMaximo: tempoEntregaMaximo
		}
	
		axios.post("http://localhost:8080/api/produto", produtoRequest)
		.then((response) => {
		     console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um produto.')
		})
	}

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    placeholder='Informe o título do produto'
                                    label='Título'
                                    maxLength="100"
                                    value={titulo}
			                        onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    placeholder='Informe o código do produto'
                                    label='Código do Produto'
                                    value={codigo}
			                        onChange={e => setCodigo(e.target.value)}>
                                
                                </Form.Input>

                            </Form.Group>

                        

                            <Form.TextArea  
                                    fluid
                                    placeholder='Informe a descrição do produto'
                                    label='Descrição'
                                    value={descricao}
			                        onChange={e => setDescricao(e.target.value)}/>
            
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
                                    fluid
                                    width={6}
                                    placeholder='20'
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    value={tempoEntregaMinimo}
			                        onChange={e => setTempoEntregaMinimo(e.target.value)}>
                                   
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
                                Listar
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
