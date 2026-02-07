/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/rootNavigator';
import { ThemeContext } from './src/components/themeContext';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
function App() {
    const isDarkMode = useColorScheme() === 'dark';
    const [dark, setDark] = React.useState(isDarkMode);

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
                <ThemeContext.Provider value={{ dark, toggleTheme: () => { setDark(!dark) } }}>
                    <RootNavigator />
                </ThemeContext.Provider>
            </SafeAreaProvider>
        </Provider>
    );
}

export default App;
