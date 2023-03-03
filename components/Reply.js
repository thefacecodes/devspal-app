import { View, Text, Image } from "react-native";
import React from "react";
import TypeWriter from "react-native-typewriter";

const Reply = ({ replyMessage }) => {
  return (
    <View className="flex-row items-center mb-2 p-2 space-x-2 bg-lightBlack">
      <Image
        source={require("../assets/devspal.png")}
        className="h-[30px] w-[30px] object-contain self-start"
        alt=""
      />
      <View className="px-2 flex-1">
        <Text
          className={
            replyMessage === ("Something went wrong!" || "Error")
              ? "text-red-500 whitespace-pre-wrap font-Ham"
              : "whitespace-pre-wrap text-white font-Ham"
          }
        >
          {replyMessage ? (
            <TypeWriter typing={1} maxDelay={10}>
              {replyMessage.trim()}
            </TypeWriter>
          ) : (
            <TypeWriter typing={1} maxDelay={2}>
              ...
            </TypeWriter>
          )}
        </Text>
      </View>
    </View>
  );
};

export default Reply;
