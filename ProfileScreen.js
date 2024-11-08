import React, { useRef, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import Indicator from "./Indicator";

export default function ProfileScreen() {
  const webviewRef = useRef(null);
  const [isWebViewLoading, setIsWebViewLoading] = useState(true); // 로딩 상태 관리

  const onWebViewLoad = () => {
    setIsWebViewLoading(false);
    // 웹뷰 로드 후 웹 탭바를 숨기기 위해 메시지 전송
    webviewRef.current.postMessage("native");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ActivityIndicator로 로딩 중 논의 필요 */}
      {isWebViewLoading && <Indicator />}
      <WebView
        ref={webviewRef}
        onLoadEnd={onWebViewLoad}
        onLoadStart={() => setIsWebViewLoading(true)} // 로드 시작 시 로딩 표시
        javaScriptEnabled={true}
        source={{ uri: "https://www.amond.kr/profile" }}
        // source={{ uri: "http://192.168.35.253:3000/profile" }}
        onMessage={(event) => {
          const message = event.nativeEvent.data;
          // console.log("Message received from web:", message);
        }}
        style={isWebViewLoading ? { display: "none" } : { flex: 1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
