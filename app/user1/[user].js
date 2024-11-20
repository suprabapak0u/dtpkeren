import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const User = () => {
  const { user } = useLocalSearchParams();
  return (
    <View>
      <Text>{user}</Text>
    </View>
  );
};

export default User;