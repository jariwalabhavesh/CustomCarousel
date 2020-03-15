import { StyleSheet, Dimensions } from 'react-native'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')


export const cardPerSlide = 2
export const cardPadding = 15
export const paddingAround = cardPadding * 2 // slide horizontal padding
export const cardBetweenPadding = cardPadding * (cardPerSlide - 1)
export const totalPadding = paddingAround + cardBetweenPadding
export const imageWidth = (screenWidth - totalPadding) / cardPerSlide
export const imageHeight = (imageWidth / (2 / 3))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  navBar: {
    width: '100%',
    height: 70,
    backgroundColor: '#0D0D0D',
    alignContent: 'center',
    justifyContent: 'center'
  },
  navBarTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: 'center'
  },
  scrollViewContainerStyle: {
    alignContent: 'center', justifyContent: 'center', alignItems: 'center', height: imageHeight + 50
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: '#0D0D0D',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  disable: {
    opacity: 0.5
  },
  slide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth,
    paddingHorizontal: cardPadding
  },
  imageCard: {
    width: imageWidth,
    height: imageHeight
  }
});

export default styles