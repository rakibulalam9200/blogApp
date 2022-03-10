import React, {useContext} from 'react';

import {Text, View} from 'react-native';
import {Context} from "../context/BlogContext";

const ShowScreen = ({navigation,route}) => {
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost)=> blogPost.id === route.params.id)

    return (
        <View style={{paddingHorizontal:10}}>
                 <Text style={{fontSize:20,alignSelf:'center',paddingVertical:5,color:'blue'}}>{blogPost.title}</Text>
                <Text>{blogPost.content}</Text>
        </View>
    );
};

export default ShowScreen;
