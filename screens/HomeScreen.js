import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row items-center space-x-2 p-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-8 w-8 rounded-full bg-gray-300"
        />
        <View className="flex-1">
          <Text className="text-gray-500 text-xs">Delivery Now !</Text>
          <Text className="font-bold text-lg">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="p-2 flex-row items-center space-x-3">
        <View className="flex-row bg-gray-200 p-1 rounded-md space-x-2 flex-1">
          <MagnifyingGlassIcon size={35} color="#00CCBB" />
          <TextInput
            value={searchInput}
            onChangeText={setSearchInput}
            placeholder="Restaurant and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={30} color="#00CCBB" />
      </View>
      <ScrollView
        vertical
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        <FeaturedRow title="Featured" description="This is Featured Row" />
        <FeaturedRow
          title="Tasty Discounts"
          description="This is Featured Row"
        />
        <FeaturedRow
          title="Offers near you"
          description="This is Featured Row"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
