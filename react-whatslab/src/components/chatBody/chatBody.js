import React, { Component } from 'react'
import { ChatBody } from './chatBody.style';
//Chats content
import ChatList from "../chatList/ChatList"
import ChatContent from "../chatContent/ChatContent"



export default class chatBody extends Component {
    render() {
        return (
            <ChatBody className="main__chatbody">
                <ChatList/>
                <ChatContent/>
            </ChatBody>
        )
    }
}
