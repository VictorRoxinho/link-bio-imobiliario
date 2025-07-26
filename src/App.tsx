import "./App.css";
import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-image: url("/images/background-full.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  min-height: 65vh;

  /* 1. Header Decoration */
  .header-decoration {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 1rem;
  }

  .header-line {
    width: 30vw;
    height: 4px;
    background-color: #6f3696;
    border-radius: 2rem;
  }

  .header-accent {
    width: 25px;
    height: 25px;
    background-color: #6f3696;
    border-radius: 5px;
    rotate: 70deg;
    margin-top: -15px;
  }

  /* 2. Brand Name */
  .brand-name {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 2rem 1rem;

    h1 {
      font-weight: 700;
      margin: 0;
      font-family: "Merriweather", serif;
    }

    img {
      width: 20px;
      rotate: 70deg;
      height: auto;
    }
  }

  /* 3. Action Options */
  .action-option {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6f3696;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 16px 24px;
    border-radius: 10px;
    width: 60vw;
    max-width: 400px;
    min-width: 220px;
    margin: 8px 0;
    cursor: pointer;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;

    &:hover {
      background-color: #5a2b7a;
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0 6px 24px 0 rgba(111, 54, 150, 0.18);
    }
  }

  /* 4. Social Instagram */
  .social-instagram {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    cursor: pointer;

    h3 {
      margin: 0;
      font-family: "Merriweather", serif;
    }
  }

  @media (max-width: 400px) {
    padding: 8px;
    gap: 8px;
    h1 {
      font-size: 1.2rem;
    }

    h2 {
      font-size: 0.9rem;
    }

    .action-option {
      width: 70%;
      min-width: unset;
      max-width: unset;
      font-size: 1rem;
      padding: 12px 8px;
    }

    .brand-name {
      gap: 4px;
      margin: 0 0 1rem 0.5rem;

      img {
        width: 16px;
      }
    }
  }
`;

function App() {
  return (
    <>
      <PageContainer>
        <ContentContainer>
          <div className="header-decoration">
            <div className="header-line"></div>
            <div className="header-accent"></div>
          </div>
          <div className="brand-name">
            <h1>Ane</h1>
            <img src="/figuras/fig1.svg" alt="" />
            <h1>França</h1>
          </div>
          <div className="action-option">
            <h2>Converse comigo</h2>
          </div>
          <div className="action-option">
            <h2>Lançamentos de imóveis</h2>
          </div>
          <div className="action-option">
            <h2>Meu Site</h2>
          </div>
          <div className="action-option">
            <h2>Dúvidas Frequentes</h2>
          </div>
          <div className="social-instagram">
            <h3>@aneefranca</h3>
          </div>
        </ContentContainer>
      </PageContainer>
    </>
  );
}

export default App;
