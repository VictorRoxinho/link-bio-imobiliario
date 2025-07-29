import "./App.css";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0.5rem 0;
  background-color: #f5f5f5;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  margin: 0 1rem 1rem 1rem;
  border-radius: 1.3rem 1.3rem 0.3rem 0.3rem;

  background-image: url("/images/Background-Building-Shadow.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: #fff;
  font-family: "Belleza", sans-serif;

  .profile-image {
    width: min(120px, 34vw);
    max-width: 100%;
    margin-bottom: 1.3rem;
    border-radius: 50%;
    object-fit: cover;
    background: #fff;
  }

  .hero-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 1.7rem;
  }

  .title-divider {
    width: 105%;
    height: 2px;
    background-color: #fff;
    margin-top: 0.5rem;
    margin-bottom: 0.7rem;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  margin-top: 1rem;
  margin-bottom: -2rem;
  flex: 1;
  gap: 0.7rem;

  .option {
    width: 100%;
    background-color: #004369;
    color: #fff;
    border-radius: 0.7rem;
    padding: 0.7rem 0;
    text-align: center;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;

    cursor: pointer;

    &:hover {
      background-color: #00304d;
    }
  }
`;

function App() {
  return (
    <PageContainer>
      <HeroContainer>
        <img
          src="/images/Profile-Picture-Background.png"
          alt="Foto de Ane França"
          className="profile-image"
        />
        <div className="hero-title">
          <h1
            style={{
              fontSize: "2rem",
              fontFamily: "Belleza, serif",
              fontWeight: 100,
            }}
          >
            ANE FRANÇA
          </h1>
          <div className="title-divider"></div>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              letterSpacing: "0.2em",
              fontSize: "0.9rem",
            }}
          >
            CORRETORA DE IMÓVEIS
          </p>
        </div>
      </HeroContainer>
      <OptionsContainer>
        <div className="option">Meu Site</div>
        <div className="option">Portfólio</div>
        <div className="option">WhatsApp</div>
        <div className="option">Dúvidas Frequentes</div>
      </OptionsContainer>
    </PageContainer>
  );
}

export default App;
