import axios from "axios";
import Cookies from 'js-cookie';

const { token } = Cookies.get();

export const api = axios.create({
    baseURL: "https://two0231easystock.onrender.com"
});

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
//Produto
export function getAllPosts() {
    const response = api.get(`/produto`);

    return response;
}

export function searchProduct(nomeProduto) {
    const response = api.get(`/produto/buscar`, { params: { nome: nomeProduto } });

    return response;
}

export function getProductById(id) {
    const response = api.get(`/produto/:${id}`);

    return response;
}

export function postProduto(data) {
    const response = api.post(`/produto`, data);

    return response;
}

export function updateProduto(pdv, data) {
    const response = api.patch(`/produto/${pdv}`, data)

    return response;
}

export function deleteProduto(pdv) {
    const response = api.delete(`/produto/${pdv}`);

    return response;
}

//Cliente
export function getAllClients() {
    const response = api.get(`/cliente`);

    return response;
}

export function postCliente(data) {
    const response = api.post(`/cliente`, data);
    
    return response;
}
