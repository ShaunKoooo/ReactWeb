import Img from "./components/Img";
import Navbar from "./components/NavBar";
import Images from './Img';
import SubContent from "./components/SubContent";
import Card from './components/Card';
import Form from './components/Form/Form';
import Footer from './components/Footer';
import { useState, useCallback } from "react";
import HamburgerBar from "./components/HamburgerBar";
import { useMemo } from "react";

const App = () => {
  const width = window.innerWidth;
  const [openHamburger, setClickHamburger] = useState(false);
  

  const atClickHamburger = (isOpen) => {
    setClickHamburger(isOpen);
  }

  const renderCard = useMemo(() => {
    return <Card src={Images.Home.product} height="20px" width={`${width / 3}px`}/>
  }, []);

  const renderForm = useMemo(() => {
    return <Form />
  }, []);

  return (
    <div>
      <Navbar isOpen={openHamburger} onClicked={atClickHamburger} />
      {openHamburger && <HamburgerBar />}
      <Img src={Images.Home.homeImg} height="100%" width="100%" />
      <SubContent title="關於我們">
        身體相互依靠，想法相互連結。Asian Squat是同理，也是一種生活態度，我們尊敬生活上發生的每一件事情，並分析、了解他們。所有看似理所當然的事情對許多人來說卻是困難的，因此提供改善問題的想法，並付出實踐就是亞洲蹲團隊想要做的。我們期許成為夢想的推手，提供解決問題的方案，讓使用者與我們的產品共同成長，創造雙贏。
      </SubContent>
      <SubContent title="產品列表">
        {renderCard}
      </SubContent>
      <SubContent title="線上聯繫">
        {renderForm}
      </SubContent>
      <Footer />
    </div>
  )
}

export default App;