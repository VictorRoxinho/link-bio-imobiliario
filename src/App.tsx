import "./App.css";
import PageContainer from "./components/PageContainer";
import HeroContainer from "./components/HeroContainer";
import OptionsContainer from "./components/OptionsContainer";
import HeroTitle from "./components/HeroTitle";
import FaqContent from "./components/FaqContent";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  return (
    <PageContainer>
      <HeroContainer>
        <img
          src="/images/Profile-Picture-Background.png"
          alt="Foto de Ane França"
          className="profile-image"
        />
        <HeroTitle />
      </HeroContainer>
      <OptionsContainer>
        <div className="option">
          <a
            href="https://wa.me/c/557181932275"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfólio
          </a>
        </div>
        <div className="option">
          <a
            href="https://wa.me/5571981932275?text=Ol%C3%A1%2C%20Ane%21%20Tenho%20interesse%20em%20comprar%20um%20im%C3%B3vel%20e%20gostaria%20da%20sua%20ajuda."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
        <div
          className={`option ${isOptionOpen ? "open" : ""}`}
          onClick={() => setIsOptionOpen(!isOptionOpen)}
        >
          Dúvidas Frequentes
        </div>

        <AnimatePresence>
          {isOptionOpen && (
            <motion.div
              className="faq"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <FaqContent />
            </motion.div>
          )}
        </AnimatePresence>
      </OptionsContainer>
    </PageContainer>
  );
}

export default App;
