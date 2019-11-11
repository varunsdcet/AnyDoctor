import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Alert,
    TouchableOpacity,
    TextInput,
    Image,
    ImageBackground,
    Linking,
    FlatList,
    Dimensions,



} from 'react-native';


import React, {Component} from 'react';
import Button from 'react-native-button';
const GLOBAL = require('./Global');
class AppointmentDetail extends React.Component {
    render() {
        return(
            <ScrollView>
                <SafeAreaView style={{width : Dimensions.get('window').width,height : Dimensions.get('window').height}}>
                    <View style={{width : Dimensions.get('window').width,height : Dimensions.get('window').height,backgroundColor:'white',flexDirection:'column'}}>

                        <View style={{flexDirection:'row',marginTop:10,marginLeft:18,justifyContent:'space-between'}}>

                            <Text style={{fontSize:17,fontFamily:'Poppins-Regular',color:'#0000004D'}}>Date and time</Text>
                            <Text style={{fontSize:17,fontFamily:'Poppins-Regular',color:'#0000004D',marginRight:18}}>Order id:{GLOBAL.appointment.id}</Text>

                        </View>

                        <Text style={{fontSize:18,fontFamily:'Poppins-Medium',color:'#000000',marginLeft:18,marginTop:15}}>{GLOBAL.appointment.booking_date}</Text>

                        <View style={{borderBottomWidth:1,width:'100%',borderBottomColor:'#0000001A',marginTop:15}}>
                        </View>

                        <Text style={{fontSize:17,fontFamily:'Poppins-Regular',color:'#0000004D',marginLeft:18,marginTop:20}}>Patient Detail</Text>
                        <Text style={{fontSize:17,fontFamily:'Poppins-Medium',color:'#000000',marginLeft:18,marginTop:10}}>rahul123@gmail.com</Text>
                        <Text style={{fontSize:17,fontFamily:'Poppins-Medium',color:'#000000',marginLeft:18,marginTop:10}}>+919871312388</Text>

                        <View style={{borderBottomWidth:1,width:'100%',borderBottomColor:'#0000001A',marginTop:20}}>
                        </View>

                        <Text style={{fontSize:17,fontFamily:'Poppins-Regular',color:'#0000004D',marginLeft:18,marginTop:20}}>Patient Complaint</Text>
                        <Text style={{fontSize:17,fontFamily:'Poppins-Medium',color:'#000000',marginLeft:18,marginTop:15}}>{GLOBAL.appointment.problem}</Text>

                        <View style={{borderBottomWidth:1,width:'100%',borderBottomColor:'#0000001A',marginTop:20}}>
                        </View>

                        <Text style={{fontSize:17,fontFamily:'Poppins-Regular',color:'#0000004D',marginLeft:18,marginTop:20}}>Patient Prescription</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000000',marginLeft:18,marginTop:15,marginRight:18}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

                        <View style={{borderBottomWidth:1,width:'100%',borderBottomColor:'#0000001A',marginTop:20}}>
                        </View>

                        <Text style={{fontSize:17,fontFamily:'Poppins-Regular',color:'#0000004D',marginLeft:18,marginTop:20}}>Type</Text>
                        <Text style={{fontSize:17,fontFamily:'Poppins-Medium',color:'#000000',marginLeft:18,marginTop:15}}>{GLOBAL.appointment.booking_mode}</Text>

                        <View style={{borderBottomWidth:1,width:'100%',borderBottomColor:'#0000001A',marginTop:20}}>
                        </View>

                        <Text style={{fontSize:17,fontFamily:'Poppins-Regular',color:'#0000004D',marginLeft:18,marginTop:20}}>Time</Text>
                        <Text style={{fontSize:17,fontFamily:'Poppins-Medium',color:'#000000',marginLeft:18,marginTop:15}}>2:00 PM to 2:15 PM</Text>


                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    }
}

export default AppointmentDetail;