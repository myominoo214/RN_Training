
import React,{Component} from 'react';
import { 
    View,
    Text,
    TouchableOpacity
} from "react-native";
import AuthContext from './AuthContext';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }}>
          <Text>Home Pag</Text>
          <TouchableOpacity
            style={{
                paddingHorizontal:40,
                paddingVertical:10,
                borderRadius:5,
                backgroundColor:'green',
                marginTop:50
            }}
            onPress={()=>{this.context.logout()}}
          >
              <Text>
                  Logout
              </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
Home.contextType = AuthContext;
export default Home;
