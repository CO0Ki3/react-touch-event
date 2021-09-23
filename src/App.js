import { useMediaQuery } from "react-responsive";
import { Menu } from "./menu.jsx";
import { Button } from "./button";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
`;

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const isTablet = useMediaQuery({
    query: "(max-width:1023px) and (min-width:768px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const onClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleTouchEvent = (e) => {
    setIsMenuVisible(!isMenuVisible);
  }

  useEffect(() => {
    if(isMobile || isTablet) {
      setIsMenuVisible(true);
      let autoOff = setTimeout(() => {
        setIsMenuVisible(false)
      }, 1500);

      return () => clearTimeout(autoOff);
    }
  }, [isMobile, isTablet]);

  return (
    <>
      {isMobile || isTablet ? (
        <Wrapper onTouchStart={handleTouchEvent}>{isMenuVisible ? <Menu /> : <></>}</Wrapper>
      ) : (
        <Wrapper>
          <Button onClick={onClick}>Click Me</Button>
          {isMenuVisible ? <Menu /> : <></>}
        </Wrapper>
      )}
    </>
  );
}

export default App;
