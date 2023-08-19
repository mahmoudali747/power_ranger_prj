import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold : require('../assets/fonts/DmSans-Bold.ttf'),
        DMMedium : require('../assets/fonts/DmSans-Medium.ttf'),
        DMRegular : require('../assets/fonts/DmSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback (async () =>{
        if(fontsLoaded){
            console.log ("haaa") ;
            await SplashScreen.hideAsync();
        }
    } , [fontsLoaded])
    if (!fontsLoaded) return null;

    return <Stack  ONLayout={onLayoutRootView}/> ;

}

export default Layout ;