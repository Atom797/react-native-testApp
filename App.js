import store from './redux/redux-store'
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, FlatList} from 'react-native';
import { FeedMenu } from './components/FeedMenu';
import { Header } from './components/Header';
import styled from 'styled-components/native'
import { MessageLog } from './components/MessageLog';
import { OrderList } from './components/OrderList';
import { DriverList } from './components/DriverList';

const MainView = styled.View`
  flex:1;
  background-color: #dfdfdf;
`


export default function App() {
  return (
    <Provider store={store}>
      <MainView >
        <Header />
        <FeedMenu />
        <MessageLog />
        <DriverList/>
        <OrderList />
        <StatusBar theme="auto" />
      </MainView>
    </Provider>
  );
}

