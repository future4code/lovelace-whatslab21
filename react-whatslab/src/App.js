import logo from './logo.svg';
import './App.css';
import React from "react";
import { WhatsLab } from './App.style';
//imports of the components
import Nav from "./components/nav/nav"
import ChatBody from './components/chatBody/chatBody';


function App() {
  return (
    <WhatsLab className="Main">
      <Nav/>
        <ChatBody/>
    </WhatsLab>
  );
}

export default App;
