import React, {useState, useEffect} from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {Overlay, Container, Title, Advice, Button, Loading} from './styles.js';
import { SvgXml } from 'react-native-svg';
import icons from './icons';

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');
  const [loading, setLoading] = useState(false)

  const handlePress = () => {
      setLoading(true);
      fetch('https://api.adviceslip.com/advice', {
        cache: 'no-cache'
      })
      .then(res => res.json())
      .then(data => {
        const advice = data.slip.advice;
        const id = data.slip.id;
        setAdvice(advice);
        setAdviceId(id);
        setLoading(false);
      })
      .catch((error) => {
        console.log('rejected', error);
        setLoading(false);
      })
  }

  useEffect(() => {
    handlePress();
  },[])

  return(
      <Overlay>
            <Container>
                <Title>Advice #{adviceId}</Title>
                {loading ? 
                  <Loading>
                    <AnimatedCircularProgress
                      size={50}
                      width={7}
                      fill={90}
                      tintColor="#53FFAA"
                      backgroundColor="transparent"
                    />
                  </Loading>
                  : <Advice> {advice} </Advice>}
                <SvgXml xml={icons['divider']} width='295px' height='16px'/>           
                <Button onPress={handlePress}>
                  <SvgXml xml={icons['dice']} width='24px' height='24px'/>    
                </Button>           
            </Container>  
      </Overlay>
    )
}


export default App;
