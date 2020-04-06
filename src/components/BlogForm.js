import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const BlogForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return <View style={style.container}>
        <Text style={style.label}>Enter Title</Text>
        <TextInput 
            style={style.input}
            value={title}
            onChangeText={setTitle}
        />
        <Text style={style.label}>Enter Content</Text>
        <TextInput 
            multiline={true}
            style={style.inputTextArea}
            value={content}
            onChangeText={setContent}
        />
        <Button 
            title="Save Blog Post" 
            onPress={() => onSubmit(title, content)} 
        />
    </View>
}

BlogForm.initialValues = {
    title:'',
    content:''
}

const style  = StyleSheet.create({
    container:{
        flex: 1
    },
    input:{
        fontSize:18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
        padding:5,
        margin:5
    },
    inputTextArea:{
        fontSize:18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
        padding:5,
        margin:5,
        height:80
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft:5
    }
})

export default BlogForm