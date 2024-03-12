import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const App = () => {
  // @ts-ignore
  const [text, setText] = useState('')
  return(
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{text}</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          placeholder='タイプして！'
          onChangeText={newText => setText(newText)}
          defaultValue={text}>
      </TextInput>
      </View>
  );
};


export default App;
