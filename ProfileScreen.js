import React, { useRef } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function ProfileScreen() {
  const webviewRef = useRef(null);

  const onWebViewLoad = () => {
    // 웹뷰 로드 후 웹 탭바를 숨기기 위해 메시지 전송
    webviewRef.current.postMessage("native");
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webviewRef}
        onLoad={onWebViewLoad}
        // source={{ uri: "https://amond.kr/Profile" }}
        source={{ uri: "http://192.168.35.253:3000/Profile" }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  webview: {
    flex: 1,
  },
});
