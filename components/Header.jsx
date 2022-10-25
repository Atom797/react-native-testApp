import styled from 'styled-components/native'
import { Text, View, } from 'react-native';

const HeaderView = styled.View`
    display: flex;
    flex-direction: row;
    align-items:center;
    height: 27px;
    margin-top:30px;
    background-color: #eff3f4;
    border-bottom-width: 3px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
`
const Tabs = styled.Text`
    margin-left:10px;
    font-size: 15px;
`

export const Header = () => {
    return (
        <View>
            <HeaderView>
                <Tabs>Файл</Tabs>
                <Tabs>Правки</Tabs>
                <Tabs>Задачи</Tabs>
                <Tabs>Окна</Tabs>
            </HeaderView>
            
        </View>
    )

}

