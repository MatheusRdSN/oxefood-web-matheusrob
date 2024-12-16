import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListCliente() {

    const [lista, setLista] = useState([]);
    const [listaEndereco, setListaEndereco] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openModalEndereco, setOpenModalEndereco] = useState(false);
    const [idRemover, setIdRemover] = useState();
    const [idCliente, setIdCliente] = useState();

    

    
        useEffect(() => {

                axios.get("http://localhost:8080/api/cliente/" )
    .then((response) => {
                               setIdCliente(response.data.endereco)
                            
                })
            
    })

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/cliente/' + idRemover)
            .then((response) => {

                console.log('Cliente removido com sucesso.')

                axios.get("http://localhost:8080/api/cliente")
                    .then((response) => {
                        setLista(response.data)
                    })
            })
            .catch((error) => {
                console.log('Erro ao remover um cliente.')
            })
        setOpenModal(false)
    }




    useEffect(() => {
        carregarLista();
    }, [])

    useEffect(() => {
        carregarListaEndereco();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/cliente")
            .then((response) => {
                setLista(response.data)
            })
    }

    function carregarListaEndereco() {

        axios.get("http://localhost:8080/api/cliente/"  + idCliente)
            .then((response) => {
                setListaEndereco(response.data.endereco)
            })
    }

    return (
        <div>
            <MenuSistema tela={'cliente'} />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> Cliente </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-cliente'
                        />



                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nome</Table.HeaderCell>
                                    <Table.HeaderCell>CPF</Table.HeaderCell>
                                    <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                    <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                    <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(cliente => (

                                    <Table.Row key={cliente.id}>
                                        <Table.Cell>{cliente.nome}</Table.Cell>
                                        <Table.Cell>{cliente.cpf}</Table.Cell>
                                        <Table.Cell>{cliente.dataNascimento}</Table.Cell>
                                        <Table.Cell>{cliente.foneCelular}</Table.Cell>
                                        <Table.Cell>{cliente.foneFixo}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste cliente'
                                                icon>
                                                <Link to="/form-cliente" state={{ id: cliente.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                            </Button> &nbsp;

                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este cliente'
                                                icon
                                                onClick={e => confirmaRemover(cliente.id)}>

                                                <Icon name='trash' />

                                            </Button>

                                            <Button
                                                inverted
                                                circular
                                                color='blue'
                                                title='Clique aqui para cadastrar o endereço deste cliente'
                                                icon>
                                                <Link to="/form-endereco" state={{ id: cliente.id }} style={{ color: 'blue' }}> <Icon name='add circle' /> </Link>
                                            </Button>

                                            <Button
                                                inverted
                                                circular
                                                color='blue'
                                                title='Clique aqui para visualizar os endereços'
                                                icon
                                                onClick={e => setOpenModalEndereco(listaEndereco)}>
                                                <Icon name='eye' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>

            <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={() => remover()}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>

             <Modal
                            basic
                            onClose={() => setOpenModalEndereco(false)}
                            onOpen={() => setOpenModalEndereco(true)}
                            open={openModalEndereco}
                        >
                            <Header icon>
                                
                                <div style={{ marginTop: '5%' }}> Exibindo as Informações do Entregador </div>
                            </Header>
                            <Modal.Content>
                                <Table color='orange' sortable celled>
            
                                    <Table.Body>
            
                                            <>
                                                <Table.Row>
                                                    <Table.Cell><strong>Rua</strong></Table.Cell>
                                                    <Table.Cell>{openModalEndereco.rua}</Table.Cell>
                                                </Table.Row>
            
                                                <Table.Row>
                                                    <Table.Cell><strong>Complemento</strong></Table.Cell>
                                                    <Table.Cell>{openModalEndereco.complemento}</Table.Cell>
                                                </Table.Row>
            
                                                <Table.Row>
                                                    <Table.Cell><strong>Numero</strong></Table.Cell>
                                                    <Table.Cell>{openModalEndereco.numero}</Table.Cell>
                                                </Table.Row>
            
                                                <Table.Row>
                                                    <Table.Cell><strong>Bairro</strong></Table.Cell>
                                                    <Table.Cell>{openModalEndereco.bairro}</Table.Cell>
                                                </Table.Row>
            
                                                <Table.Row>
                                                    <Table.Cell><strong>Cidade</strong></Table.Cell>
                                                    <Table.Cell>{openModalEndereco.cidade}</Table.Cell>
                                                </Table.Row>
            
                                                <Table.Row>
                                                    <Table.Cell><strong>Cep</strong></Table.Cell>
                                                    <Table.Cell>{openModalEndereco.cep}</Table.Cell>
                                                </Table.Row>
            
                                                <Table.Row>
                                                    <Table.Cell><strong>Estado</strong></Table.Cell>
                                                    <Table.Cell>{openModalEndereco.estado}</Table.Cell>
                                                </Table.Row>
                                            </>
                                    </Table.Body>
                                </Table>
            
                            </Modal.Content>
                            <Modal.Actions>
                                <Button basic color='red' inverted onClick={() => setOpenModalEndereco(false)}>
                                    <Icon name='reply' /> Voltar
                                </Button>
                            </Modal.Actions>
                        </Modal>


        </div>
    )
}
