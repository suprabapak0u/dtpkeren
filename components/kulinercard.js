
import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const KulinerCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/kulinernew/[kuliner]",
        params: { kuliner: item.id },
      }}
    >
      <View className="p-4 m-2 bg-red-400 rounded-xl">
        <Image
          className="rounded-xl"
          source={{
            uri: item.gambar,
            height: 150,
            width: 150,
          }}
        />
        <Text className="text-center font-bold text-white">{item.nama}</Text>
        <Text className="text-center text-white">{item.deskripsi}</Text>
      </View>
    </Link>
  );
};

export default KulinerCard;
