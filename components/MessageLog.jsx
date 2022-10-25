import { Text, View, } from 'react-native';
import styled from 'styled-components/native'

const MessageLogView = styled.View`
    flex:1;
    border-radius: 20px;
`

const HeaderView = styled.View`
    display: flex;
    border-radius: 8px;
    height: 7%;
    flex-direction: row;
    align-items: center;
    background-color: #f3f3f3;
`

const Body = styled.View`
    flex:1;
    background-color: white;
    height: 10px;
`

const Message = styled.View`
    display: flex;
    height: 10%;
    border-bottom-width: 3px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
    flex-direction: row ;
    justify-content: space-between;
`

const messages = [{
    "id": 0,
    "number": 0,
    "date": "10.11.15 09:25",
    "status": "Отказ оплаты поездки"
},
{
    "id": 1,
    "number": 1,
    "date": "10.11.15 09:25",
    "status": "Отмена оплаты пассажиром"
},]

let arrayMessages = messages.map(el => {
    return(<Message>
        <View style={{display:'flex', flexDirection: 'column', width:"50%", justifyContent: "flex-start"}}>
            <Text>id:{el.id}</Text>
            <Text>number:{el.number}</Text>
        </View>

        <View style={{display:'flex', flexDirection: 'column', width:"50%", justifyContent: "flex-start"}}>
            <Text>date:{el.date}</Text>
            <Text>status:{el.status}</Text>
        </View>
    </Message>)
    
})

export const MessageLog =() =>{
    return(
        <MessageLogView>
            <HeaderView>
                <Text>Журнал сообщений</Text>
            </HeaderView>
            <Body>
                {arrayMessages}
            </Body>
        </MessageLogView>
    )
}