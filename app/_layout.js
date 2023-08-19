import { Stack } from "expo-router";
q

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold : require('../assets/fonts/DmSans-Bold.ttf'),
        DMMedium : require('../assets/fonts/DmSans-Medium.ttf'),
        DMRegular : require('../assets/fonts/DmSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback (async () =>{
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    } , [fontsLoaded])
    if (!fontsLoaded) return null;

    return <Stack  onLayout={onLayoutRootView}/> ;
}

export default Layout ;