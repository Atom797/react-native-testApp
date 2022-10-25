import { StatusBar } from 'expo-status-bar';
import {Text, View,} from 'react-native';
import { FeedMenu } from './components/FeedMenu';
import { Header } from './components/Header';
import styled from 'styled-components/native'
import { MessageLog } from './components/MessageLog';

const MainView = styled.View`
  flex:1;
  background-color: #dfdfdf;
`

export default function App() {
  return (
    <MainView >
      <Header/>
      <FeedMenu/>
      <MessageLog/>
      <StatusBar theme="auto" />
    </MainView>
  );
}

