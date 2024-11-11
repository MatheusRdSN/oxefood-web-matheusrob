import axios from "axios";

import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Dropdown, Form, FormField, Icon, Radio } from 'semantic-ui-react';

export default function FormEntregador() {
    const countryOptions = [
        { key: '1', value: 'RJ', text: 'Rio' },
        { key: '2', value: 'SP', text: 'Sao Paulo' },
        { key: '3', value: 'PE', text: 'Pernambuco' },

    ]


    // Usa o hook useState para gerenciar o estado


    const [nome, setNome] = useState();
    const [rg, setRg] = useState();
    const [cpf, setCpf] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorFrete, setValorFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoCep, setEnderecoCep] = useState();
    const [enderecoUf, setEnderecoUf] = useState();
    const [ativo, setAtivo] = useState(true);

    function salvar() {

		let entregadorRequest = {
		     nome: nome,
		     cpf: cpf,
             rg: rg,
		     dataNascimento: dataNascimento,
		     foneCelular: foneCelular,
		     foneFixo: foneFixo,

             qtdEntregasRealizadas: qtdEntregasRealizadas,
		     valorFrete: valorFrete,
		     enderecoRua: enderecoRua,
		     enderecoComplemento: enderecoComplemento,
		     enderecoNumero: enderecoNumero,
             enderecoBairro: enderecoBairro,
		     enderecoCidade: enderecoCidade,
		     enderecoCep: enderecoCep,
		     enderecoUf: enderecoUf,
		     ativo: ativo
		}
	
		axios.post("http://localhost:8080/api/entregador", entregadorRequest)
		.then((response) => {
		     console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um entregador.')
		})
	}




    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
			                        onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'>
                                    <InputMask
                                        required
                                        mask="999.999.999"
                                        value={rg}
                                        onChange={e => setRg(e.target.value)}
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
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}

                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 99999.9999"
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 99999.9999"
                                        value={foneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='QTD Entrega Realizadas'>
                                        value={qtdEntregasRealizadas}
                                        onChange={e => setQtdEntregasRealizadas(e.target.value)}

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Valor Por Frete'
                                    value={valorFrete}
                                    onChange={e => setValorFrete(e.target.value)}>
                                        

                                </Form.Input>
                            </Form.Group>


                            <Form.Group>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Rua'
                                    value={enderecoRua}
                                    onChange={e => setEnderecoRua(e.target.value)}>

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Número'
                                    value={enderecoNumero}
                                    onChange={e => setEnderecoNumero(e.target.value)}>
                                    

                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Bairro'
                                    value={enderecoBairro}
                                    onChange={e => setEnderecoBairro(e.target.value)}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Cidade'
                                    value={enderecoCidade}
                                    onChange={e => setEnderecoCidade(e.target.value)}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='CEP'
                                    value={enderecoCep}
                                    onChange={e => setEnderecoCep(e.target.value)}>
                                </Form.Input>
                            </Form.Group>

                            <Form.Input
                                label='UF'
                              
                            >
                                <Dropdown
                                  fluid
                                  placeholder='Selecione'
                                  search
                                  selection
                                    options={countryOptions}
                                    value={enderecoUf}
                                    onChange={e => setEnderecoUf(e.target.value)}
                                />
                            </Form.Input>

                            <Form.Input
                                fluid
                                label='Complemento'
                                value={enderecoComplemento}
                                    onChange={e => setEnderecoComplemento(e.target.value)}>
                            </Form.Input>


                            <Form.Group>
                                <FormField>
                                    <b> Ativo: </b>
                                </FormField>
                                <FormField>
                                    <Radio
                                        label='Sim'
                                        name='radioGroup'
                                        value={true}
                                        checked={ativo === true}
                                        onChange={() => setAtivo(true)}
                                    />
                                </FormField>
                                <FormField>
                                    <Radio
                                        label='Não'
                                        name='radioGroup'
                                        value={false}
                                        checked={ativo === false}
                                        onChange={() => setAtivo(false)}
                                    />


                                </FormField>
                            </Form.Group>


                        </Form>

                        <div style={{ marginTop: '4%' }}>

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
