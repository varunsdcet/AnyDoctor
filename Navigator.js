import { createStackNavigator ,createAppContainer ,createDrawerNavigator,createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation';
import Splash from './Splash.js';
import Slider from './Slider.js';
import Login from './Login.js';
import Otp from './Otp.js';
import Register from './Register.js';
import Forgot from './Forgot.js';
import BasicDetail from './BasicDetail.js';
import Nurse from './Nurse.js';
import NurseBooking from './NurseBooking.js';
import NurseTime from './NurseTime.js';
import MedicalService from './MedicalService.js';
import  MedicalServiceBooking from './MedicalServiceBooking.js';
import  SurgicalPackage from './SurgicalPackage.js';
import  OpdHealth from './OpdHealth.js';
import DoctorVisit   from './DoctorVisit.js';
import DoctorVisitDetail from './DoctorVisitDetail.js';
import Emergency from './Emergency.js';
import BookingAppointment from './BookingAppointment.js';
import BookingAppointmentDetail from './BookingAppointmentDetail.js';
import BookingDetailFinal from './BookingDetailFinal.js';
import Confirmation from './Confirmation.js';
import DoctorDetail from './DoctorDetail.js';
import HospitalList from './HospitalList.js';
import HospitalDetail from './HospitalDetail.js';
import AmbulanceBooking from './AmbulanceBooking.js';
import Location from './Location.js';
import Landing from './Landing.js';
import Home from './Home.js';
import Prescription from './Prescription.js';
import Drawer from './Drawer.js';
import VideoCall from './VideoCall.js';
import AppointmentDetail from './AppointmentDetail.js';
import Upload from './Upload.js';
import BookingHistory from './BookingHistory.js';
import Chat from './Chat.js';

import Speciality from './Speciality.js';
import React, {Component} from 'react';


const DrawerNavigator = createDrawerNavigator({
        Home:{
                screen: Home ,

                navigationOptions: ({ navigation }) => ({
                        headerStyle: {
                                backgroundColor: 'black',
                                headerTintColor: '#ffffff',
                                tintColor: {
                                        color: '#ffffff'
                                },
                                headerTitleStyle: { color: 'black' }
                        },

                }),
        }

},{
        initialRouteName: 'Home',
        contentComponent: Drawer,
        drawerWidth: 250
});
const StackNavigator = createStackNavigator({

        Splash: { screen: Splash },
            DrawerNavigator: { screen: DrawerNavigator },
            Slider: { screen: Slider },
            Drawer: { screen: Drawer },
            AppointmentDetail: { screen: AppointmentDetail },

        VideoCall: { screen: VideoCall },

        Landing: { screen: Landing },
            Chat: { screen: Chat },
        
        Login: { screen: Login },
        Otp: { screen: Otp },
        Register: { screen: Register },
        Forgot: { screen: Forgot },
            BasicDetail: { screen: BasicDetail },
        NurseTime:{screen:NurseTime},

        BookingHistory:{screen:BookingHistory},
        NurseBooking:{screen:NurseBooking},
        MedicalServiceBooking:{screen:MedicalServiceBooking},
            DoctorVisitDetail:{screen:DoctorVisitDetail},
            Emergency:{screen:Emergency},
        BookingAppointmentDetail:{screen:BookingAppointmentDetail},
        BookingDetailFinal:{screen:BookingDetailFinal},
        Confirmation:{screen:Confirmation},
        DoctorDetail:{screen:DoctorDetail},
        HospitalDetail:{screen:HospitalDetail},
        Location:{screen:Location},
        AmbulanceBooking:{screen:AmbulanceBooking},
        HospitalList:{screen:HospitalList},
        BookingAppointment:{screen:BookingAppointment},
        DoctorVisit:{screen:DoctorVisit},
        OpdHealth:{screen:OpdHealth},
        SurgicalPackage:{screen:SurgicalPackage},
        MedicalService:{screen:MedicalService},
        Nurse: { screen: Nurse },
            Speciality: { screen: Speciality },
            Upload: { screen: Upload },
        Prescription:{screen:Prescription},

    },

   // {headerMode :'none'},
);

export default createAppContainer(StackNavigator);
//LabourLaw