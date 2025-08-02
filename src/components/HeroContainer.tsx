import styled from "styled-components";

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

  @media (max-width: 600px) {
    margin: 0 0.5rem 1rem 0.5rem;
    border-radius: 1rem 1rem 0.5rem 0.5rem;
    .profile-image {
      width: 80px;
      min-width: 80px;
      margin-bottom: 0.8rem;
    }
    .hero-title {
      margin-bottom: 1rem;
    }
    .title-divider {
      width: 90%;
    }
    h1 {
      font-size: 1.3rem !important;
    }
    p {
      font-size: 0.8rem !important;
    }
  }

  @media (min-width: 1024px) {
    margin: 0 4rem 2rem 4rem;
    border-radius: 2rem 2rem 1rem 1rem;
    min-height: 500px;
    .profile-image {
      width: 180px;
      min-width: 180px;
      margin-bottom: 2rem;
    }
    .hero-title {
      margin-bottom: 2.5rem;
    }
    .title-divider {
      width: 120%;
      height: 3px;
    }
    h1 {
      font-size: 3rem !important;
    }
    p {
      font-size: 1.3rem !important;
    }
  }
`;

export default HeroContainer;
