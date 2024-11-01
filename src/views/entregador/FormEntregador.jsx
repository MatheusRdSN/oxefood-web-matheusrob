import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Select, FormField, Radio } from 'semantic-ui-react';

export default function FormEntregador  () {
    const countryOptions = [
        { key: '1', value: 'RJ', text: 'Rio' },
        { key: '2', value: 'SP', text: 'Sao Paulo' },
        { key: '3', value: 'PE', text: 'Pernambuco' },
       
      ]

      state = {}
  handleChange = (e, { value }) => this.setState({ value })

      
                                       
      
    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='RG'>
                                    <InputMask
                                        required
                                        mask="999.999.999"
                                    /> 
                                </Form.Input>
                            </Form.Group>


                            <Form.Group> 
                                <Form.Input
                                    fluid
                                    label='Dt Nascimento'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                       
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 99999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 99999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='QTD Entrega Realizadas'>
                                   
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Valor Por Frete'>
                                   
                                </Form.Input>
                            </Form.Group>
                            

                            <Form.Group>

                            <Form.Input
                                    fluid
                                    width={6}
                                    label='Rua'>
                                   
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Número'>
                                   
                                </Form.Input>
                            </Form.Group>
                        
                        <Form.Group>
                            <Form.Input
                                    fluid
                                    width={6}
                                    label='Bairro'>  
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Cidade'>  
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='CEP'>  
                                </Form.Input>
                        </Form.Group>

                        

                        <Select placeholder='Selecione seu Estado' options={countryOptions} />

                        <Form.Input
                                    fluid
                                    label='Complemento'>  
                                </Form.Input>


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
                                Voltar
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
