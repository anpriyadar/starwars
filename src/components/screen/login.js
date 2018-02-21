import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  ImageBackground
} from "react-native";

let Detailsarr = [];

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      Details:[],
      Name:[]
    };
  }
  componentWillMount(){
    this.fetchCharacterDetails()
  }

  setDetails(results){
    this.setState({
      Details: results
    });
    this.getNameDOB()
  }
  getNameDOB(){
    let name=[]
   return this.state.Details.map((details)=>{
     name.push(details.name+" "+details.birth_year);
      this.setState({
       Name:name
      })
    })
  }

  async fetchCharacterDetails() {
    return await fetch('https://swapi.co/api/people/')
      .then((response) => response.json())
    .then((responseJson) => {
      this.setDetails(responseJson.results)
      
    })
    .catch((error) => {
      console.error(error);
    });
}

  changeUsername(username) {
    this.setState({
      username: username,
    });
  }

  changePassword(password) {
    this.setState({
      password: password,
    });
  }
  submitt() {
    const userPass = this.state.username+" "+ this.state.password
    let isAuth = this.state.Name.indexOf(userPass);
    this.props.navigation.navigate("Search");
//     if (isAuth!= -1){
// this.props.navigation.navigate("Search");
//     }else{
// alert('Wrong Credentials, Username and Password are Case Sennsetive too');
//     }
  
   
  }

  render() {
    //console.log(this.state.username)
    //console.log(this.state.password)
    return (
      <ImageBackground
        style={{ flex: 1, alignItems: "center", justifyContent: 'center', }}
        source={require("../../../assets/LoginScreen.jpg")}
      >
        <TextInput
          style={{
            height: 40, backgroundColor: '#fff', padding: 10, borderStyle: 'solid',
            borderWidth: 1, width :300,
            borderColor: '#E0E0E0', borderRadius: 5}}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={'UserName'}
          placeholderTextColor='#777'
          selectionColor='darkblue'
          onChangeText={this.changeUsername.bind(this)}
        />
        <TextInput
          style={{
            height: 40, backgroundColor: '#fff', padding: 10, borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#E0E0E0', width: 300, borderRadius: 5
          }}
          secureTextEntry={true}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={"Password"}
          placeholderTextColor='#777'
          selectionColor='darkblue'
          onChangeText={this.changePassword.bind(this)}
        />

        <TouchableWithoutFeedback onPress={() => this.submitt()}>
          <View 
            style = {{
              width: 300,
          marginVertical: 20,
          height: 40,
          justifyContent: "center",
          backgroundColor: "#02A692",
          borderRadius: 20,
              alignItems: "center"
        }}>
            <Text>
              Submitt
      </Text>
          </View>
        </TouchableWithoutFeedback>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
