import React, {useEffect} from 'react';
import {Overlay, Container, Title, Advice, DividerIcon} from './styles.js';
import { SvgXml } from 'react-native-svg';

/*  https://api.adviceslip.com  */

function App() {

  let icon = `<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>`

  return(
      <Overlay>
            <Container>
              <Title>Advice #117</Title>
              <Advice>
                  “It is easy to sit up and take notice, what's difficult is getting up and taking action.”
              </Advice>
            <SvgXml xml={icon} width='200px' height='100px'/>                      
            </Container>  
  
      </Overlay>
    )
}


export default App;
