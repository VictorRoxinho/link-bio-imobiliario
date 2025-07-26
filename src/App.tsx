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
  max-width: 32rem;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  min-height: 60vh;

  /* 1. Header Decoration */
  .header-decoration {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-top: 1rem;
  }

  .header-line {
    width: 30vw;
    max-width: 10rem;
    height: 0.25rem;
    background-color: #6f3696;
    border-radius: 2rem;
  }

  .header-accent {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #6f3696;
    border-radius: 0.3rem;
    rotate: 70deg;
    margin-top: -1rem;
  }

  /* 2. Brand Name */
  .brand-name {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0 0 2rem 0.5rem;

    h1 {
      font-weight: 700;
      margin: 0;
      font-family: "Merriweather", serif;
      font-size: clamp(1.2rem, 4vw, 2rem);
    }

    img {
      width: 1.25rem;
      rotate: 70deg;
      height: auto;
    }
  }

  /* 3. Action Options */
  .action-option {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, #6f3696 60%, #8e44ad 100%);
    color: #fff;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 600;
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    width: 80%;
    max-width: 20rem;
    margin: 0.5rem 0;
    cursor: pointer;
    box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;

    &:hover {
      background: linear-gradient(90deg, #5a2b7a 60%, #6f3696 100%);
      transform: translateY(-0.15rem) scale(1.03);
      box-shadow: 0 0.375rem 1.5rem 0 rgba(111, 54, 150, 0.18);
    }

    h2 {
      font-size: inherit;
      margin: 0;
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
      font-size: clamp(1rem, 2vw, 1.2rem);
    }
  }

  /* Tablets */
  @media (max-width: 900px) {
    padding: 1rem;
    gap: 1rem;
    .header-line {
      width: 40vw;
      max-width: 8rem;
    }
    .brand-name {
      gap: 0.5rem;
      margin: 0 0 1.5rem 0.25rem;
    }
  }

  /* Celulares grandes */
  @media (max-width: 600px) {
    padding: 0.75rem;
    gap: 0.75rem;
    min-height: 63vh;
    .header-line {
      width: 50vw;
      max-width: 6rem;
    }
    .brand-name {
      gap: 0.3rem;
      margin: 0 0 1rem 0.1rem;
    }
  }

  /* Celulares pequenos */
  @media (max-width: 400px) {
    padding: 0.5rem;
    gap: 0.5rem;
    min-height: 63vh;
    .header-line {
      width: 60vw;
      max-width: 4rem;
    }
    .action-option {
      padding: 0.75rem 0.5rem;
      border-radius: 0.5rem;
    }
    .brand-name h1 {
      font-size: 1rem;
    }
    .brand-name img {
      width: 1rem;
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
