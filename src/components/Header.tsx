import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Header = ({name}: {name: String}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Icon
        onPress={() => {
          navigation.goBack();
        }}
        name="arrow-back-ios"
        size={20}
      />
      <Text style={styles.headertext}>{name}</Text>
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
    textAlign: 'center',
    marginLeft: 40,
  },
});
