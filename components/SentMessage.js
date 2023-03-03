import { View, Text, Image } from "react-native";
import React from "react";

const SentMessage = ({ sentMessage }) => {
  // const { state } = useContext(ContextSource);
  return (
    <View className="bg-[#5DCB89] flex-row space-x-2 p-2 items-center mb-2">
      <Image
        source={require("../assets/avatar.png")}
        className="border-2 border-white h-[30px] w-[30px] self-start rounded-full"
        alt=""
      />
      <Text className="whitespace-pre-wrap font-Ham text-white">
        {sentMessage}
      </Text>
    </View>
  );
};

export default SentMessage;
