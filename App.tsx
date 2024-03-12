import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const App = () => {
  // @ts-ignore
  const {textInputValue, setTextInputValue} = useState('タイプしてみて！')
  const handleInputChange = (text: any) =>{
    setTextInputValue(text);
  }
  return(
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{textInputValue}</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={handleInputChange}
          defaultValue='タイプしてみて！'>
      </TextInput>
      </View>
  );
};


export default App;
