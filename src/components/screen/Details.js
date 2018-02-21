import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    ImageBackground,
    Dimensions
} from "react-native";

var { height, width } = Dimensions.get('window');

export default class Details extends React.Component {   
    render() {
        return (
           <View style = {styles.container}>
                <View style={{ flex:1}}>
                    <Text style={{ fontWeight: 'bold',padding:10 }}>Name:{this.props.navigation.state.params.Details.Pname}</Text>
                    <Text style={{ fontWeight: 'bold',padding:10 }}>Population:{this.props.navigation.state.params.Details.PPopulation}</Text>
                    <Text style={{ fontWeight: 'bold',padding:10 }}>Rotation period:{this.props.navigation.state.params.Details.rotation_period}</Text>
                    <Text style={{ fontWeight: 'bold',padding:10 }}>Orbital period:{this.props.navigation.state.params.Details.orbital_period}</Text>
                    <Text style={{ fontWeight: 'bold',padding:10 }}>Diameter:{this.props.navigation.state.params.Details.diameter}</Text>
                    <Text style={{ fontWeight: 'bold',padding:10 }}>Climate:{this.props.navigation.state.params.Details.climate}</Text>
                    <Text style={{ fontWeight: 'bold',padding:10 }}>Gravity:{this.props.navigation.state.params.Details.gravity}</Text>
                    <Text style={{ fontWeight: 'bold',padding:10 }}>Terrain:{this.props.navigation.state.params.Details.terrain}</Text>
                    <Text style={{ fontWeight: 'bold',padding:10 }}>surface water:{this.props.navigation.state.params.Details.surface_water}</Text>
                </View>
               </View>
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
