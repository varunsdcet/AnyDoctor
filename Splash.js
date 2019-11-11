import React, {Component} from 'react';
import { StyleSheet,TextInput,Text, View,Image, Button ,Alert,AsyncStorage,Dimensions ,TouchableOpacity} from 'react-native';
const window = Dimensions.get('window');
import store from 'react-native-simple-store';
const GLOBAL = require('./Global');
type Props = {};
export default class Splash extends Component {
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

componentDidMount() {

    // const url = GLOBAL.BASE_URL +  'home_patient'
    //
    // fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //
    //
    //     body: JSON.stringify({
    //         "type":"home_patient"
    //
    //
    //
    //
    //     }),
    // }).then((response) => response.json())
    //     .then((responseJson) => {
    //
    //         if (responseJson.status == true) {
    //             store.update('responseJson',responseJson)
    //          //   this.props.navigation.replace('Home')
    //
    //
    //             const url = GLOBAL.BASE_URL +  'view_all_specialty'
    //
    //             fetch(url, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //
    //
    //                 body: JSON.stringify({
    //                     "key":"all_specialty"
    //
    //
    //
    //
    //                 }),
    //             }).then((response) => response.json())
    //                 .then((responseJson) => {
    //
    //                     if (responseJson.status == true) {
    //                         store.update('specialty', responseJson)
    //
    //                         // this.props.navigation.navigate("VideoCall", {
    //                         //     channelName: 'Picasoid',
    //                         //     onCancel: (message) => {
    //                         //         this.setState({
    //                         //             visible: true,
    //                         //             message
    //                         //         });
    //                         //
    //                          //  this.props.navigation.replace('Slider')
    //
    //                         //
    //                         //     }
    //                         // });
    //                     }
    //                 })
    //                 .catch((error) => {
    //                     console.error(error);
    //                     this.hideLoading()
    //                 });
    //
    //
    //         }
    //
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //         this.hideLoading()
    //     });



       this.props.navigation.navigate('DrawerNavigator')
}

    render() {
        return (
            <View style={styles.container}>
                <Image style = {{width :window.width ,height : window.height}}
                       source={require('./splash.png')}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        borderWidth: 1,
        borderColor: "#000000",
        margin: 5,
        padding: 5,
        width: "70%",
        backgroundColor: "#DDDDDD",
        borderRadius: 5,
    },
    textField: {
        borderWidth: 1,
        borderColor: "#AAAAAA",
        margin: 5,
        padding: 5,
        width: "70%"
    },
    spacer: {
        height: 10,
    },

    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    }
});