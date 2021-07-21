import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/94745050_3446681305346050_5132411255008526336_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=n_sktTT78XwAX_bbpDS&_nc_oc=AQlRjmRUHB1IKsZwA7w8xljrzTBAB0GrAPQTJV8HnoEKU9PhCaMojy4iKxWJ-sbjc8Q&_nc_ht=scontent.flim15-2.fna&oh=bcb0252f70587b5386c3433bbd2967b9&oe=60F64049",
      id: 1,
      name: "Amorsito💕",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://scontent.flim15-1.fna.fbcdn.net/v/t31.18172-8/17620418_10212082937844272_8693552876143234694_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=G2WpLrOwC4EAX_UBUUj&_nc_ht=scontent.flim15-1.fna&oh=58e39c6be7a587a37f429e6e98a29fdf&oe=60F6E7C2",
      id: 2,
      name: "Nottingham Miedo F.C⚽",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://historia.nationalgeographic.com.es/medio/2020/11/25/ada-lovelace-portrait_b0909676_550x789.jpg",
      id: 3,
      name: "Lovelace Programação",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/81267890_10218403368128135_8150092858141966336_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7hfibVP_cmYAX_mzaaC&_nc_ht=scontent.flim15-2.fna&oh=4bc34307fa4eabb74dcfd51fec0e737e&oe=60F7068C",
      id: 4,
      name: "Guiller",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://scontent.flim15-1.fna.fbcdn.net/v/t1.18169-9/10277497_594311107372700_1389452508402417769_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CZX9s1mMH1sAX_LpLC3&_nc_ht=scontent.flim15-1.fna&oh=1f218ac3fc58abde7543ecdb2d89d3d5&oe=60F6E105",
      id: 5,
      name: "Tubarão",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://scontent.flim15-1.fna.fbcdn.net/v/t1.6435-9/43465057_10217853250945672_4492940257276198912_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=tIUJDcEYXCsAX9jb4_Y&_nc_ht=scontent.flim15-1.fna&oh=34b141d6b47ff5a269dc4da977ca5c73&oe=60F62403",
      id: 6,
      name: "Agustin Novoa",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/106747273_10223708369315029_8520423374417971741_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CRs9rIX9wzwAX_NG9DV&_nc_ht=scontent.flim15-2.fna&oh=a7c3f53ee20d0f8b8704b64f787113ce&oe=60F66AD7",
      id: 7,
      name: "Sofía",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/71890982_10217954398546087_1866874738559680512_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=DCsOFZhocfEAX_aKYJe&tn=vYN0omUls1jjZg62&_nc_ht=scontent.flim15-2.fna&oh=83152ac467d9a88300bb30771a8ef446&oe=60F7E828",
      id: 8,
      name: "Eduardo",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/43030763_10217309736832400_3659663559006093312_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=RnJnD21W9T8AX-mbR8c&_nc_ht=scontent.flim15-2.fna&oh=951a02933929d15f03b13a83b2b8b599&oe=60F77295",
      id: 9,
      name: "Daniel YIL",
      active: false,
      isOnline: true,
    },
    {
      image: "https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/157518058_4111884972168795_3250261492623550240_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=wpquwffUFZoAX9a0Nw0&_nc_ht=scontent.flim15-2.fna&oh=b25342a23e72b426a217ac0c7c0d2645&oe=60F7AD23",
      id: 10,
      name: "Juan Bello",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
