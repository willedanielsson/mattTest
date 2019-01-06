import React, { Component } from "react";
import { StyleSheet, TouchableHighlight, Image, Text, View } from "react-native";

import firstImage from "./assets/first.jpeg";
import secondImage from "./assets/second.jpg";
import thirdImage from "./assets/third.jpg";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageIndex: 0,
      rotation: '0deg'
    };
  }

  nextImage = () => {
    if (this.state.imageIndex === 2) {
      this.setState({
        imageIndex: 0
      });
    } else {
      this.setState({
        imageIndex: this.state.imageIndex + 1
      });
    }
  };

  rotateImage = () => {
    if(this.state.rotation === '0deg') {
      this.setState({
        rotation: '90deg'
      })
    } else {
      this.setState({
        rotation: '0deg'
      })
    }
  }

  render() {
    let imageToShow = null;
    if (this.state.imageIndex === 0) {
      imageToShow = firstImage;
    } else if (this.state.imageIndex === 1) {
      imageToShow = secondImage;
    } else {
      imageToShow = thirdImage;
    }

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={[styles.image, { transform: [{ rotate: this.state.rotation }] }]} source={imageToShow} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={this.prevImage}>
            <Text style={styles.buttonText}>Previous image</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.nextImage}>
            <Text style={styles.buttonText}>Next image</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={this.rotateImage}>
            <Text style={styles.buttonText}>ROATATE</Text>
          </TouchableHighlight>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  imageContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "80%"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
    height: 50
  },
  buttonText: {
    color: "blue"
  }
});
