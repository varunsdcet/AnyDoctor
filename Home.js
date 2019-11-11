import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Alert,
    FlatList,



    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView,
    AsyncStorage,
    Platform, ImageBackground
} from 'react-native';
import store from 'react-native-simple-store';
import MaterialTabs from 'react-native-material-tabs';

import Location from './Location.js';
import Landing from './Landing.js';
var ScrollableTabView = require('react-native-scrollable-tab-view');
import { DialogComponent, DialogTitle } from 'react-native-dialog-component';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const GLOBAL = require('./Global');
const window = Dimensions.get('window');
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;
const images = [
    "https://www.bhatiahospital.org/storage/app/public/home_banner/2/image/1503411077revised-bhatia-homebanner-03.jpg",
    "https://www.bhatiahospital.org/storage/app/public/home_banner/2/image/1503411077revised-bhatia-homebanner-03.jpg",
    "https://www.bhatiahospital.org/storage/app/public/home_banner/2/image/1503411077revised-bhatia-homebanner-03.jpg"
];
import Carousel from 'react-native-banner-carousel';
import { Header } from 'react-navigation';
import Button from 'react-native-button';
import { TextField } from 'react-native-material-textfield';
type Props = {};



import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Home extends Component {
    state = {
        name :'',
        email:'',
        phone :'',
        company :'',
        selectedTab:0,
        loading:false,
        visible:false,
        searchText:'',
        banner:[],
        speciality:[],
        article:[],
        list :[],

        FlatListItems1: [
            {"key": "#1",
                "name": "Pradeep Kumar",
                "address": "C-9,21 Sec-7,Rohini",
                "Bookingid": "Booking id: 0720",
                "imageUrl": "http://venushospital.in/wp-content/uploads/2019/07/noopurchhasatiya-236x300.png",
                "time": "20 Aug 2019, 9:00 AM",
                "stats": "Completed"
            },
            {"key": "#2",
                "name": "Pradeep Kumar",
                "address": "C-9,21 Sec-7,Rohini",
                "Bookingid": "Booking id: 0720",
                "imageUrl": "http://venushospital.in/wp-content/uploads/2019/08/Gulfisha_Ahmed-229x300.png",
                "time": "20 Aug 2019, 9:00 AM",
                "stats": "Cancelled"
            },
            {"key": "#3",
                "name": "Pradeep Kumar",
                "address": "C-9,21 Sec-7,Rohini",
                "Bookingid": "Booking id: 0720",
                "imageUrl": "https://letsgetsciencey.com/wp-content/uploads/2019/03/wright_jane.jpg",
                "time": "20 Aug 2019, 9:00 AM",
                "stats": "Cancelled"
            },
            {"key": "#4",
                "name": "Pradeep Kumar",
                "address": "C-9,21 Sec-7,Rohini",
                "Bookingid": "Booking id: 0720",
                "imageUrl": "http://www.tessgerritsen.com/wp-content/files/Tess-Gerritsen.jpg",
                "time": "20 Aug 2019, 9:00 AM",
                "stats": "Completed"
            },
            ],


            moviesList :[
            {
                back :require('./patients.png'),
                title :'Patient Consulation',
                image:require('./patient.png')
            },


            {
                back :require('./labs.png'),
                title :'Lab Test Booking',
                image:require('./lab.png')
            },

            {
                back :require('./ambulances.png'),
                title :'Ambulance Booking',
                image:require('./ambulance.png')
            },

            {
                back :require('./healthcares.png'),
                title :'HealthCare',
                image:require('./healthcare.png')
            },

            {
                back :require('./reports.png'),
                title :'Health Report',
                image:require('./report.png')
            },


        ],

        selected:false,
        data:[],
        results:[],

    };


    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null,
            animations: {
                setRoot: {
                    waitForRender: false
                }
            }
        }
    }



    showLoading() {
        this.setState({loading: true})
    }





    hideLoading() {
        this.setState({loading: false})
    }

    _renderItems = ({item,index}) => {

        return (

            <TouchableOpacity onPress={() => this.getSelection(index)
            }>
                <View style={{flexDirection :'row', flex: 1 ,marginLeft: '5%',marginTop:12,width : '90%', backgroundColor: 'white',height:38,borderBottomColor:'#77869E',borderBottomWidth:1
                    ,justifyContent:'space-between'}}>

                    <Text style={{marginLeft : 5,marginTop:10,fontSize : 20,color :'#77869E', height:'auto',fontFamily:'AvenirLTStd-Medium'}}>

                        {item.title}
                    </Text>

                </View>
            </TouchableOpacity>
        )
    }

    showLoading() {
        this.setState({loading: true})
    }


    getRespone = (res) => {
        this.setState({speciality:res.specialty})
        this.setState({banner:res.banners})
        this.setState({articles:res.articles})

    }

    getData = (type) =>
        {
            const url = GLOBAL.BASE_URL +  'home_doctor'

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },


                body: JSON.stringify({
            "condition":type,
            "user_id":GLOBAL.user_id





        }),
}).then((response) => response.json())
    .then((responseJson) => {

        alert(JSON.stringify(responseJson))

        this.setState({list:responseJson.lists})




    })
    .catch((error) => {
        console.error(error);
        this.hideLoading()
    });
        }

    componentDidMount(){
this.getData('consult_online')

    }


    selectedFirst=(item) => {
        alert(JSON.stringify(item))
        GLOBAL.appointment = item
        this.props.navigation.navigate('AppointmentDetail')
    }

    renderItem1=({item,index}) => {
        return(
            <TouchableOpacity onPress={() => this.selectedFirst(item)
            }>
            <View style={{flexDirection:'row',backgroundColor:'white',width:window.width}}>

                <Image style={{width:70, height:70,borderRadius:35,marginTop:15,marginLeft:5}}
                       source={{uri : item.image}}/>

                <View style={{flexDirection: 'column', marginTop:15,marginLeft:5}}>
                    <Text style={{color:'black', fontSize:14,fontFamily:'Poppins-Medium',marginTop:8}}>{item.name}</Text>

                    <Text style={{color:'#C0C0C0', fontSize:14,fontFamily:'Poppins-Medium',marginTop:8}}> Date :{item.booking_date}</Text>
                    <Text style={{color:'black', fontSize:14,fontFamily:'Poppins-Medium',marginTop:8}}>Problem :{item.problem}</Text>
                    <Text style={{color:'black', fontSize:14,fontFamily:'Poppins-Medium',marginTop:8}}>Booking Type :{item.booking_mode}</Text>
                    <Text style={{color:'black', fontSize:14,fontFamily:'Poppins-Medium',marginTop:8}}>Gender :{item.gender}</Text>
                    <Text style={{color:'black', fontSize:14,fontFamily:'Poppins-Medium',marginTop:8}}>{item.remain_date} Days Remaining</Text>
                    <View style={{flexDirection:'row',marginTop:15}}>

                        {item.accept_power == 1 && (
                            <Button style={{fontSize:20,color:'#0592CC',fontFamily:'Poppins-Medium'}}
                                    onPress={() => {
                                        this.cancels(item.id)
                                    }}
                                    containerStyle={{overflow:'hidden',justifyContent:'center'}}>

                                ACCEPT
                            </Button>
                        )}

                        {item.cancel_power == 1 && (
                            <Button style={{fontSize:20,color:'#FF0000',fontFamily:'Poppins-Medium'}}
                                    onPress={() => {
                                       this.cancel(item.id,index)
                                    }}
                                    containerStyle={{overflow:'hidden',justifyContent:'center',marginLeft:50}}>
                                CANCEL
                            </Button>
                        )}
                    </View>

                </View>



            </View>
            </TouchableOpacity>



        );
    }
    onchange = (index)=>{
        this.setState({selectedTab:index})

        if (index == 0 ) {
            this.getData('consult_online')
        }else if (index == 1 ) {
            this.getData('consult_offline')
        }else if (index == 2 ) {
            this.getData('doorstep')
        }


}
    cancels = (type)=>{
        GLOBAL.token = type
        this.props.navigation.navigate('Prescription')
    }

    cancel = (type,index)=>{


        const url = GLOBAL.BASE_URL +  'cancel_by_doctor'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },


            body: JSON.stringify({
                "booking_id":type,






            }),
        }).then((response) => response.json())
            .then((responseJson) => {




              var array = [...this.state.list]; // make a separate copy of the array
              var index = array.indexOf(index)
              if (index !== -1) {
                  array.splice(index, 1);
                  this.setState({list: array});


          }




            })
            .catch((error) => {
                console.error(error);
                this.hideLoading()
            });

    }

    render() {

        var radio_props = [
            {label: 'Online Consulltation', value: 0 },
            {label: 'Offline Consulltation', value: 1 }
        ];

        let { phone } = this.state;
        let { email } = this.state;
        let { name } = this.state;
        let { company } = this.state;
        if(this.state.loading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator style = {styles.loading}

                                       size="large" color='#006FA5' />
                </View>
            )
        }
        return (
            <View>
                <SafeAreaView style={{ flex:0, backgroundColor: '#6d0000' }} />


                <MaterialTabs
                    items={['ConsultOnline','Clinic','HomeVisit']}
                    selectedIndex={this.state.selectedTab}
                    onChange={(index)=> this.onchange(index)}
                    barColor="white"
                    indicatorColor="#0592CC"
                    activeTextColor="#0592CC"
                    inactiveTextColor="grey"
                />

                <FlatList
                    data={this.state.list}

                    keyExtractor={this._keyExtractor1}
                    renderItem={this.renderItem1}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    container: {

        backgroundColor :'white'
    },
    loading: {
        position: 'absolute',
        left: window.width/2 - 30,

        top: window.height/2,

        opacity: 0.5,

        justifyContent: 'center',
        alignItems: 'center'
    },
    slide1: {

        marginLeft : 50,

        width: window.width - 50,
        height:300,
        resizeMode:'contain',
        marginTop : window.height/2 - 200


    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    account :{
        marginTop : 20,
        textAlign : 'center',
        fontSize: 17,
        justifyContent:'center',
        color : '#c6c6c6',
        fontFamily:'Konnect-Regular',



    } ,
    createaccount :{
        marginLeft : 5,
        fontSize: 17,
        textAlign : 'center',
        marginTop : 30,
        color : '#800000',




    } ,

    createaccounts :{
        marginLeft : 5,
        fontSize: 17,
        textAlign : 'center',
        marginTop : 30,
        color : '#800000',
        textDecorationLine: 'underline',



    } ,
})