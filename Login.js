
import React,{Component} from 'react';
import { 
    View,
    Text,
    TouchableOpacity
} from "react-native";
import AuthContext from './AuthContext';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    console.log(this.context)
  }
  render() {
    return (
      <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }}>
          <Text>Login Page</Text>
          <TouchableOpacity
            style={{
                paddingHorizontal:40,
                paddingVertical:10,
                borderRadius:5,
                backgroundColor:'green',
                marginTop:50
            }}
            onPress={()=>{this.context.login()}}
          >
              <Text>
                  Login
              </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
Login.contextType = AuthContext;
export default Login;
