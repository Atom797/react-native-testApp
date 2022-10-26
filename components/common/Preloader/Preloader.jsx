import { Text, View, } from 'react-native';
import styled from 'styled-components/native'

const PreloaderView = styled.View`
    color: blue;
    width: 100px;
    height: 100px;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
`

export const Preloader = () => {
  return (
    <PreloaderView>
      <Text>...Loading</Text>
    </PreloaderView>
  )
}

