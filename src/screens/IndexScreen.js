import React, {useContext} from 'react';
import {Text, View, FlatList, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons';

const IndexScreen = () => {
    const {state, addBlogPost,deleteBlogPost} = useContext(Context);

    return (
        <View>
            <Button title="Add Blog Post" onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return <View style={styles.row}>
                        <Text style={{fontSize: 18}}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather name="trash" size={24} color="black"/>
                        </TouchableOpacity>
                    </View>
                }}/>
        </View>

    );
};

export default IndexScreen;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderColor: 'gray'

    }
})
