import styled from 'styled-components/native'
import { Text, View, } from 'react-native';


const FeedMenuView = styled.View`
    display: flex;
    flex-direction: row;
    align-items:center;
    height: 40px;
    margin-top:3px;
    background-color: #eff3f4;
    border-bottom-width: 3px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
`

export const FeedMenu = () => {
    return (
        <View>
            <FeedMenuView>
            </FeedMenuView>

        </View>
    )
}

