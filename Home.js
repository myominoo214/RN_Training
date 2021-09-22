
import React,{Component} from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    AsyncStorage
} from "react-native";
import AuthContext from './AuthContext';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info:null
    };
  }
  async componentDidMount(){
    const info=await AsyncStorage.getItem('info')
    this.setState({
      info:info
    })
  }
  render() {
    const {info}=this.state
    return (
      <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }}>

          <Text style={{marginVertical:20}}>Employee ID :  {info?JSON.parse(info).employeeId:''}</Text>
          <Text>Employee Name :  {info?JSON.parse(info).employeeName:''}</Text>
          <TouchableOpacity
            style={{
                paddingHorizontal:40,
                paddingVertical:10,
                borderRadius:5,
                backgroundColor:'green',
                marginTop:50
            }}
            onPress={()=>{
              AsyncStorage.removeItem('info')
              this.context.logout()
            }}
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
