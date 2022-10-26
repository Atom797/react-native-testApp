import { Text, View, } from 'react-native';
import styled from 'styled-components/native'

import { useState, useEffect } from "react"
import { FlatList } from 'react-native-web';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesFetch } from '../redux/messagesReducer'
import { Preloader } from './common/Preloader/Preloader';

const MessageLogView = styled.View`
    height: 40%;
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

const Body = styled.FlatList`
    flex:1;
    background-color: white;
    height: 10px;
`

const MessageView = styled.View`
    display: flex;
    height: 55px;
    border-bottom-width: 3px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
    flex-direction: row ;
    justify-content: space-between;
`



export const MessageLog = () => {

    const onScrolltoEnd = (e) => {
        if (e.target.scrollHeight === Math.round(e.target.scrollTop + e.target.clientHeight)) {
            if (!error) setLoading(true);
        }
    }

    let messageArray = useSelector(state => state.messageReducer.messageArray)

    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                dispatch(getMessagesFetch(currentPage)).then((res) => {
                    if (res !== "Error") {
                        setLoading(false)
                        setCurrentPage(currentPage + 1);
                    } else {
                        setLoading(false)
                    }
                });
            }, 3000)
        }
    }, [isLoading])



    return (
        <MessageLogView>
            <HeaderView>
                <Text>Журнал сообщений</Text>
            </HeaderView>
            {isLoading ? <Preloader /> :
                <Body data={messageArray} renderItem={({ item }) => <Message id={item.id} date={item.date} status={item.status} number={item.number} />} onScroll={onScrolltoEnd} />
            }
        </MessageLogView>
    )
}

const Message = (props) => {
    return (
        <MessageView>
            <View style={{ display: 'flex', flexDirection: 'column', width: "50%", justifyContent: "flex-start" }}>
                <Text>id:{props.id}</Text>
                <Text>number:{props.number}</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', width: "50%", justifyContent: "flex-start" }}>
                <Text>date:{props.date}</Text>
                <Text>status:{props.status}</Text>
            </View>
        </MessageView>
    )
}