import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text,SafeAreaView,FlatList, ImageBackground, TouchableOpacity,Linking,ActivityIndicator } from 'react-native'
import {StatusBar} from 'expo-status-bar'
import Dividerline from './divider';
import {AdMobBanner} from 'expo-ads-admob'

// import { FlatList } from 'react-native-web';

function Sport({navigation}) {
    const [datas, adddata]=useState([])
    const [isLoading, setLoading] = useState(true);
    const newspaper =require('../assets/newspaper.png')
    useEffect(()=>{
    // api link
        fetch('https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=922c23065f764af8af4b68a48a08d796',{
            method:'GET'
        }).then(response=>response.json()).then((json)=>{
            // lo
            adddata(json.articles);
        }).catch(err=>console.log(err)).finally(()=>setLoading(false))
    })
    // businesslist();

    // console.log(datas);
    // })
    // console.log(businesslist());
    // async function fetchingFromApi() {
    //     await fetch('https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=922c23065f764af8af4b68a48a08d796').then((response)=>{
    //         return response.json()
    //     }).then((json)=>{
    //         const datain = json
    //         updattedata(datain);
    //         console.log(datain)}).catch((error)=>console.log(error))
    // }

    // useEffect(()=>{
        
    //     setInterval(() => {
    //         fetchingFromApi()
    //     },5000);
    // })
    

    return (
        <SafeAreaView style={styles.body}>
            <StatusBar style='auto' />
            <Text style={{fontSize:20, fontWeight:'bold',alignSelf:'center', textDecorationLine:'underline', color:'#007aff'}}>Sport Headline NG</Text>
            <AdMobBanner bannerSize='smartBanner' adUnitID='ca-app-pub-7755189382272714/3523064967' servePersonalizedAds={true} />
            
            {isLoading==true ? <ActivityIndicator size='large' color='#007aff' style={{marginTop:'80%'}} /> : (
            <FlatList data={datas} style={{paddingHorizontal:10, marginBottom:20}}  renderItem={({item})=>{ 
                return(
                <TouchableOpacity style={{elevation:2, borderWidth:0.1, marginVertical:8}} onPress={()=>{
                    Linking.openURL(item.url)
                }}>
                    {/* <Text>hey</Text> */}
                    <ImageBackground source={newspaper} resizeMode='center' style={{height:170, width:'100%', alignSelf:'center'}} ><ImageBackground source={{uri: item.urlToImage}} style={{height:'100%', width:'100%'}} ></ImageBackground></ImageBackground>
                    
                    <View style={{padding:10}}>
                        <View style={styles.toptext}>
                            <Text style={{fontWeight: 'bold',}}>{item.title}</Text>
                            <Text style={{fontSize:14, textAlign:'right'}}>{item.publishedAt}</Text>
                        </View>
                        <Text>{item.content}</Text>
                        
                    </View>
                    
                    {/* <Dividerline height={2} width='80%' color='grey' align='center' /> */}
                </TouchableOpacity>);
            }} keyExtractor={({item}, index) => index.toString()} />
            )}
            {/* <Text>kk</Text> */}
        </SafeAreaView>
    );
}

export default Sport;

const styles = StyleSheet.create({
    body:{
        paddingTop:60,
        paddingHorizontal:5
    },
    toptext:{
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'column'
    }
})