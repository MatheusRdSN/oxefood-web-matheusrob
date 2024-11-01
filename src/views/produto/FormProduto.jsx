import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';

export default function FormProduto () {

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
                                />

                                <Form.Input
                                    required
                                    fluid
                                    placeholder='Informe o código do produto'
                                    label='Código do Produto'>
                                
                                </Form.Input>

                            </Form.Group>

                        

                            <Form.TextArea  
                                    fluid
                                    placeholder='Informe a descrição do produto'
                                    label='Descrição'/>
            
                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='Valor Unitário'
                                    >
                                    
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    placeholder='20'
                                    label='Tempo de Entrega Mínimo em Minutos'>
                                   
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    placeholder='50'
                                    label='Tempo de Entrega Máximo em Minutos'>
                                  
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
