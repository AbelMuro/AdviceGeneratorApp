import React, {useEffect} from 'react';
import {Overlay, Container, Title, Advice, DividerIcon} from './styles.js';
//import SvgIcon from './icons/pattern-divider-mobile.svg';

/*  https://api.adviceslip.com  */

function App() {
  return(
      <Overlay>
            <Container>
              <Title>Advice #117</Title>
              <Advice>
                  “It is easy to sit up and take notice, what's difficult is getting up and taking action.”
              </Advice>
            </Container>            
      </Overlay>
    )
}


export default App;
