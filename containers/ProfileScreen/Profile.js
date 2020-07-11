import React, {Component} from "react";
import { Text, View, ScrollView, ImageBackground, Image } from "react-native";
import styles from "../../assets/styles";
import MultiSelectList from "../../components/MultiSelectList";
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import Header_i from '../../components/Header_i';
//import * as EmpulseFlashbackNavigator from '../EmpulseFlashbackScreen/EmpulseFlashbackNavigator';
class Profile extends Component{
  constructor(props){
    super(props);
    this.data = [
      {
        name : "Payment Details",
        screen : "pay",
        icon : {name : "credit-card", type : "font-awesome", color : "black"}
      },
      {
        name : "Notifications",
        screen : "notifications",
        icon : {name : "bell", type : "font-awesome", color : "black"}
      },
      {
        name : "Security",
        screen : "security",
        icon : {name : "unlock", type : "font-awesome", color : "black"}
      },
      {
        name : "Terms of Use",
        screen : "terms",
        icon : {name : "page-filled", type : "foundation", color : "black"}
      },
    ];
    this.props.navigation.navigate = this.props.navigation.navigate.bind(this);
  }
  
  render()
  {
    return(
        <ImageBackground
            source={require("../../assets/images/background/zen_bg4.jpg")}
            style={styles.bg}>
            <View style = {[styles.headerContainerAddMemoryScreen, {flex : 1}]}>
                    <Header_i
                        rightButtonVisible = {true}
                        rightButtonImage = {()=><View></View>}
                        onPressRightButton = {()=>EmpulseFlashbackNavigator.goBack()}/>
            </View>
            <View style = {styles.profileScreen}>
              <View style = {styles.upperProfileScreen}>
                <View style = {styles.avatarContainer}>
                  <Avatar
                    iconStyle = {{flex : 1}}
                    rounded
                    placeholderStyle = {{flex : 1}}
                    overlayContainerStyle = {{flex : 1}}
                    avatarStyle = {{flex : 1}}
                    size="large"
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                    showEditButton
                    onEditPress = {() => this.props.navigation.navigate("edit")} 
                  /> 
                </View>
                <View style = {styles.nameDescriptionContainer}>
                  <Text ellipsizeMode = {'middle'} style = {styles.nameText}>Shreyas Shandilya</Text>
                  <Text numberOfLines = {3} ellipsizeMode = {'middle'} style = {styles.descriptionText}>Runner. Running from one town to another in search of nirvana </Text>
                </View>
              </View>
              <View style = {styles.settingsContainer}>
                <MultiSelectList data = {this.data} navigation = {this.props.navigation}/>
              </View>
            </View>
        </ImageBackground>
        );
  }
}
export default Profile;
