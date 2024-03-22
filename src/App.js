import React, {useState, useEffect} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {Overlay, Container, Title, Advice, Button, Loading} from './styles.js';
import { SvgXml } from 'react-native-svg';
import icons from './icons';
import Clipboard from '@react-native-clipboard/clipboard';

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');
  const [loading, setLoading] = useState(false)

  const handleClipboard = () => {
    Clipboard.setString(advice);
    Alert.alert('Copied to Clipboard!');
  }

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
  }, [])

  return(
      <Overlay>
            <Container>
                <Title>
                    Advice #{adviceId}
                </Title>
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
                  : 
                      <Advice onPress={handleClipboard}> {advice} </Advice>
                    }
                <SvgXml xml={icons['divider']} width='295px' height='16px'/>           
                <Button>
                  <SvgXml xml={icons['dice']} width='24px' height='24px'/>    
                </Button>           
            </Container>  
      </Overlay>
    )
}


export default App;
