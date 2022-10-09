import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard(props) {
  const navigation = useNavigation();

  const {
    id,
    imgUrl,
    title,
    rating,
    address,
    genre,
    short_description,
    dishes,
    lat,
    long,
  } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant", props)}
      className="mr-2 rounded bg-white "
    >
      <Image
        source={{ uri: imgUrl }}
        className="object-cover h-36 w-64 rounded-t"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title || "Test"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon opacity={0.5} color="green" size={20} />
          <Text>
            <Text>{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row space-x-1 items-center">
          <MapPinIcon size={20} color="green" />
          <Text className="text-xs  text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
