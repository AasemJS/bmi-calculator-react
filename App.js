import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
class Inputs extends Component {
   state = {
      height: '',
      weight: '',
      feet: '',
      inches: '',
      weight_p: '',
      bmi: '',
      BmiResult: '',
      bmi2: '',
      BmiResult2: '',
   }
   handleHeight = (text) => {
      this.setState({ height: text })
   }
   handleWeight = (text) => {
      this.setState({ weight: text })
   }
   handleFeet = (text) => {
    this.setState({ feet: text})
   }
   handleInches = (text) => {
    this.setState({ inches: text})
   }
   handleWeightP = (text) => {
    this.setState({ weight_p: text})
   }

   calculate = (height, weight) => {
      //calculation
      var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
      result = result.toFixed(2);
      //display result
      this.setState({ bmi: result })
      if(result<18.5){
         this.setState({BmiResult:'Underweight'})
      }
      else if(result>=18.5&&result<25){
         this.setState({BmiResult:'Normal weight'})
      }
      else if(result>=25&&result<30){
         this.setState({BmiResult:'Overweight'})
      }
      else if(result>=30){
         this.setState({BmiResult:'Obese'})
      }
      else{
         alert('Incorrect Input!');
         this.setState({BmiResult:''})
      }
   }
   calculate_p = (feet, inches, weight_p) => {
    //calculation
    inches = parseFloat(inches) + (parseFloat(feet)*12)
    var result = (703 * parseFloat(weight_p))/(inches * inches);
    result = result.toFixed(2);
    //display result
    this.setState({ bmi2: result })
    if(result<18.5){
       this.setState({BmiResult2:'Underweight'})
    }
    else if(result>=18.5&&result<25){
       this.setState({BmiResult2:'Normal weight'})
    }
    else if(result>=25&&result<30){
       this.setState({BmiResult2:'Overweight'})
    }
    else if(result>=30){
       this.setState({BmiResult2:'Obese'})
    }
    else{
       alert('Incorrect Input!');
       this.setState({BmiResult2:''})
    }
 }
   render() {
      return (
         <View style = {styles.container}>
          <Text style={styles.title}>BMI Calculator</Text>
          <Text  style = {styles.label}>Height(in cm)</Text>
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Height (Cm)"
            autoCapitalize = "none"
            onChangeText = {this.handleHeight}/>
          <Text  style = {styles.label}>Weight(in kg)</Text>
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Weight (Kg)"
            autoCapitalize = "none"
            onChangeText = {this.handleWeight}/>
          <TouchableOpacity
            style = {styles.submitButton}
            onPress = {
                () => this.calculate(this.state.height, this.state.weight)
            }>
            <Text style = {styles.submitButtonText}> Calculate </Text>
          </TouchableOpacity>
          <Text style = {styles.output}>{this.state.bmi}</Text>
          <Text style = {styles.resultText}>{this.state.BmiResult}</Text>

          <Text  style = {styles.label}>Height</Text>
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Feet"
            autoCapitalize = "none"
            onChangeText = {this.handleFeet}/>
            <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Inches"
            autoCapitalize = "none"
            onChangeText = {this.handleInches}/>
          <Text  style = {styles.label}>Weight</Text>
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Weight (lbs)"
            autoCapitalize = "none"
            onChangeText = {this.handleWeightP}/>
          <TouchableOpacity
            style = {styles.submitButton}
            onPress = {
                () => this.calculate_p(this.state.feet, this.state.inches, this.state.weight_p)
            }>
            <Text style = {styles.submitButtonText}> Calculate </Text>
          </TouchableOpacity>
          <Text style = {styles.output}>{this.state.bmi2}</Text>
          <Text style = {styles.resultText}>{this.state.BmiResult2}</Text>
        </View>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      margin: 23,
      
   },
   input: {
      margin: 15,
      height: 40,
      borderWidth: 1,
      padding: 10,
   },
   submitButton: {
      backgroundColor: '#ff6666',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      textAlign: "center",
      color: 'white',
   },
   output:{
      textAlign: "center",
   },
   title:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 20,
      fontWeight:"bold",
   },
   resultText:{
      paddingTop:10,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 20,
      color: 'blue'
   },
   label:{
      marginLeft: 15,
   }
})