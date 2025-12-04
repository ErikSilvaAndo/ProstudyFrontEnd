import { useState, useEffect } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../imagens/logo2.png";
import 'bootstrap-icons/font/bootstrap-icons.css'

const Container = styled.div`
  background-color: #131d47;
  color: #fff;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const LogoImage = styled.img`
  width: 250px;
  height: auto;

  @media (max-width: 480px) {
    width: 180px;
  }
`;

const Titulo = styled.h1`
  font-size: 60px;
  font-weight: 1000;

  @media (max-width: 480px) {
    font-size: 35px;
  }
`;

const CardImagem = styled.div`
  margin-top: 20px;
`;

const CardTitulo = styled.div`
  margin-bottom: 30px;
`;

const CardQuiz = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(154, 236, 237, 0.9);
  border: 2px solid white;
  border-radius: 12px;

  width: 100%;
  max-width: 220px;
  padding: 15px;

  transition: 0.2s;

  @media (max-width: 480px) {
    max-width: 160px;
    padding: 12px;
  }
`;

const SecaoQuiz = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  padding: 20px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 15px;
    padding: 10px;
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
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const TituloQuiz = styled.p`
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  color: black;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const CardLinks = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const Links = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SearchSection = styled.div`
  margin-bottom: 40px;

  @media (max-width: 480px) {
    margin-bottom: 25px;
  }
`;

const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 480px) {
    max-width: 100%;
    margin-top: 15px;
  }
`;

const SearchInput = styled.input`
  width: 60%;
  padding: 15px 20px;
  border-radius: 50px;
  border: none;
  background-color: #9aeced;
  font-size: 18px;
  outline: none;
  color: #131d47;

  @media (max-width: 480px) {
    width: 90%;
    padding: 12px 18px;
    font-size: 16px;
  }
`;

const SeccaoMaterias = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const MateriasCardPesquisa = styled.div`
  background-color: #131d47;
  border: 2px solid #9aeced;
  border-radius: 10px;
  width: 120px;
  height:250px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: #fff;

  @media (max-width: 480px) {
    width: 100px;
    height: 80px;
    font-size: 12px;
  }
`;

const TituloPesquisa = styled.label`
  font-size: 32px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;


export default function ListarQuiz() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [link, setLink] = useState('');
    const [estaCarregando, setEstaCarregando] = useState(false);
    const [quiz, setQuiz] = useState([])
    const [busca, setBusca] = useState("");
    const [loading, setLoading] = useState('');
    const [erro, setErro] = useState('');

    const CriarQuiz = () => {
        navigate(`/adicionarQuiz`);
    };

    const navigate = useNavigate()

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const resposta = await fetch('https://prostudy-back-end.vercel.app/quiz/listarQuiz');
                if (!resposta.ok) {
                    throw new Error(`Erro ao listar todas as matérias: ${resposta.status}`);
                }
                const data = await resposta.json();
                setQuiz(data);
            } catch (error) {
                setErro(error)
                console.error('Erro ao buscar os dados', error)
            } finally {
                setLoading(false)
            }
        }
        fetchQuiz();
    }, []);

    const handleInputChange = (e) => {
        setBusca(e.target.value.toLowerCase());
    };

    const quizFiltrados = busca
        ? quiz.filter((item) =>
            String(item.titulo || "").toLowerCase().includes(busca)
        )
        : quiz;

    return (
        <Container>
            <CardLinkVoltar>
                <LinkVoltar onClick={() => navigate(-1)}>Voltar</LinkVoltar>
            </CardLinkVoltar>
            <CardImagem>
                <LogoImage src={Logo} />
            </CardImagem>

            <Titulo>QUIZ</Titulo>

            <SearchSection>
                <SearchInputContainer>
                    <TituloPesquisa htmlFor="pesquisar">O que você quer pesquisar?</TituloPesquisa>
                    <SearchInput
                        id="pesquisar"
                        name="pesquisar"
                        onChange={handleInputChange}
                    />
                </SearchInputContainer>
            </SearchSection>


            {busca !== "" && (
                <>
                    <h2 style={{ marginTop: 0 }}>Resultados da busca:</h2>
                    <SeccaoMaterias>
                        {quizFiltrados.length > 0 ? (
                            quizFiltrados.map((item) => (
                                <MateriasCardPesquisa
                                    key={item.id_quiz}
                                    onClick={() => navigate(`/editarQuiz/${item.id_quiz}`)}
                                >
                                    {item.titulo}
                                </MateriasCardPesquisa>
                            ))
                        ) : (
                            <p>Nenhum quiz encontrado.</p>
                        )}
                    </SeccaoMaterias>
                </>
            )}

            <SecaoQuiz>
                {quiz.map(item => (
                    <CardQuiz>
                        <TituloQuiz key={item.id_quiz}>{item.titulo}</TituloQuiz>
                        <p style={{ color: "black" }}>{item.descricao}</p>
                        <CardLinks>
                            <Links href={item.link} target="_blank">Quiz</Links>
                        </CardLinks>
                    </CardQuiz>
                ))}
            </SecaoQuiz>
        </Container>
    )
}