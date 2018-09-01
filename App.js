import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TextInput, Button,  FormLabel, FormInput, FormValidationMessage } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';


export default class App extends Component {

  state = {
  value: '',
  actions: [],
    items: new Array(5).fill(0).map((a, i) => i).map(i => ({
      title: `Title ${i}`,
      key: i,
      content: `Content number ${i}. It's a bit longer than title. It's even long enough to force a line break`,
    })),
  };

  render() {
    return (
      <View style={styles.container}>

       <TextInput
         placeholder="New Text"
         returnKeyType="done"
         value={this.state.value}
         onChangeText={this.textChanged}
         onSubmitEditing={this.submit}
       />
       <View style={styles.container}>
       {this.state.actions.map(({ timestamp, type, value }) => (
         <Text key={timestamp}>
           <Text style={{ fontWeight: 'bold' }}>{type}</Text>
           <Text>{JSON.stringify(value)}</Text>
           <Button title = "remove" onPress={this.removeItem}/>
           <Button title = "edit" onPress={this.editItem}/>
         </Text>
       ))}
        <FlatList data={this.state.items} renderItem={this.renderItem} />
      </View>

      </View>
    );
  }

removeItem = ({item},index) =>(
  console.log("usun")
  //
  //{item}.splice(index,1)
)
editItem = ({item}) =>(
  console.log("usun")
)

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );


  textChanged = text =>
    this.setState(state => ({
      value: text,
      actions: state.actions.concat({
        timestamp: new Date().getTime(),
        type: 'New Item',
        value: text,
      }),
    }));

  submit = () =>
    this.setState(state => ({
      actions: state.actions.concat({
        timestamp: new Date().getTime(),
        type: 'TEXT_SUBMIT',
      }),
    }));
// concat() => Combine Two Strings Into One
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  item: {
    paddingHorizontal: 10,
    backgroundColor: 'blue',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
    color:'white',
  },
  content: {
    marginBottom: 10,
    color:'black'
  },
});
