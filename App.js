import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import BoardScreen from "./BoardScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  /** 스크린 유지 필요하면 적용하기 */
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   // Splash Screen을 유지하고 3초 후에 숨김
  //   SplashScreen.preventAutoHideAsync();
  //   setTimeout(() => {
  //     setIsReady(true);
  //     SplashScreen.hideAsync(); // Splash Screen을 숨김
  //   }, 4000); // 3초 후에 앱이 준비되었다고 가정
  // }, []);

  // if (!isReady) {
  //   return null; // 준비가 안 되었다면 Splash 화면을 계속 유지
  // }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
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
    </>
  );
};

export default App;
