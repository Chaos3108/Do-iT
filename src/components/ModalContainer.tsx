import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const ModalContainer = ({
  isVisible,
  setIsEditVisible,
}: {
  isVisible: boolean;
  setIsEditVisible: any;
}) => {
  return (
    <View>
      <Modal style={{height: 400}} isVisible={false}>
        <View>
          <Text>I am the modal content!</Text>
          <Text
            onPress={() => {
              setIsEditVisible(!isVisible);
            }}>
            Close
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default ModalContainer;

const styles = StyleSheet.create({});
