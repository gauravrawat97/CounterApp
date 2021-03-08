import React,{useState,useEffect} from 'react';
import { SafeAreaView,Image,View, FlatList, StyleSheet, Text, StatusBar, RefreshControl,ActivityIndicator } from 'react-native';


const FlatList_Fetch = () => {
  
    const [data,setData]=useState([])
    const [lastPage,setLastPage] = useState(false)
    const [page,setPage]=useState(1)
    const [load,setLoading]=useState(false)
    const [refresh,setRefresh] = useState(false)
    useEffect(()=>{ 
      fetch_content()
    },[page])

    const fetch_content =async ()=>{
      setLoading(true)
      const response = await fetch(`https://reqres.in/api/users/?page=${page}`)
      const content = await response.json()   
      setData([...data,...content.data])
      setLoading(false)

    }


    const reset_content =async ()=>{
     
      setRefresh(true)
      setData([])
      setPage(1)
      setRefresh(false)
      }


    const renderItem = ({item}) =>
    { 
    return (<Item {...item} />
    );
    }

    

  const Item = ({first_name,last_name,email,avatar}) =>
  {
  return(
    <View style={styles.contentContainer}>
      <View style={styles.imageContainer}>
      <Image source={{uri:avatar}} style={styles.img}/>
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.title}>{first_name} {last_name}</Text>
      <Text style={styles.title}>{email}</Text>

      </View>
  </View>
);
}

const Loader = ()=>
load&&<View>
<ActivityIndicator size="large" color="#ff1a1a" />
</View>


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => (item.id).toString()}
        refreshControl={
           <RefreshControl
           refreshing={refresh}
           onRefresh={() => {
            reset_content()
           }}
           />
        }
        onEndReached={()=>{
          if(page<=1)
          setPage(prevPage=>prevPage+1)
        }}
        ListFooterComponent={<Loader/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  contentContainer: {
    backgroundColor: '#ffe6e6',
    paddingVertical:20,
    marginVertical: 30,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:10,
    marginHorizontal:20
   
  },
  imageContainer:{
    
    left:-10,
    top:-50,
    
  },
  textContainer:{
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  title: {
    fontSize: 22,
    fontWeight:'300',
    alignSelf:'flex-start'
  },
  img:{
    width:80,
    height:80,
    borderRadius:50,
    borderColor:'black',
    borderWidth:2
  }
});

export default FlatList_Fetch;