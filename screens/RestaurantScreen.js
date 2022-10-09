import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import {
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";

export default function RestaurantScreen() {
  const {
    params: { imgUrl, title, short_description, rating, genre, address },
  } = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    // <SafeAreaView className="bg-white">
    <ScrollView>
      <View className="relative">
        <Image source={{ uri: imgUrl }} className="w-full h-60 bg-gray-300" />
        <TouchableOpacity
          className="bg-white rounded-full p-2 absolute top-10 left-2"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={18} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white p-3">
        <Text className="font-bold text-xl">{title}</Text>
        <View className="flex-row items-center space-x-2 py-1">
          <View className="flex-row items-center space-x-1">
            <StarIcon size={20} color="green" opacity={0.5} />
            <Text className="text-xs text-gray-400">
              {rating} . {genre}
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <MapPinIcon size={20} color="green" opacity={0.4} />
            <Text className="text-xs text-gray-400">Nearby . {address}</Text>
          </View>
        </View>
        <Text className="text-xs text-gray-400 py-1">{short_description}</Text>
        <TouchableOpacity className="border-t border-gray-200 flex-row items-center pt-2 space-x-2 mt-2">
          <QuestionMarkCircleIcon size={20} color="green" opacity={0.3} />
          <Text className="font-bold text-xs flex-1">
            Have a food allergy ?
          </Text>
          <ChevronRightIcon color="green" opacity={0.5} size={20} />
        </TouchableOpacity>
      </View>
      <View className="bg-gray-100 px-2 py-3">
        <Text className="font-bold text-lg">Menu</Text>
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
}
