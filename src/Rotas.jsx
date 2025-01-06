import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './views/util/ProtectedRoute';
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEndereco from './views/cliente/FormEndereco';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import Home from './views/home/Home';
import FormLogin from './views/login/FormLogin';
import FormVenda from './views/venda/FormVenda';
import ListVenda from './views/venda/ListVenda';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<FormLogin />} />

                <Route path="/home" element={
                    <ProtectedRoute>
                    <Home />  
                    </ProtectedRoute>
                } />

                <Route path="form-cliente" element={
                    <ProtectedRoute>
                        <FormCliente />
                    </ProtectedRoute>} />

                <Route path="form-endereco" element={
                    <ProtectedRoute>
                        <FormEndereco />
                    </ProtectedRoute>} />

                <Route path="list-cliente" element={
                    <ProtectedRoute>
                        <ListCliente />
                    </ProtectedRoute>} />

                <Route path="form-produto" element={
                    <ProtectedRoute>
                        <FormProduto />
                    </ProtectedRoute>} />

                <Route path="list-produto" element={
                    <ProtectedRoute>
                        <ListProduto />
                    </ProtectedRoute>} />

                <Route path="form-entregador" element={
                    <ProtectedRoute>
                        <FormEntregador />
                    </ProtectedRoute>
                } />

                <Route path="list-entregador" element={
                    <ProtectedRoute>
                    <ListEntregador /> 
                     </ProtectedRoute>
                } />

                <Route path="form-venda" element={
                    <ProtectedRoute>
                    <FormVenda /> 
                     </ProtectedRoute>
                } />
                
                <Route path="list-venda" element={
                    <ProtectedRoute>
                    <ListVenda /> 
                     </ProtectedRoute>
                } />
            </Routes>
        </>
    )
}

export default Rotas
