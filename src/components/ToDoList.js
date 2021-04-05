import React, {Component} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  ScrollView,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import {inject, observer} from 'mobx-react';
var USER_ID = 0;

@inject('store')
@observer
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalVisible: false,
      updateModalVisible: false,
      newTitle: '',
      newNote: '',
      updateTitle: '',
      updateNote: '',
      updatedID: '',
      isTitleFocused: false,
      isContentFocused: false,
    };
    this.setAddModalVisible = this.setAddModalVisible.bind(this);
    this.setNewTitle = this.setNewTitle.bind(this);
    this.setNewNote = this.setNewNote.bind(this);

    this.submitNewModalData = this.submitNewModalData.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setItemData = this.setItemData.bind(this);

    this.setUpdateModalVisible = this.setUpdateModalVisible.bind(this);
    this.setUpdateTitle = this.setUpdateTitle.bind(this);
    this.setUpdateNote = this.setUpdateNote.bind(this);
    this.submitUpdatedModalData = this.submitUpdatedModalData.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }

  submitNewModalData() {
    this.props.store.addData({
      id: USER_ID++,
      title: this.state.newTitle,
      note: this.state.newNote,
    });
    this.setState({addModalVisible: false, newTitle: '', newNote: ''});
  }

  setAddModalVisible(visible) {
    this.setState({addModalVisible: visible});
  }

  setUpdateModalVisible(visible) {
    this.setState({updateModalVisible: visible});
  }

  closeModal() {
    this.setState({addModalVisible: false, newTitle: '', newNote: ''});
  }
  setNewTitle(title) {
    this.setState({newTitle: title});
  }

  setNewNote(note) {
    this.setState({newNote: note});
  }

  deleteItem(id) {
    Alert.alert('Delete Item', 'Are you sure you want to delete this item ?', [
      {text: 'Yes', onPress: () => this.props.store.removeData(id)},
      {text: 'No'},
    ]);
  }

  setItemData(data) {
    this.setState({
      updateTitle: data.title,
      updateNote: data.note,
      updatedID: data.id,
      updateModalVisible: true,
    });
  }

  setUpdateTitle(title) {
    this.setState({updateTitle: title});
  }

  setUpdateNote(note) {
    this.setState({updateNote: note});
  }

  submitUpdatedModalData() {
    this.props.store.updateData({
      title: this.state.updateTitle,
      note: this.state.updateNote,
      id: this.state.updatedID,
    });
    this.setState({
      updateModalVisible: false,
      updateTitle: '',
      updateNote: '',
      updatedID: '',
    });
  }

  render() {
    return (
      <>
        <View style={style.header}>
          <Text style={style.headerText}>Simple Note Taker</Text>
        </View>
        {this.props.store.content.length <= 0 && (
          <View style={style.noList}>
            <Text style={style.noListText}>You do not have any notes</Text>
          </View>
        )}

        {this.props.store.content.length > 0 && (
          <ScrollView>
            {this.props.store.content.map((data, index) => (
              <TouchableOpacity
                onPress={() => this.setItemData(data)}
                onLongPress={() => this.deleteItem(data.id)}
                key={index}
                style={style.container}>
                <Text style={style.titleText}>{data.title}</Text>
                <Text style={style.noteText}>{data.note}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
        <TouchableOpacity
          style={style.addNewItem}
          onPress={() => this.setAddModalVisible(true)}>
          <Icon name="plus" size={20} color={'#3f9485'} />
          <Text style={style.addItemText}>Add New Note</Text>
        </TouchableOpacity>
        <SafeAreaView />

        <Modal
          animationType="slide"
          visible={this.state.addModalVisible}
          onRequestClose={() => {
            this.setAddModalVisible(!this.state.addModalVisible);
          }}>
          <View style={style.modalContainer}>
            <View style={style.modalHeader}>
              <Text style={style.modalHeaderTitle}>Add a new note</Text>
              <TouchableOpacity
                style={style.iconModal}
                onPress={this.closeModal}>
                <Icon name="closecircle" size={40} />
              </TouchableOpacity>
            </View>
            <View style={style.contentContainer}>
              <TextInput
                style={
                  this.state.isTitleFocused
                    ? style.focusedInput
                    : style.textInput
                }
                placeholder="Add Title Here"
                onChangeText={(text) => this.setNewTitle(text)}
                onFocus={() => this.setState({isTitleFocused: true})}
                onBlur={() => this.setState({isTitleFocused: false})}
              />
              <TextInput
                multiline={true}
                style={[
                  this.state.isContentFocused
                    ? style.focusedTextArea
                    : style.textInput,
                  style.textArea,
                ]}
                placeholder="Add Note Here"
                blurOnSubmit={true}
                onChangeText={(text) => this.setNewNote(text)}
                onFocus={() => this.setState({isContentFocused: true})}
                onBlur={() => this.setState({isContentFocused: false})}
              />
            </View>

            <TouchableOpacity
              style={
                this.state.newTitle !== ''
                  ? style.submitModal
                  : style.emptysubmitModal
              }
              onPress={this.submitNewModalData}>
              <Icon name="check" size={30} />
            </TouchableOpacity>
          </View>
        </Modal>

        {/* update */}

        <Modal
          animationType="slide"
          visible={this.state.updateModalVisible}
          onRequestClose={() => {
            this.setUpdateModalVisible(!this.state.updateModalVisible);
          }}>
          <View style={style.modalContainer}>
            <View style={style.modalHeader}>
              <Text style={style.modalHeaderTitle}>Update note</Text>
              <TouchableOpacity
                style={style.iconModal}
                onPress={() =>
                  this.setUpdateModalVisible(!this.state.updateModalVisible)
                }>
                <Icon name="closecircle" size={40} />
              </TouchableOpacity>
            </View>
            <View style={style.contentContainer}>
              <TextInput
                style={
                  this.state.isTitleFocused
                    ? style.focusedInput
                    : style.textInput
                }
                placeholder="Add Title Here"
                value={this.state.updateTitle}
                onChangeText={(text) => this.setUpdateTitle(text)}
                onFocus={() => this.setState({isTitleFocused: true})}
                onBlur={() => this.setState({isTitleFocused: false})}
              />
              <TextInput
                multiline={true}
                style={[
                  this.state.isContentFocused
                    ? style.focusedTextArea
                    : style.textInput,
                  style.textArea,
                ]}
                placeholder="Add Note Here"
                value={this.state.updateNote}
                blurOnSubmit={true}
                onChangeText={(text) => this.setUpdateNote(text)}
                onFocus={() => this.setState({isContentFocused: true})}
                onBlur={() => this.setState({isContentFocused: false})}
              />
            </View>

            <TouchableOpacity
              style={style.submitModal}
              onPress={this.submitUpdatedModalData}>
              <Icon name="check" size={30} />
            </TouchableOpacity>
          </View>
        </Modal>
      </>
    );
  }
}
export default ToDoList;

const style = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#56c3b0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    marginTop: 30,
    color: '#181818',
    fontSize: 20,
    fontWeight: '300',
  },
  noList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noListText: {
    fontSize: 18,
    fontWeight: '400',
  },
  addNewItem: {
    backgroundColor: '#60dac4',

    flexDirection: 'row',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 40 : 20,
    right: 20,
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 100,
    zIndex: 9999,
  },
  addItemText: {
    fontSize: 15,
    alignSelf: 'center',
    paddingLeft: 10,
    color: '#3f9485',
    fontWeight: '600',
  },

  modalContainer: {flex: 1},
  modalHeader: {
    height: 90,
    backgroundColor: '#56c3b0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeaderTitle: {
    marginTop: 30,
    color: '#181818',
    fontSize: 20,
    fontWeight: '300',
  },
  iconModal: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  contentContainer: {
    padding: 15,
  },
  textInput: {
    borderColor: '#EAEDED',
    borderWidth: 1,
    marginVertical: 10,
    padding: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  focusedInput: {
    borderColor: 'purple',
    borderWidth: 2,
    marginVertical: 10,
    padding: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  focusedTextArea: {
    borderBottomColor: 'purple',
    borderBottomWidth: 2,
    marginVertical: 10,
    padding: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  textArea: {
    height: 350,
    textAlignVertical: 'top',
    backgroundColor: '#F2F4F4',
    fontSize: 15,
    fontWeight: '400',
  },
  emptysubmitModal: {
    position: 'absolute',
    bottom: 30,
    right: 25,
    padding: 10,
    backgroundColor: '#D0D3D4',
    borderRadius: 100,
  },
  submitModal: {
    position: 'absolute',
    bottom: 30,
    right: 25,
    padding: 10,
    backgroundColor: '#60dac4',
    borderRadius: 100,
  },
  container: {
    margin: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
  },
  noteText: {
    fontSize: 15,
    fontWeight: '300',
    color: '#797D7F',
  },
});
