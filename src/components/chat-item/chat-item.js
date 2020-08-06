import React, { Component } from 'react';
import {messages_job, messages_common} from '../../messages.js';
import './chat-item.css'

export default class ChatItem extends Component {
    constructor(){
        super();
        this.state = {
          text : '',
          username : 'Иван Васильев',
          id : 0,
          id_user : 1,
          jobChat : true,
          servicePanel : false,
          prevId : 0,
          edit: 'false'
        }
        this.updateText = this.updateText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createMessageList = this.createMessageList.bind(this);
        this.changeTypeChat = this.changeTypeChat.bind(this);
        this.getServicePanel = this.getServicePanel.bind(this);
        this.editMessage = this.editMessage.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        this.cancelSubmit = this.cancelSubmit.bind(this);
    }

    componentDidMount(){
        const dataType = this.state.jobChat === true ? 'messages-job' : 'messages-common';

        if(JSON.parse(localStorage.getItem(dataType) === null)) {
            localStorage.setItem("messages-job", JSON.stringify(messages_job));
            localStorage.setItem("messages-common", JSON.stringify(messages_common));
            this.setState({id : Math.floor(9999999999999 + Math.random() * (1000000000000 - 9999999999999))})
        } 
    }

    updateText(event){
        this.setState({text : event.target.value})
    }

    handleSubmit(){
        let messages;
        const dataType = this.state.jobChat === true ? 'messages-job' : 'messages-common';
        const date = new Date();
        const dateNow = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        if(this.state.text.trim() === ""){
            return 0;
        }

        if(this.state.edit === true){
            messages = JSON.parse(localStorage.getItem(dataType));
            for(let i = 0; i < messages.length; i++) {
                if(Number(messages[i].id) ===  Number(this.state.prevId)){
                    messages[i].text = this.state.text;
                    localStorage.setItem(dataType, JSON.stringify(messages));
                    this.setState({text : '', servicePanel : false, prevId : 0, edit : false})
                    break;
                }
            }
        } else {
            if(JSON.parse(localStorage.getItem(dataType) != null)) {
                messages = JSON.parse(localStorage.getItem(dataType));
                messages.push({text: this.state.text, username : this.state.username, date : dateNow, id : this.state.id,  id_user : this.state.id_user })
            } 
            localStorage.setItem(dataType, JSON.stringify(messages));
            this.setState({id :  Math.floor(9999999999999 + Math.random() * (1000000000000 - 9999999999999)), text : ''});
        }
    }
    
    createMessageList() {
        let elements;
        const dataType = this.state.jobChat === true ? 'messages-job' :  'messages-common';
        if (JSON.parse(localStorage.getItem(dataType) != null)) {
            elements = JSON.parse(localStorage.getItem(dataType)).map((item) => {
                let activeClass = "";
                const idMess = {'id' : item.id};
                if (Number(this.state.prevId) === Number(item.id) && this.state.servicePanel === true)
                    activeClass = Number(this.state.prevId) === Number(item.id) ? " active-message" : "";
                const typeMessage = Number(item.id_user) === 1 ?  "chat-box__outgoing-message" : "chat-box__incoming-message";
                return(
                    <div {...idMess} className={typeMessage + activeClass} key = {item.id} onClick={this.getServicePanel}>
                        <div {...idMess} className="chat-box__text-message">{item.text}</div>
                        <div className="chat-box__name">{item.username}</div>
                        <div className="chat-box__data-message">{item.date}</div>
                    </div>
                ) 

            });   
        }
        return elements;
    }
    getServicePanel(event){
        if(event.target.id !== ""){
            const dataType = this.state.jobChat === true ? 'messages-job' : 'messages-common';
            const messages = JSON.parse(localStorage.getItem(dataType));

            messages.map((item) => {
                //console.log(Number(item.id_user) + " " + Number(this.state.id_user) + "-" + this.state.prevId + " " + event.target.id)
                if(item.id_user === this.state.id_user && this.state.prevId === event.target.id){
                    //this.setState({servicePanel : !this.state.servicePanel});

                }else if(item.id_user === this.state.id_user && this.state.prevId !== event.target.id) {
                    console.log(item.id_user + " " + this.state.id_user + "-" + this.state.prevId + " " + event.target.id)
                    this.setState({servicePanel : true, prevId : event.target.id});
                }
            })
        }
    }


    changeTypeChat(event) {
        if(event.target.id === "1") {
            this.setState({jobChat : true});
        } else {
            this.setState({jobChat : false});
        }
    }

    editMessage() {
        let elements;
        const dataType = this.state.jobChat === true ? 'messages-job' :  'messages-common';
        let messages = JSON.parse(localStorage.getItem(dataType));
        if (messages !== null) {
            elements = messages.map((item) => {
                if( Number(item.id) ===  Number(this.state.prevId)) {
                    this.setState({text : item.text, edit : true});
                }
            });   
        }
        return elements
    }

    cancelSubmit(){
        this.setState({text : '', prevId : 0, servicePanel : false, edit : false});
    }

    deleteMessage() {
        const dataType = this.state.jobChat === true ? 'messages-job' : 'messages-common';
        const messages = JSON.parse(localStorage.getItem(dataType));
        for(let i = 0; i < messages.length; i++) {
            if(Number(messages[i].id) ===  Number(this.state.prevId)){
                messages.splice(i, 1);
                localStorage.setItem(dataType, JSON.stringify(messages));
                this.setState({text : '', servicePanel : false, prevId : 0, edit : false})
                break;
            }
        }
    }

    render() {
            let leftTypeChat = "chat-section__left btn";
            let rightTypeChat = "chat-section__right btn"
            const cancelBtn = this.state.edit === true ? {display: 'block'} : { display: 'none'};
            const servicePanelStyle = this.state.servicePanel === true ? {display: 'flex'} : { display: 'none'};

            if(this.state.jobChat === true) {
                leftTypeChat += " section-active";
            } else {
                rightTypeChat += " section-active";
            }

        return(
            <div className="chat-item">
                <div className="chat-section">
                    <input type="button" chat='job' id='1' className={leftTypeChat} value="Рабочий чат" onClick={this.changeTypeChat} />
                    <input type="button" chat='common' id='2' className={rightTypeChat} value="Общий чат" onClick={this.changeTypeChat}/>
                </div>
                <div className="chat-section service" style= {servicePanelStyle}>
                    <input type="button" className="chat-section__left btn service" value="Редактировать" onClick={this.editMessage}/>
                    <input type="button" className="chat-section__right btn service" value="Удалить" onClick={this.deleteMessage}/>
                </div>
                <div className="chat-box">
                    {this.createMessageList()}
                </div>
                <div className="input-message">
                    <input type="button" className="input-message_btn btn" style={cancelBtn} onClick={this.cancelSubmit}  value="Отменить" />
                    <textarea className="input-message__textarea" value={this.state.text} onChange={this.updateText}/>
                    <input type="button" className="input-message_btn btn" onClick={this.handleSubmit}  
                        value={this.state.edit === true ? "Сохранить" : "Отправить"} />
                </div>
            </div>
        );
    }
}