
import React,{Component} from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    AsyncStorage,
    Dimensions,
    StyleSheet
} from "react-native";
const {width,height}=Dimensions.get('window')
import AuthContext from './AuthContext';
import dal from './dal'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    };
  }
  componentDidMount(){
    console.log(this.context)
  }
  render() {
    return (
      <View style={{
          flex:1,
          justifyContent:'center'
      }}>
          <View style={{
                                marginHorizontal:20,
                            }}>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={[styles.input,{height:50}]}
                                            placeholder={'User Name/Email Address'}
                                            placeholderTextColor={'grey'}
                                            value={this.state.email}
                                            underlineColorAndroid={'transparent'}
                                            onChangeText={(text)=>this.setState({email:text})}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={[styles.input,{height:50}]}
                                            placeholder={'Password'}
                                            secureTextEntry
                                            placeholderTextColor={'grey'}
                                            value={this.state.password}
                                            underlineColorAndroid={'transparent'}
                                            onChangeText={(text)=>this.setState({password:text})}
                                        />
                                    </View>
                                    <TouchableOpacity
                                        style={{paddingVertical:10,borderRadius:10 ,backgroundColor:'grey',
                                        flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20}} 
                                        onPress={()=>{
                                            if(this.state.email==''||this.state.password==''){
                                                Alert.alert("ABC",'Pleas fill all information!')
                                                return;
                                            }
                                            this.setState({
                                                loading:true
                                            })
                                            dal.login2App(this.state.email,this.state.password,(err,resp)=>{
                                                if(err){
                                                    console.log(err)
                                                    Alert.alert("ABC",'Something went wrongj!')
                                                    this.setState({
                                                        loading:false
                                                    })
                                                }else{
                                                    console.log(resp)
                                                    if(resp.code==200&&resp.data){
                                                      this.setState({
                                                        email:'',
                                                        password:'',
                                                        loading:false
                                                      })
                                                      AsyncStorage.setItem('info',JSON.stringify(resp.data))
                                                      this.context.login()
                                                    }else{
                                                        this.setState({
                                                            loading:false
                                                        })
                                                        Alert.alert("ABC",resp.message)
                                                    }
                                                }
                                            })
                                        }}>
                                        <Text style={{
                                            color:'white',
                                            fontFamily:'Roboto-Bold',
                                            fontSize:16
                                        }}>Log in</Text>
                                    </TouchableOpacity>
                            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
      paddingVertical: 2,
      paddingHorizontal:5,
      flexDirection: 'row',
      marginVertical: 10,
      alignItems:'center',
      borderWidth:1,
      borderColor:'#262626',
      borderRadius:height*0.01
  },
  input: {
      flex:1,
      padding: 4,
      color            : "#000",
      fontSize         : 16,
      fontFamily:'Roboto'
  },
});
Login.contextType = AuthContext;
export default Login;
