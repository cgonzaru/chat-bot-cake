import React from "react";
import ChatBot from "react-simple-chatbot";

function CustomChatbot(props) {
	const config = {
		width: "300px",
		height: "400px",
		floating: true
	};

	const { result } = props;
	const steps = [
		{
			id: "Greet",
			message: "Hello, Welcome to our shop",
			trigger: "Ask Name"
		},
		{
			id: "Ask Name",
			message: "Please type your name?",
			trigger: "Waiting user input for name"
		},
		{
			id: "Waiting user input for name",
			user: true,
			trigger: "Tip of the day"
		},
		{
			id: "Tip of the day",
			message: 'Hi {previousValue}, Our tip of the day is: ' + result,
			trigger: "Done"
		},
		{
			id: "Done",
			message: "Have a great day !!",
			end: true
		}
	];
	return <ChatBot steps={steps} {...config} />;
}

export default CustomChatbot;