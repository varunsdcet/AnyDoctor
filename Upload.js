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
const window = Dimensions.get('window');
const GLOBAL = require('./Global');
import React, {Component} from 'react';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            avatarSource: null,
            image:'',

        }

        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);


    }
    cancel = ()=> {
        const url = GLOBAL.BASE_URL +'image_attchment_upload_doctor'
        const data = new FormData();
        data.append('user_id', GLOBAL.user_id);
        data.append('flag', "1");

        // you can append anyone.
        data.append('image', {
            uri: GLOBAL.profile,
            type: 'image/jpeg', // or photo.type
            name: 'image.png'
        });
        fetch(url, {
            method: 'post',
            body: data,
            headers: {
                'Content-Type': 'multipart/form-data',
            }

        }).then((response) => response.json())
            .then((responseJson) => {
               alert(JSON.stringify(responseJson))
            });

    }
    selectPhotoTapped=()=> {

        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                GLOBAL.profile = 'data:image/jpeg;base64,' + response.data
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({image :   GLOBAL.profile})
//    alert(JSON.stringify(source))

                this.setState({imageget :1})
            }
        });
    }

    static navigationOptions = {
        title: 'UPLOAD',

        headerTitleStyle: {
            flex:1,
            fontWeight: 'bold',
            textAlign: 'center',
            marginLeft: -35
        },
    };



    render() {
        return(
            <ScrollView>
                <View style={{width:Dimensions.get('window').width ,height : Dimensions.get('window').height,backgroundColor:'#F2F5F7'}}>



                    <View style={{height:135,width:Dimensions.get('window').width - 30,borderWidth:1,marginLeft:15,marginTop:15,borderStyle:'dashed',borderRadius:5,borderColor:'grey',justifyContent:'center',flexDirection:'row'}}>

                        <Image source={require('./uploadlogo.png')}
                               style={{alignSelf:'center', height:40,width:40}}/>
                        <Text style={{alignSelf:'center',marginLeft:5,fontFamily:'Poppins-Medium'}}>Upload Prescription</Text>

                        {this.state.imageget==0 && (
                            <View style={{height:135,width:window.width - 25,borderWidth:1,borderColor:'grey',borderRadius:5,position:'absolute',top:15,left:15,justifyContent:'center',flexDirection:'row'}}>




                            </View>
                        )}

                        {this.state.imageget==1 && (
                            <Image    source={{ uri: this.state.image}}
                                   style={{height:136,width:window.width - 25,position:'absolute',borderColor:'grey',borderRadius:5}}/>

                        )}

                    </View>


                    <Button style={{alignSelf:'center',fontSize:12,color:'white',fontFamily:'Poppins-Medium'}}
                            containerStyle={{height:30,width:100,marginLeft:15,marginTop:10,borderRadius:15,backgroundColor:'#0592CC',justifyContent:'center'}}
                            onPress={this.selectPhotoTapped.bind(this)}>
                        UPLOAD
                    </Button>


                    <Button style={{fontSize:17,color:'white',fontFamily:'Poppins-Medium'}}
                            onPress={() => {
                                this.cancel()
                            }}
                            containerStyle={{height:60,borderRadius:15,backgroundColor:'#0592CC',justifyContent:'center',position:'absolute',left:18,right:18,bottom:100}}>
                        CREATE
                    </Button>



                </View>
            </ScrollView>
        );
    }
}

export default Upload;