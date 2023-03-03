import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import * as Progress from "react-native-progress";

const PreLoader = ({ setLoading }) => {
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <View className="flex-1 bg-black space-y-2 justify-center items-center">
      <Image source={require("../assets/logo3.png")} />
      <Text className="text-white text-xl font-Ham">
        ...Developers' best friend
      </Text>
      <View className="absolute bottom-28 justify-center items-center">
        <Progress.Circle
          className="justify-center items-center"
          borderWidth={3}
          indeterminate={true}
          width={200}
          color="white"
        />
      </View>
    </View>
  );
};

export default PreLoader;
