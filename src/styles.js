import styled from 'styled-components/native';

export const Overlay = styled.View`
    width: 100%;
    min-height: 100%;
    background-color: #202733;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.View`
    width: 343px;
    height: 315px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #313A48;
    position: relative;
`

export const Title = styled.Text`
    color: #53FFAA;
    text-align: center;
    font-family: Manrope;
    font-size: 11px;
    font-style: normal;
    font-weight: 800;
    line-height: 18px;
    letter-spacing: 3.457px;
    text-transform: uppercase;
    margin-bottom: 24px;
`

export const Advice = styled.Text`
    width: 295px; 
    color: #CEE3E9;
    text-align: center;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    letter-spacing: -0.257px;
    margin-bottom: 24px;
`

export const Button = styled.Pressable`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 9999px;
    background-color: #53FFAA;
    position: absolute;
    bottom: -32px;
    left: 50%;
    transform: translateX(-32px);
`

export const Loading = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    margin-bottom: 24px;
`
