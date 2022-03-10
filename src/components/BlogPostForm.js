import React,{useState} from 'react';
import {Button, Text, TextInput, View,StyleSheet} from 'react-native';


const BlogPostForm = ({onSubmit,initialValues,screenName}) => {
    const [title,setTitle] = useState(initialValues.title);
    const [content,setContent] = useState(initialValues.content);

    return (
        <View style={{paddingHorizontal:10,paddingVertical:5}}>
            <Text style={styles.textStyle}>Enter Title</Text>
            <TextInput style={styles.inputStyle} onChangeText={(text)=>setTitle(text)} value={title}/>
            <Text style={styles.textStyle}>Enter Content</Text>
            <TextInput style={{...styles.inputStyle,marginBottom:20,textAlignVertical: 'top'}} onChangeText={(text)=>setContent(text)} value={content} multiline={true}
                       numberOfLines={4}/>
            <Button style={styles.buttonStyle} title={`${screenName} BlogPost`} onPress={()=>onSubmit(title,content)}/>
        </View>
    );
};
BlogPostForm.defaultProps = {
    initialValues:{
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    inputStyle:{
        borderWidth: 1,
        borderColor:'black',
        paddingHorizontal: 5,
        paddingVertical: 5,
        fontSize: 18,
    },
    textStyle:{
        paddingVertical: 5,
        fontSize:20,
    },
    buttonStyle:{
        paddingVertical: 10,
        color:'black',
        fontWeight:'bold'
    }
})
export default BlogPostForm;



