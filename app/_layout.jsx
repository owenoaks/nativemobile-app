import { StyleSheet, Text, View } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />;
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />;
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />;
      {/*<Stack.Screen name="(/search/[query])" options={{ headerShown: false }} /> */}
      ;
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});

{
  /*Notes:
//UseEffect vit allows us to perform some actions while the PAGE or
// in this case the SCREEN loading

//Lets create a useEffect hook provided with a callback function and
//a Dependency Array, and w/in dependency Array, [fonts loaded] meaning
//recall this function whenever [ fonts loaded ] changed! or whenever theres an Error

// And IF theres an Error, throw that Error

//and if (Fonts Loaded ) then we want to call something known as a SplashScreen, anf this SplashScreen is coming from Expo Router
*/
}
