import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import SentMessage from "../components/SentMessage";
import Reply from "../components/Reply";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function DashboardScreen() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  //   const { dispatch } = useContext(ContextSource);
  const [loading, setLoading] = useState(true);

  const getReply = () => {
    const newConversation = [...conversation, { sent: message }];
    setLoading(true);
    setConversation(newConversation);
    switch (message.toLowerCase()) {
      case "hello":
        setLoading(false);
        const anotherConvo = [
          ...newConversation,
          { reply: "Hi, how may I help you ?" },
        ];
        setConversation(anotherConvo);
        break;
      case "hi":
        setLoading(false);
        const newConvo = [
          ...newConversation,
          { reply: "Hello, need my help ?" },
        ];
        setConversation(newConvo);
        break;
      case "who are you":
        setLoading(false);
        const newConvo2 = [
          ...newConversation,
          {
            reply: "I am DevsPal - a chatbot programmed by Ezekiel A. Tobiloba",
          },
        ];
        setConversation(newConvo2);
        break;
      case "who are you?":
        setLoading(false);
        const newConvo3 = [
          ...newConversation,
          {
            reply: "I am DevsPal - a chatbot programmed by Ezekiel A. Tobiloba",
          },
        ];
        setConversation(newConvo3);
        break;
      case "what can you do":
        setLoading(false);
        const newConvo4 = [
          ...newConversation,
          {
            reply:
              "I can interact and give accurate responses to your queries.",
          },
        ];
        setConversation(newConvo4);
        break;
      case "what can you do?":
        setLoading(false);
        const newConvo5 = [
          ...newConversation,
          {
            reply:
              "I can interact and give accurate responses to your queries.",
          },
        ];
        setConversation(newConvo5);
        break;
      case "what are you?":
        setLoading(false);
        const newConvo6 = [
          ...newConversation,
          {
            reply: "A chatbot.",
          },
        ];
        setConversation(newConvo6);
        break;
      case "what are you":
        setLoading(false);
        const newConvo7 = [
          ...newConversation,
          {
            reply: "A chatbot.",
          },
        ];
        setConversation(newConvo7);
        break;
      case "who made you?":
        setLoading(false);
        const newConvo8 = [
          ...newConversation,
          {
            reply:
              "This chatbot was created by Ezekiel A. Tobiloba - A Frontend Engineer",
          },
        ];
        setConversation(newConvo8);
        break;
      case "who made you":
        setLoading(false);
        const newConvo9 = [
          ...newConversation,
          {
            reply:
              "This chatbot was created by Ezekiel A. Tobiloba - A Frontend Engineer",
          },
        ];
        setConversation(newConvo9);
        break;
      case "what does devspal mean":
        setLoading(false);
        const newConvo10 = [
          ...newConversation,
          {
            reply:
              "Only Ezekiel knows but I presume it means a close friend of Developers. - which is or was the purpose of this bot",
          },
        ];
        setConversation(newConvo10);
        break;
      case "what does devspal mean?":
        setLoading(false);
        const newConvo11 = [
          ...newConversation,
          {
            reply:
              "Only Ezekiel knows but I presume it means a close friend of Developers. - which is or was the purpose of this bot",
          },
        ];
        setConversation(newConvo11);
        break;
      case "stop":
        setLoading(false);
        const newConvo12 = [
          ...newConversation,
          {
            reply: "What should I stop ?",
          },
        ];
        setConversation(newConvo12);
        break;
      case "start":
        setLoading(false);
        const newConvo13 = [
          ...newConversation,
          {
            reply: "What should I start ?",
          },
        ];
        setConversation(newConvo13);
        break;
      case "continue":
        setLoading(false);
        const newConvo14 = [
          ...newConversation,
          {
            reply: "What do you want me to continue ?",
          },
        ];
        setConversation(newConvo14);
        break;
      case "rest":
        setLoading(false);
        const newConvo15 = [
          ...newConversation,
          {
            reply: "NO",
          },
        ];
        setConversation(newConvo15);
        break;
      default:
        fetch("https://devspal-server.onrender.com/all", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: message,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            setLoading(false);
            const anotherConvo = [
              ...newConversation,
              { reply: data.bot ? data.bot : data.error.name },
            ];
            setConversation(anotherConvo);
          })
          .catch((error) => {
            setLoading(false);
            setConversation([
              ...newConversation,
              { reply: "Something went wrong!" },
            ]);
          });
    }
    setMessage("");
  };

  const [options, showOptions] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-row justify-between bg-[#5DCB89] h-[100px] fixed top-0 left-0 right-0 items-end p-4">
        <Text className="text-[24px] text-white font-Ham">Help at hand</Text>
        {!options ? (
          <TouchableOpacity
            onPress={() => showOptions(true)}
            className="bg-[#5DCB89] text-black border-2 h-[40px] w-[40px] flex items-center justify-center rounded"
          >
            <Text className="text-black text-[24px]">
              <Ionicons name="list" size={20} color="black" />
            </Text>
          </TouchableOpacity>
        ) : (
          <View className="bg-white px-4 py-2 rounded ">
            <TouchableOpacity
              onPress={() => {
                setConversation([]);
                showOptions(false);
              }}
            >
              <Text className="font-Ham text-lg">Clear Chats</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <ScrollView className="flex-1 p-4">
        {conversation.map((chat, index) => (
          <View key={index}>
            {chat.sent && (
              <SentMessage key={new Date().getTime()} sentMessage={chat.sent} />
            )}
            {index >= conversation.length - 1 &&
              loading &&
              chat.sent &&
              !chat.reply && <Reply replyMessage="" />}
            {chat.reply && <Reply replyMessage={chat.reply} />}
          </View>
        ))}
      </ScrollView>
      <View className="p-4 w-full bg-[#5DCB89]">
        <View className="flex-row space-x-3">
          <TextInput
            value={message}
            onChangeText={(e) => setMessage(e)}
            placeholder="Write something.."
            className="p-2 flex-1 font-Ham h-[40px] bg-white text-black"
          />
          <TouchableOpacity
            onPress={getReply}
            disabled={message.length < 1}
            className="w-[40px] border-2 flex justify-center outline-none items-center rounded text-[22px] bg-[#5DCB89] text-black"
          >
            <Text className="text-black text-[24px]">
              <Ionicons name="ios-send" size={20} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
