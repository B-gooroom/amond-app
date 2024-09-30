import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Indicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 부모 뷰가 화면 전체를 차지하게 함
    justifyContent: "center", // 수직 중앙 정렬
    alignItems: "center", // 수평 중앙 정렬
    backgroundColor: "rgba(255, 255, 255, 0.7)", // 배경색 (반투명 흰색)
  },
});
