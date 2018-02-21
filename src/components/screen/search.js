import React from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, FlatList, TouchableHighlight } from "react-native";
var { height, width } = Dimensions.get('window');

export default class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      Details: [],
      FilteredDetails :[],
      FilteredDetailsinitial: []
    };
  }
  componentWillMount(){
    this.fetchPlanetList()
  }
  
  setDetails(results) {
    this.setState({
      Details: results
    });
  }

  getName() {
    let names = [];
     this.state.Details.map((details) => {
      names.push({ "Pname": details.name, 
      "PPopulation": details.population,
        "rotation_period": details.rotation_period,
        "orbital_period": details.orbital_period,
        "diameter": details.diameter,
        "climate": details.climate,
        "gravity": details.gravity,
        "terrain": details.terrain,
        "surface_water": details.surface_water
      });
    })
    this.setState({
      FilteredDetails: names,
      FilteredDetailsinitial: names
    })
  }


  async fetchPlanetList() {
    return await fetch('https://swapi.co/api/planets/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setDetails(responseJson.results),
          this.getName()
      }
    )
      .catch((error) => {
        console.error(error);
      });
  }
  
  filterSearch(text) {
    const dataSource = this.state.FilteredDetails
    let texts = text.toLowerCase();
     
    let filteredName = dataSource.filter((item) => {
       return item.Pname.toLowerCase().match(texts)
     })

    if (!text || text === '') {
      const dataSource1 = this.state.FilteredDetailsinitial
      this.setState({
        FilteredDetails: dataSource1
      });
    } else{
    this.setState({
      FilteredDetails: filteredName
    })
  }
  }

  compare(param1, param2) {
    if (param1.PPopulation < param2.PPopulation)
    return -1;
    if (param1.PPopulation > param2.PPopulation)
    return 1;
  return 0;
}

  onPress(item){
    this.props.navigation.navigate("Details", { Details: item});
  }

  render() {
    const sorted = this.state.FilteredDetails.sort(this.compare)
    return (
      <ImageBackground
        style={{ flex: 1,  }}
        source={require("../../../assets/plante.jpg")}
      >
        <TextInput
          style={{
            height: 40, width: width, backgroundColor: '#fff', padding: 10, borderStyle: 'solid',
            borderColor: 'black', borderRadius: 5,
          }}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={'Enter Planet Name To Search'}
          placeholderTextColor='#777'
          selectionColor='darkblue'
          textAlign={'center'}
          onChangeText={(text) => this.filterSearch(text)}
          autoCorrect={false}
        />
        <View style={{ height:20, width: width,backgroundColor:'green' }}>
          <Text style={{ fontWeight:'bold'}}>Sort By Population</Text>
        </View>

        <FlatList
          data={sorted}
          keyExtractor={(item, index) => index}
          renderItem={({ item, separators }) => (
            <TouchableHighlight
              onPress={() => this.onPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <View style={{ height:40,backgroundColor: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor:'green'}}>
                <Text style={{ fontWeight: 'bold' , color:'yellow',padding:15}}>{item.Pname}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
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
