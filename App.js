import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { ActivityIndicator, Platform, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const Tab = createBottomTabNavigator();

// WebView를 사용하는 HomeScreen
const HomeScreen = () => {
  const webviewRef = useRef(null);
  const [isWebViewLoading, setIsWebViewLoading] = useState(true); // 로딩 상태 관리

  const onWebViewLoad = () => {
    setIsWebViewLoading(false);
    // 웹뷰 로드 후 웹 탭바를 숨기기 위해 메시지 전송
    if (Platform.OS === "ios" || Platform.OS === "android") {
      webviewRef.current.postMessage("native");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* ActivityIndicator로 로딩 중 논의 필요 */}
      {isWebViewLoading && <ActivityIndicator size="small" color="#B5582A" />}
      <WebView
        ref={webviewRef}
        source={{ uri: "http://192.168.35.253:3000/QnA" }}
        onLoadEnd={onWebViewLoad}
        onLoadStart={() => setIsWebViewLoading(true)} // 로드 시작 시 로딩 표시
        javaScriptEnabled={true}
        onMessage={(event) => {
          const message = event.nativeEvent.data;
          console.log("Message received from web:", message);
        }}
        style={{ display: isWebViewLoading ? "none" : "flex" }} // 로딩 중에는 WebView 숨김
      />
    </SafeAreaView>
  );
};

// 다른 화면도 같은 구조로 작성 가능
const BoardScreen = () => {
  const webviewRef = useRef(null);
  const [isWebViewLoading, setIsWebViewLoading] = useState(true); // 로딩 상태 관리

  const onWebViewLoad = () => {
    setIsWebViewLoading(false);
    // 웹뷰 로드 후 웹 탭바를 숨기기 위해 메시지 전송
    if (Platform.OS === "ios" || Platform.OS === "android") {
      webviewRef.current.postMessage("native");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* ActivityIndicator로 로딩 중 논의 필요 */}
      {isWebViewLoading && <ActivityIndicator size="small" color="#B5582A" />}
      <WebView
        ref={webviewRef}
        source={{ uri: "http://192.168.35.253:3000/Board" }}
        onLoadEnd={onWebViewLoad}
        onLoadStart={() => setIsWebViewLoading(true)} // 로드 시작 시 로딩 표시
        javaScriptEnabled={true}
        onMessage={(event) => {
          const message = event.nativeEvent.data;
          console.log("Message received from web:", message);
        }}
        style={{ display: isWebViewLoading ? "none" : "flex" }} // 로딩 중에는 WebView 숨김
      />
    </SafeAreaView>
  );
};

const ProfileScreen = () => {
  const webviewRef = useRef(null);
  const [isWebViewLoading, setIsWebViewLoading] = useState(true); // 로딩 상태 관리

  const onWebViewLoad = () => {
    setIsWebViewLoading(false);
    // 웹뷰 로드 후 웹 탭바를 숨기기 위해 메시지 전송
    if (Platform.OS === "ios" || Platform.OS === "android") {
      webviewRef.current.postMessage("native");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* ActivityIndicator로 로딩 중 논의 필요 */}
      {isWebViewLoading && <ActivityIndicator size="small" color="#B5582A" />}
      <WebView
        ref={webviewRef}
        source={{ uri: "http://192.168.35.253:3000/Profile" }}
        onLoadEnd={onWebViewLoad}
        onLoadStart={() => setIsWebViewLoading(true)} // 로드 시작 시 로딩 표시
        javaScriptEnabled={true}
        onMessage={(event) => {
          const message = event.nativeEvent.data;
          console.log("Message received from web:", message);
        }}
        style={{ display: isWebViewLoading ? "none" : "flex" }} // 로딩 중에는 WebView 숨김
      />
    </SafeAreaView>
  );
};

// 네비게이션과 탭 바 구성
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          headerBackground: "#ffffff",
          tabBarStyle: {
            backgroundColor: "#ffffff", // 탭 바의 배경색 설정
            borderTopColor: "#9e9e9e", // 탭 바 위의 경계선 색
          },
          tabBarActiveTintColor: "#212121", // 활성화된 탭 아이콘 색상
          tabBarInactiveTintColor: "#9e9e9e", // 비활성화된 탭 아이콘 색상
        }}
      >
        <Tab.Screen name="질문하다" component={HomeScreen} />
        <Tab.Screen name="소통하다" component={BoardScreen} />
        <Tab.Screen name="소개하다" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
