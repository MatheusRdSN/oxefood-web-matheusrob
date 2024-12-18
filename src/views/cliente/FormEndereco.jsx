import axios from "axios";

import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { notifyError, notifySuccess } from '../../views/util/Util';

export default function FormEndereco() {

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
    
    const [rua, setRua] = useState();
    const [complemento, setComplemento] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [cep, setCep] = useState();
    const [estado, setEstado] = useState();
    const handleChange = (e, {value})=>{
        setEstado(value);
    }

    const { state } = useLocation();
    const [idCliente, setIdCliente] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/cliente/" + state.id)
.then((response) => {
                           setIdCliente(response.data.id)
                                           
                           setRua(response.data.rua)                         
                           setNumero(response.data.numero)
                           setBairro(response.data.bairro)
                           setCep(response.data.cep)
                           setCidade(response.data.cidade)
                           setEstado(response.data.estado)
                           setComplemento(response.data.complemento)
            })
        }
}, [state])



    function salvar() {

		let enderecoClienteRequest = {
	
		     rua: rua,
		     numero: numero,
             bairro: bairro,
             cep: cep,
		     cidade: cidade,    
		     estado: estado,
             complemento: complemento
		}
	
        if (idCliente != null) { 
            axios.post("http://localhost:8080/api/cliente/endereco/" + idCliente, enderecoClienteRequest)
            .then((response) => { notifySuccess('Endereço alterado com sucesso.') })
            .catch((error) => { if (error.response.data.errors != undefined) {
                for (let i = 0; i < error.response.data.errors.length; i++) {
                    notifyError(error.response.data.errors[i].defaultMessage)
             }
     } else {
         notifyError(error.response.data.message)
     }
  })
        }
 
	}

    return (

        <div>

<MenuSistema tela={'endereço'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                { idCliente != undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Endereço &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                }
                

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>                          

                             <Form.Group>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Rua'
                                    value={rua}
                                    onChange={e => setRua(e.target.value)}>

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Número'
                                    value={numero}
                                    onChange={e => setNumero(e.target.value)}>
                                    

                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Bairro'
                                    value={bairro}
                                    onChange={e => setBairro(e.target.value)}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='Cidade'
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='CEP'
                                    >

                                    <InputMask
                                        mask="99999-999"
                                        value={cep}
                                         onChange={e => setCep(e.target.value)}
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
                                  value={estado}
                                  onChange={handleChange}   
                                  />

                          <Form.Input
                                fluid
                                label='Complemento'
                                value={complemento}
                                    onChange={e => setComplemento(e.target.value)}>
                            </Form.Input>
                                                

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
                                <Link to={'/list-cliente'}>Voltar</Link>
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
