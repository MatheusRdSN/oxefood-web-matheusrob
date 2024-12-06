import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, FormField, Icon, Radio } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormVenda () {

    const statusOptions = [
        { key: 'PC', value: 'PedidoCancelado', text: 'Pedido Cancelado' },
        { key: 'AP', value: 'AguardandoPagamento', text: 'Aguardando Pagamento' },
        { key: 'P', value: 'Pago', text: 'Pago' },
        { key: 'E', value: 'Entregue', text: 'Entregue' },
    ];

    const [cliente, setCliente] = useState();
    const [produto, setProduto] = useState();
    const [statusVenda, setStatusVenda] = useState();
    const [dataVenda, setDataVenda] = useState();
    const [valorTotal, setValorTotal] = useState();
    const [observacao, setObservacao] = useState();
    const [retiradaEmLoja, setRetiradaEmLoja] = useState();
    const handleChange = (e, {value})=>{
        setStatusVenda(value);
    }

    const { state } = useLocation();
    const [idVenda, setIdVenda] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/venda/" + state.id)
.then((response) => {
                           setIdVenda(response.data.id)
                           setCliente(response.data.cliente)
                           setProduto(response.data.produto)
                           setStatusVenda(response.data.statusVenda)
                           setDataVenda(response.data.dataVenda)
                           setValorTotal(response.data.valorTotal)
                           setObservacao(response.data.observacao)
                           setRetiradaEmLoja(response.data.retiradaEmLoja)
            })
        }
}, [state])


    function salvar() {

		let vendaRequest = {
            cliente: cliente,
            produto: produto,
            statusVenda: statusVenda,
            dataVenda: dataVenda,
            valorTotal: valorTotal,
            observacao: observacao,
            retiradaEmLoja: retiradaEmLoja
		}
	
        if (idVenda == null){
            axios.post("http://localhost:8080/api/venda", vendaRequest)
            .then((response) => { console.log('Venda cadastrada com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o venda.') })
        }
    }
     
	

    return (

        <div>

<MenuSistema tela={'venda'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

    <h2> <span style={{color: 'darkgray'}}> Venda &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>



                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    placeholder='Informe o nome do cliente'
                                    label='Cliente'
                                    maxLength="100"
                                    value={cliente}
			                        onChange={e => setCliente(e.target.value)}
                                />

                            </Form.Group>

            
                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='Produto'
                                    value={produto}
			                        onChange={e => setProduto(e.target.value)}
                                    >
                                    
                                </Form.Input>

                              


                                <Form.Input
                                    fluid
                                    label='Data da Venda'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataVenda}
                                        onChange={e => setDataVenda(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='Valor Unitário'
                                    value={valorTotal}
			                        onChange={e => setValorTotal(e.target.value)}
                                    >
                                    
                                </Form.Input>

                                
            

                            </Form.Group>

                            <Form.Select 
                                 fluid
                                 label='Status da Venda'
                                 placeholder='Selecione'  
                                search
                                selection
                                  options={statusOptions}
                                  value={statusVenda}
                                  onChange={handleChange}   
                                  />

                            

                           

                            <Form.TextArea  
                                    fluid
                                    placeholder='Informe alguma observação sobre a venda'
                                    label='Observação'
                                    value={observacao}
			                        onChange={e => setObservacao(e.target.value)}/>

<Form.Group>
                                <FormField>
                                    <b> Retirada em Loja: </b>
                                </FormField>
                                <FormField>
                                    <Radio
                                        label='Sim'
                                        name='radioGroup'
                                        value={true}
                                        checked={retiradaEmLoja === true}
                                        onChange={() => setRetiradaEmLoja(true)}
                                    />
                                </FormField>
                                <FormField>
                                    <Radio
                                        label='Não'
                                        name='radioGroup'
                                        value={false}
                                        checked={retiradaEmLoja === false}
                                        onChange={() => setRetiradaEmLoja(false)}
                                    />
                                        

                                </FormField>
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
                                <Link to={'/list-venda'}>Listar</Link>
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
