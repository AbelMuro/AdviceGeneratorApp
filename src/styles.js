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
    color: #CEE3E9;
    text-align: center;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    letter-spacing: -0.257px;
    margin-bottom: 24px;
`

export const DividerIcon = styled.Image`
    width: 295px;
    height: 16px;
`