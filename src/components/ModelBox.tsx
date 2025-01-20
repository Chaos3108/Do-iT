import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import colors from '../constants/colors';

const ModelBox = ({
  isVisible,
  setIsEditVisible,
  title,
  setTitle,
  description,
  setDescription,
  category,
  setCategory,
  updateTask,
  id,
}: {
  isVisible: boolean;
  setIsEditVisible: any;
  data: any;
  title: string;
  setTitle: any;
  description: any;
  setDescription: any;
  category: string;
  setCategory: any;
  updateTask: any;
  id: string;
}) => {
  console.log('hiellooo', isVisible);
  return (
    <View>
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsEditVisible(false)} // Dismiss modal when tapping outside
        style={styles.bottomModal} // Apply bottom positioning
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalHeader}>Edit Task</Text>
          <View style={{padding: 10}}>
            <TextInput
              value={title}
              onChangeText={text => {
                setTitle(text);
              }}
              style={[styles.editTaskText, styles.elevation]}
              placeholder="Edit task title "
            />
            <TextInput
              value={description}
              onChangeText={text => {
                setDescription(text);
              }}
              style={styles.descriptionText}
              placeholder="Edit Description"
            />
            <TextInput
              value={category}
              onChangeText={text => {
                setCategory(text);
              }}
              style={styles.editTaskText}
              placeholder="Edit category"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                updateTask(id, title, description, category);
              }}
              style={styles.updateButton}>
              <Text style={styles.updateText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsEditVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModelBox;
const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end', // Align modal to the bottom
    margin: 0, // Remove default margins for full-width effect
  },
  modalContent: {
    height: '60%', // Set modal height to 50% of the screen
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'space-between', // Space out items vertically
  },
  modalHeader: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
    color: colors.brandColor,
  },

  editTaskText: {
    width: 300,
    height: 60,
    backgroundColor: colors.white,
    elevation: 10,
    shadowColor: colors.brandColor,
    marginBottom: 20,
    textAlign: 'center',
  },
  descriptionText: {
    width: 300,
    height: 120,
    elevation: 10,
    shadowColor: colors.brandColor,
    backgroundColor: colors.white,
    textAlign: 'center',
    marginBottom: 20,
  },
  elevation: {elevation: 10, shadowColor: colors.brandColor},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  updateButton: {
    backgroundColor: colors.brandColor,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  updateText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Poppins-SemiBold',
  },
  closeButton: {
    backgroundColor: colors.white,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 10,
    shadowColor: colors.brandColor,
  },
  closeText: {
    textAlign: 'center',
    color: colors.brandColor,
    fontFamily: 'Poppins-SemiBold',
  },
});
