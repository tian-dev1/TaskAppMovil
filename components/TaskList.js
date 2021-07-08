import React from "react";
import { View, Text, FlatList } from "react-native";

const TaskList = ({tasks}) => {
  const renderItem = ({ item }) => {
    return <Text>{item.title}</Text>
  }
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id + ''}
      renderItem={ renderItem }
    />
  );
};

export default TaskList;
