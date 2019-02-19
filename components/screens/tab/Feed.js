import React, {Component} from 'react';
import {Button, View} from 'react-native';
class Feed extends Component{
    render(){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Button title='Go to Details Sreen'
                    onPress={() => this.props.navigation.navigate('Detail')} />
            </View>
        );
    }
}

export default Feed;