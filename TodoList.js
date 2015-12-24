'use strict';

var React = require('react-native');
var {
  ListView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      text: '',
      items: [],
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  },

  componentDidMount: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.items),
    });
  },

  addItem: function() {
    var nextItems = this.state.items.concat(this.state.text);
    var nextText = '';
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({items: nextItems, text: nextText, dataSource: ds.cloneWithRows(nextItems)});
  },

  render: function() {
    return (
      <View>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TouchableHighlight style={styles.button}  onPress={this.addItem}>
            <Text style={styles.buttonText}>Ok</Text>
          </TouchableHighlight>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <View style={styles.listViewRow}><Text>{rowData}</Text></View>}
          style={styles.listView}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    );
  },
});

module.exports = TodoList;

var styles = StyleSheet.create({
  listView: {
    flex: 1,
  },

  listViewRow: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },

  inputRow: {
    flex:1,
    flexDirection: 'row',
  },

  button: {
    flex:2,
    backgroundColor: '#555',
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  inputText: {
    flex:8,
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    margin: 10,
    padding: 10,
  },
});
