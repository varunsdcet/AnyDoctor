import React, {Component} from 'react';
import {NavigationActions,StackActions, DrawerActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View ,Linking,AsyncStorage,    StyleSheet,
    Image,TouchableOpacity,Alert,} from 'react-native';




const GLOBAL = require('./Global');

class Drawer extends React.Component {

    constructor(props){
        super(props)
        const { navigation } = this.props;
        this.state = {
            my: 'sdf',
            expandList:true
        }
    }

    componentDidMount() {

        var value =  AsyncStorage.getItem('name');
        value.then((e)=>{

            GLOBAL.name = e;

            this.setState({my: GLOBAL.name})
        })

    }

    expandList=(visible)=>{
        this.setState({expandList: !this.state.expandList})
    }

    _YesLogout=()=>{

//        const url = GLOBAL.BASE_URL +  'logout'
// //      this.showLoading()
//       fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     user_id : GLOBAL.userid,
//   }),
// }).then((response) => response.json())
//     .then((responseJson) => {

// //    alert(JSON.stringify(responseJson))
//   //     this.hideLoading()
//        if (responseJson.status == true) {
        AsyncStorage.removeItem('userID');

        this.props
            .navigation
            .dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: 'Login',
                        params: { someParams: 'parameters goes here...' },
                    }),
                ],
            }))


        this.props.navigation.dispatch(DrawerActions.closeDrawer())

        //    }else {
        //        alert('Something Went Wrong.')
        //    }
        // })
        // .catch((error) => {
        //   console.error(error);
        // });
    }


    navigateToScreen1 = (route) => () => {

        Alert.alert('Logout!','Are you sure you want to Logout?',
            [{text:"Cancel"},
                {text:"Yes", onPress:()=>this._YesLogout()
                },
            ],
            {cancelable:false}
        )

    }


    navigateToScreen = (route) => () => {

        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }


    selectedFirst = (index) => ()=>{
        if (index == 0){
            this.props.navigation.navigate('DoctorVisit')
        }else if (index == 1){
            this.props.navigation.navigate('Nurse')
        }else if (index == 2){
            this.props.navigation.navigate('MedicalService')
        }else if (index == 3){
            this.props.navigation.navigate('BookingAppointment')
        }else if (index == 4){
            this.props.navigation.navigate('OfflineBooking')
        }else if (index == 5){
            this.props.navigation.navigate('Insurance')
        }else if (index == 6){
            this.props.navigation.navigate('AmbulanceBooking')
        }else if (index == 7){
            this.props.navigation.navigate('Labtest')
        }
        else if (index == 9){
            this.props.navigation.navigate('OpdHealth')
        }else if (index == 10){
            this.props.navigation.navigate('HealthPackege')
        }
        else if (index == 11){
            this.props.navigation.navigate('SurgicalPackage')
        }
    }


    render () {

        return (
            <View style={{flex:1, backgroundColor:'#0592CC'}}>
                <ScrollView>
                    <View style={{backgroundColor:'#0592CC',}}>

                        <View  style={styles.headertop}>

                            <View style={{marginTop:30, marginLeft:20, flexDirection: 'column'}}>


                                <View style={{flexDirection:'column', marginTop:5,}}>
                                    <Text style = {{marginTop:10,color : 'white',marginLeft : 10,fontSize: 17, height:'auto',fontFamily:'Poppins-Regular'}} >
                                        {GLOBAL.myname}
                                    </Text>
                                    <Text style = {[styles.drawerText, {color:'white'}]} >
                                        {GLOBAL.myemail}
                                    </Text>
                                </View>
                            </View>

                        </View>


                        <View style={styles.menuItem}>
                            <Image style={styles.drawericon}
                                   source={require('./d_home.png')} />
                            <Text style = {styles.drawerTexts}
                                  onPress={()=>this.props.navigation.toggleDrawer()}>
                                Home
                            </Text>
                        </View>





                        <View style={styles.menuItem}>

                            <Image style={styles.drawericon}
                                   source={require('./d_book.png')} />
                            <Text style = {styles.drawerTexts}
                                  onPress={this.navigateToScreen('BookingHistory')}>
                                My Booking
                            </Text>
                        </View>


                        <View style={styles.menuItem}>

                            <Image style={styles.drawericon}
                                   source={require('./d_my_order.png')} />
                            <Text style = {styles.drawerTexts}
                                  onPress={this.navigateToScreen('Appointment')}>
                                My Order
                            </Text>
                        </View>








                        <View style={styles.menuItem}>

                            <Image style={styles.drawericon}
                                   source={require('./d_about.png')} />
                            <Text style = {styles.drawerTexts}
                                  onPress={this.navigateToScreen('ContactUs')}>
                                About Us
                            </Text>
                        </View>


                        <View style={styles.menuItem}>

                            <Image style={styles.drawericon}
                                   source={require('./d_support.png')} />
                            <Text style = {styles.drawerTexts}
                                  onPress={this.navigateToScreen('Support')}>
                                Support
                            </Text>
                        </View>

                        <View style={styles.menuItem}>

                            <Image style={styles.drawericon}
                                   source={require('./d_pri.png')} />
                            <Text style = {styles.drawerTexts}
                                  onPress={this.navigateToScreen('Terms')}>
                                Privacy Policy
                            </Text>
                        </View>



                        <View style={styles.menuItem}>

                            <Image style={styles.drawericon}
                                   source={require('./d_tc.png')} />
                            <Text style = {styles.drawerTexts}
                                  onPress={()=>Linking.openURL('http://anytimedoc.in/')}>
                                Terms & Conditions
                            </Text>
                        </View>

                        <View style={styles.menuItem}>

                            <Image style={styles.drawericon}
                                   source={require('./d_share.png')} />
                            <Text style = {styles.drawerTexts}
                                  onPress={this.navigateToScreen('Terms')}>
                                Share
                            </Text>
                        </View>


                        {/*           <View style={styles.menuItem}>

               <Image style={styles.drawericon}
                           source={require('./d_tc.png')} />
           <Text style = {styles.drawerTexts}
            onPress={this.navigateToScreen('Terms')}>
            Wallet
            </Text>
          </View>
*/}
                        <View style={styles.menuItem}>
                            <Image style={styles.drawericon}
                                   source={require('./d_logout.png')} />
                            <Text style = {styles.drawerTexts}
                                  onPress={this.navigateToScreen1('Login')}>
                                Logout
                            </Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

Drawer.propTypes = {
    navigation: PropTypes.object
};


const styles = StyleSheet.create({
    wrapper: {
    },
    container: {

        backgroundColor :'#f1f1f1',

    },
    drawerText :{
        marginTop : 2,
        color : 'white',
        marginLeft : 10,
        fontSize: 13,

    } ,
    headertop :{

        width : 300,
        height : 180,
        backgroundColor : '#0592CC',
        flexDirection:'column'
    } ,

    containers: {
        flex: 1,

    },
    menuItem:{
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    drawericon: {
        borderLeftWidth: 1,
        width: 20,
        height: 20,
        marginLeft : 8 ,
        marginTop : 3,
        resizeMode:'contain'


    },

    drawericons: {

        width: 20,
        height: 20,
        marginLeft : 8 ,
        marginTop : 3,

    },


    drawerTexts: {

        width: 180,
        height: 22,
        marginLeft : 45 ,
        marginTop : -18,
        color: 'white',
        fontFamily: 'Poppins-Medium'

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
        color : '#262628',
        fontFamily:'Poppins-Regular',


    } ,
    createaccount :{
        marginLeft : 5,
        fontSize: 17,
        textAlign : 'center',
        marginTop : 30,
        color : '#0592CC',




    } ,

    createaccounts :{
        marginLeft : 5,
        fontSize: 17,
        textAlign : 'center',
        marginTop : 30,
        color : '#0592CC',
        textDecorationLine: 'underline',



    } ,
    transcript: {
        textAlign: 'center',
        color: 'red',

    },
})

export default Drawer;