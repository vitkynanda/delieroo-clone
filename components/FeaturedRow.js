import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ title, description }) {
  return (
    <View className="p-2">
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-bold">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500">{description}</Text>
      <ScrollView horizontal>
        {Array(10)
          .fill()
          .map((_, index) => (
            <RestaurantCard
              key={index}
              id={index}
              imgUrl="https://links.papareact.com/gn7"
              title="Sumo Sushi"
              rating={5}
              address="Stree View South 12"
              genre="Japanese"
              short_description="This is the most delicous sushi in the world, you must try it."
              dishes={[]}
              lat={10}
              long={20}
            />
          ))}
      </ScrollView>
    </View>
  );
}
