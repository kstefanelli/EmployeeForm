import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableHighlight } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';

class employeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      schoolName: '',
      companyName: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainView}>
          <Text style={styles.mainTextStyle}>Submit Employee Details</Text>
          <Text style={styles.textStyle}>Enter Your Name</Text>
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholderTextColor="#cccccc"
            placeholder="Enter Your Name"
            onChangeText={(name) => {
              this.setState({ name: name }, () => {});
            }}
          />
          <Text style={styles.textStyle}>Enter Your School Name</Text>
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholderTextColor="#cccccc"
            placeholder="Enter Your School Name"
            onChangeText={(schoolName) => {
              this.setState({ schoolName: schoolName }, () => {});
            }}
          />
          <Text style={styles.textStyle}>Enter Your Company Name</Text>
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholderTextColor="#cccccc"
            placeholder="Enter Your Company Name"
            onChangeText={(companyName) => {
              this.setState({ companyName: companyName }, () => {});
            }}
          />
          <TouchableHighlight
            underlayColor="transparent"
            style={styles.buttonStyle}
            onPress={() => {
              //Here we will call our Action
            }}
          >
            <Text style={styles.buttonTextStyle}>Submit</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}

export default employeeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingBottom: 50,
  },
  mainView: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  textStyle: {
    width: '100%',
    height: 20,
    textAlign: 'left',
    marginTop: 10,
    fontSize: 15,
  },
  mainTextStyle: {
    width: '100%',
    height: 40,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  buttonStyle: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 20,
  },
  buttonTextStyle: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
  },
});
