import { useState, useEffect } from "react";
import React from "react";
import { useNavigation, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../imagens/logo2.png';
import Whattzap from './Whattzap.png'

const Container = styled.div`
    background-color: #131D47;
    color: #fff;
    font-family: Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 480px) {
        padding: 20px;
    }
`;

const CardLinkVoltar = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;

    @media (max-width: 480px) {
        top: 10px;
        left: 10px;
    }
`;


const LinkVoltar = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 20px;
    cursor: pointer;

    @media (max-width: 480px) {
        font-size: 16px;
        padding: 6px 12px;
    }
`;

const CardTexto = styled.div`
    width: 1000px;
    text-align: justify;
    display: flex;
    flex-direction: column;

    @media (max-width: 480px) {
        width: 100%;
        margin-top: 20px;
        text-align: center;
    }
`;
const Texto = styled.p`
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 18px;
        line-height: 26px;
    }
`;

const Imagem = styled.img`
    width: 450px;
    margin-top: 10px;

    @media (max-width: 480px) {
        width: 200px;
    }
`;

const WhattzapIcon = styled.img`
    width: 25px;

    @media (max-width: 480px) {
        width: 18px;
    }
`;

const CardElementos = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 480px) {
        margin-top: 60px;
    }
`;

const CardTitulo = styled.div`
    margin-top: 50px;

    @media (max-width: 480px) {
        margin-top: 30px;
    }
`;


export default function ContatoFooter() {
    const navigation = useNavigate();
    return (
        <Container>
            <CardElementos>
                <CardLinkVoltar>
                    <LinkVoltar onClick={() => navigation(-1)}>Voltar</LinkVoltar>
                </CardLinkVoltar>
                <div>
                    <Imagem src={Logo}></Imagem>
                </div>
                <CardTitulo>
                    <h1>CONTATO</h1>
                </CardTitulo>
                <CardTexto>
                    <Texto>
                        ☏ 3701 - 0000
                        <br/><WhattzapIcon src={Whattzap} /> (18) 99747 - 4747
                        <br/>📨prostudy@gmail.com
                    </Texto>
                </CardTexto>
            </CardElementos>
        </Container>
    );
}
