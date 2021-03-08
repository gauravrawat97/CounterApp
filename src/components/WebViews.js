import React,{useState} from 'react';
import { SafeAreaView,ActivityIndicator, View, FlatList, StyleSheet, Text, StatusBar, RefreshControl } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViews = () => {
  
    const [loaded,setLoading]=useState(false)



  return (
    <SafeAreaView style={styles.container}>
       {!loaded &&<View style={styles.horizontal}><ActivityIndicator size="large" color="red" /></View>}

        <WebView
        source={{ uri: 'https://gauravrawat97.github.io/'}}
        style={styles.web}
        onLoadEnd={()=>setLoading(true)}
      />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  
  },
  horizontal: {
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    padding: 10
  },
  web:{
    marginTop: 20,
    marginHorizontal:30
  }
  
});

export default WebViews;