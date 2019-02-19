
class WelcomeScreen extends Component{
    render(){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Button title='Login' onPress={() => alert('button pressed')} />
                <Button title='Sign Up' onPress={() => alert('button pressed')} />
            </View>
        );
    }
}