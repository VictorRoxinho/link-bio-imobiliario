import styled from "styled-components";

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
    a {
      color: inherit;
      text-decoration: none;
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .faq {
    width: 100%;
    background-color: #fff;
    color: #333;
    border-radius: 0.7rem;
    border: 1px solid #004369;
    padding: 1rem;
    margin-bottom: 1rem;
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
    line-height: 1.5;
    p {
      margin: 0.5rem 0;
    }
    .faq-question {
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
    .faq-answer {
      margin-left: 1rem;
    }
  }

  @media (max-width: 600px) {
    padding: 0 0.5rem;
    gap: 0.5rem;
    .option {
      font-size: 0.85rem;
      padding: 0.6rem 0;
    }
    .faq {
      font-size: 0.85rem;
      padding: 0.7rem;
    }
  }
`;

export default OptionsContainer;
