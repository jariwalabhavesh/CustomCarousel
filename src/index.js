import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import styles from './style'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const imageWidth = (screenWidth - 45) / 2
const imageHeight = (imageWidth / (2 / 3))
export default class MovieHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarTitle}>MOVIES</Text>
        </View>
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
        <ScrollView
          ref={(ref) => { this.stepCarousel = ref }}
          contentContainerStyle={styles.scrollViewContainerStyle}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          snapToAlignment={"center"}
          onContentSizeChange={this.setTotalPage}
          onMomentumScrollEnd={this.handleScrollEnd}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth, backgroundColor: 'transparent', paddingHorizontal: 15 }}>
            <View style={{ width: (screenWidth - 45) / 2 }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg' }} style={{ width: imageWidth, height: imageHeight }} />
            </View>
            <View style={{ width: (screenWidth - 45) / 2, backgroundColor: 'blue', height: 100 }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/z7FCF54Jvzv9Anxyf82QeqFXXOO.jpg' }} style={{ width: imageWidth, height: imageHeight }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth, backgroundColor: 'transparent', paddingHorizontal: 15 }}>
            <View style={{ width: (screenWidth - 45) / 2 }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/3Nt3v1uzUgfSuVARD1AnI9g9Zl9.jpg' }} style={{ width: imageWidth, height: imageHeight }} />
            </View>
            <View style={{ width: (screenWidth - 45) / 2, backgroundColor: 'blue', height: 100 }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/pThyQovXQrw2m0s9x82twj48Jq4.jpg' }} style={{ width: imageWidth, height: imageHeight }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth, backgroundColor: 'transparent', paddingHorizontal: 15 }}>
            <View style={{ width: (screenWidth - 45) / 2 }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/tgcrYiyG75iDcyk3en9NzZis0dh.jpg' }} style={{ width: imageWidth, height: imageHeight }} />
            </View>
            <View style={{ width: (screenWidth - 45) / 2, backgroundColor: 'blue', height: 100 }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg' }} style={{ width: imageWidth, height: imageHeight }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth, backgroundColor: 'transparent', paddingHorizontal: 15 }}>
            <View style={{ width: (screenWidth - 45) / 2 }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/h6Wi81XNXCjTAcdstiCLRykN3Pa.jpg' }} style={{ width: imageWidth, height: imageHeight }} />
            </View>
            <View style={{ width: (screenWidth - 45) / 2, backgroundColor: 'blue', height: 100 }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/d9PhCnofBEeQGR3lwywTjWKBiXj.jpg' }} style={{ width: imageWidth, height: imageHeight }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth, backgroundColor: 'transparent', paddingHorizontal: 15 }}>
            <View style={{ width: (screenWidth - 45) / 2 }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/qR2sOAnLcdysU1be1PO6Y0pfuR5.jpg' }} style={{ width: imageWidth, height: imageHeight }} />
            </View>
            <View style={{ width: (screenWidth - 45) / 2, backgroundColor: 'blue', height: 100 }}>
              <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/yTIsWzMUsrKdNngIEf15Iz1n3SS.jpg' }} style={{ width: imageWidth, height: imageHeight }} />
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Prev</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
