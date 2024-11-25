import axios from "axios";

import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, FormField, Icon, Radio } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormEntregador() {
    const estadosOptions = [
        { key: 'AC', value: 'Acre', text: 'Acre' },
        { key: 'AL', value: 'Alagoas', text: 'Alagoas' },
        { key: 'AM', value: 'Amazonas', text: 'Amazonas' },
        { key: 'AP', value: 'Amapá', text: 'Amapá' },
        { key: 'BA', value: 'Bahia', text: 'Bahia' },
        { key: 'CE', value: 'Ceará', text: 'Ceará' },
        { key: 'DF', value: 'Distrito Federal', text: 'Distrito Federal' },
        { key: 'ES', value: 'Espírito Santo', text: 'Espírito Santo' },
        { key: 'GO', value: 'Goiás', text: 'Goiás' },
        { key: 'MA', value: 'Maranhão', text: 'Maranhão' },
        { key: 'MG', value: 'Minas Gerais', text: 'Minas Gerais' },
        { key: 'MS', value: 'Mato Grosso do Sul', text: 'Mato Grosso do Sul' },
        { key: 'MT', value: 'Mato Grosso', text: 'Mato Grosso' },
        { key: 'PA', value: 'Pará', text: 'Pará' },
        { key: 'PB', value: 'Paraíba', text: 'Paraíba' },
        { key: 'PE', value: 'Pernambuco', text: 'Pernambuco' },
        { key: 'PI', value: 'Piauí', text: 'Piauí' },
        { key: 'PR', value: 'Paraná', text: 'Paraná' },
        { key: 'RJ', value: 'Rio de Janeiro', text: 'Rio de Janeiro' },
        { key: 'RN', value: 'Rio Grande do Norte', text: 'Rio Grande do Norte' },
        { key: 'RO', value: 'Rondônia', text: 'Rondônia' },
        { key: 'RR', value: 'Roraima', text: 'Roraima' },
        { key: 'RS', value: 'Rio Grande do Sul', text: 'Rio Grande do Sul' },
        { key: 'SC', value: 'Santa Catarina', text: 'Santa Catarina' },
        { key: 'SE', value: 'Sergipe', text: 'Sergipe' },
        { key: 'SP', value: 'São Paulo', text: 'São Paulo' },
        { key: 'TO', value: 'Tocantins', text: 'Tocantins' }
    ];
    
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
    const [ativo, setAtivo] = useState(null);
    const [enderecoUf, setEnderecoUf] = useState();
    const handleChange = (e, {value})=>{
        setEnderecoUf(value);
    }

    const { state } = useLocation();
    const [idEntregador, setIdEntregador] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/entregador/" + state.id)
.then((response) => {
                           setIdEntregador(response.data.id)
                           setNome(response.data.nome)
                           setRg(response.data.rg)
                           setCpf(response.data.cpf)
                           setDataNascimento(response.data.dataNascimento)
                           setFoneCelular(response.data.foneCelular)
                           setFoneFixo(response.data.foneFixo)
                           setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
                           setValorFrete(response.data.valorFrete)
                           setEnderecoRua(response.data.enderecoRua)
                           setEnderecoComplemento(response.data.enderecoComplemento)
                           setEnderecoNumero(response.data.enderecoNumero)
                           setEnderecoBairro(response.data.enderecoBairro)
                           setEnderecoCidade(response.data.enderecoCidade)
                           setFoneCelular(response.data.foneCelular)
                           setEnderecoCep(response.data.enderecoCep)
                           setEnderecoUf(response.data.enderecoUf)
                           setAtivo(response.data.ativo)
            })
        }
}, [state])


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

       
	
        if (idEntregador != null) { //Alteração:
            axios.put("http://localhost:8080/api/entregador/" + idEntregador, entregadorRequest)
            .then((response) => { console.log('Entregador alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alter um entregador.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/entregador", entregadorRequest)
            .then((response) => { console.log('Entregador cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o entregador.') })
        }
 
	}

    return (

        <div>

<MenuSistema tela={'entregador'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                { idEntregador === undefined &&
    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
}
{ idEntregador != undefined &&
    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}

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
                                    label='QTD Entrega Realizadas'
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setQtdEntregasRealizadas(e.target.value)}>
                                        

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
                                    >

                                    <InputMask
                                        mask="99999-999"
                                        value={enderecoCep}
                                         onChange={e => setEnderecoCep(e.target.value)}
                                    />
                                        
                                </Form.Input>
                            </Form.Group> 

                            
                            <Form.Select 
                                 fluid
                                 label='Estado'
                                 placeholder='Selecione'  
                                search
                                selection
                                  options={estadosOptions}
                                  value={enderecoUf}
                                  onChange={handleChange}   
                                  />

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
                                <Link to={'/list-entregador'}>Voltar</Link>
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
