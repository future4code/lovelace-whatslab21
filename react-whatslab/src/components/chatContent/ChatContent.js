import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/56764418_10218550077678726_8527211954761105408_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=t4e5WOoyyz0AX9NY2XM&_nc_ht=scontent.flim15-2.fna&oh=5cacb915a0ca1a9ed5b2d7979de0ea9c&oe=60F755D0",
      type: "",
      msg: "Hi Guiller, How are you?",
    },
    {
      key: 2,
      image:
        "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/81267890_10218403368128135_8150092858141966336_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7hfibVP_cmYAX_mzaaC&_nc_ht=scontent.flim15-2.fna&oh=4bc34307fa4eabb74dcfd51fec0e737e&oe=60F7068C",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/81267890_10218403368128135_8150092858141966336_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7hfibVP_cmYAX_mzaaC&_nc_ht=scontent.flim15-2.fna&oh=4bc34307fa4eabb74dcfd51fec0e737e&oe=60F7068C",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/56764418_10218550077678726_8527211954761105408_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=t4e5WOoyyz0AX9NY2XM&_nc_ht=scontent.flim15-2.fna&oh=5cacb915a0ca1a9ed5b2d7979de0ea9c&oe=60F755D0",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/81267890_10218403368128135_8150092858141966336_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7hfibVP_cmYAX_mzaaC&_nc_ht=scontent.flim15-2.fna&oh=4bc34307fa4eabb74dcfd51fec0e737e&oe=60F7068C",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/56764418_10218550077678726_8527211954761105408_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=t4e5WOoyyz0AX9NY2XM&_nc_ht=scontent.flim15-2.fna&oh=5cacb915a0ca1a9ed5b2d7979de0ea9c&oe=60F755D0",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/81267890_10218403368128135_8150092858141966336_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7hfibVP_cmYAX_mzaaC&_nc_ht=scontent.flim15-2.fna&oh=4bc34307fa4eabb74dcfd51fec0e737e&oe=60F7068C",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/56764418_10218550077678726_8527211954761105408_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=t4e5WOoyyz0AX9NY2XM&_nc_ht=scontent.flim15-2.fna&oh=5cacb915a0ca1a9ed5b2d7979de0ea9c&oe=60F755D0",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }

  

  addChat = () => {
    if (this.state.msg != "") {
        this.chatItms.push({
          key: 1,
          type: "",
          msg: this.state.msg,
          image:
            "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/56764418_10218550077678726_8527211954761105408_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=t4e5WOoyyz0AX9NY2XM&_nc_ht=scontent.flim15-2.fna&oh=5cacb915a0ca1a9ed5b2d7979de0ea9c&oe=60F755D0",
        });
        this.setState({ chat: [...this.chatItms] });    
        this.setState({ msg: "" });        
      };    
      
  };
  
  


  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/81267890_10218403368128135_8150092858141966336_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7hfibVP_cmYAX_mzaaC&_nc_ht=scontent.flim15-2.fna&oh=4bc34307fa4eabb74dcfd51fec0e737e&oe=60F7068C"
              />
              <p>Guiller</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn" onClick={this.addChat}>
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
