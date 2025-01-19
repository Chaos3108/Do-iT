import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({name}: {name: String}) => {
  return (
    <View style={styles.headerContainer}>
      <Icon name="arrow-back-ios" size={25} />
      <View style={styles.TextContainer}>
        <Text style={styles.headertext}>{name}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 45,
  },
  headertext: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    color: '#000957',
    textAlign:'center'
  },
  TextContainer:{
  }
});
