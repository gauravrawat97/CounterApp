import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {getAllEmployees, addEmployee, sortData, searchData} from './Database';
export default class EmployeeHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showModal: false,
      newID: '',
      newName: '',
      newSalary: '',
      newDesignation: '',
      searchText: '',
    };
    this.renderData = this.renderData.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.setData = this.setData.bind(this);
    this.submitData = this.submitData.bind(this);
    this.sortData = this.sortData.bind(this);
    this.searchData = this.searchData.bind(this);

    this.setModalVisible = this.setModalVisible.bind(this);
  }
  componentDidMount() {
    this.renderData();
  }
  setModalVisible(visible) {
    this.setState({
      newID: '',
      newName: '',
      newSalary: '',
      newDesignation: '',
      showModal: visible,
    });
  }

  setData(type, value) {
    switch (type) {
      case 'ID': {
        this.setState({newID: value});
        break;
      }
      case 'Name': {
        this.setState({newName: value});
        break;
      }
      case 'Designation': {
        this.setState({newDesignation: value});
        break;
      }
      case 'Salary': {
        this.setState({newSalary: value});

        break;
      }
    }
  }

  submitData() {
    const {newID, newName, newDesignation, newSalary} = this.state;

    let alphacheck = /^[A-Z]+$/i;
    let numcheck = /^[0-9]*$/;
    if (newID === '') {
      Alert.alert('Empty ID', 'Please Fill the ID');
    } else if (newName === '') {
      Alert.alert('Empty Name', 'Please Fill the Name');
    } else if (newDesignation === '') {
      Alert.alert('Empty Designation', 'Please Fill the Designation');
    } else if (newSalary === '') {
      Alert.alert('Empty Salary', 'Please Fill the Salary');
    } else if (!alphacheck.test(newName)) {
      Alert.alert('Employee Name', 'Use alphabets only');
    } else if (!alphacheck.test(newDesignation)) {
      Alert.alert('Designation', 'Use alphabets only');
    } else if (!numcheck.test(newID)) {
      Alert.alert('ID', 'Use numbers only');
    } else if (!numcheck.test(newSalary)) {
      Alert.alert('Designation', 'Use alphabets only');
    } else if (newSalary > 50000) {
      Alert.alert('Salary Alert', 'Salary more than 50,000');
      this.setState({newSalary: ''});
    } else {
      this.setState({
        newID: '',
        newName: '',
        newSalary: '',
        newDesignation: '',
        showModal: false,
      });
      addEmployee(newID, newName, newDesignation, newSalary);
    }
  }

  renderData() {
    this.setState({data: getAllEmployees()});
  }
  renderItems({item}) {
    return (
      <View style={style.dataContainer}>
        <View style={style.dataContentContainer}>
          <Icon name={'idcard'} size={20} color={'#59114D'} />
          <Text style={style.dataContent}>{item.empID}</Text>
        </View>
        <View style={style.dataContentContainer}>
          <Icon name={'user'} size={20} color={'#59114D'} />
          <Text style={style.dataContent}>{item.name}</Text>
        </View>
        <View style={style.dataContentContainer}>
          <Icon name={'book'} size={20} color={'#59114D'} />
          <Text style={style.dataContent}>{item.designation}</Text>
        </View>
        <View style={style.dataContentContainer}>
          <Icon name={'bank'} size={20} color={'#59114D'} />
          <Text style={style.dataContent}>{item.salary}</Text>
        </View>
      </View>
    );
  }

  sortData(type) {
    if (type === 'asc') {
      this.setState({data: sortData('asc')});
    } else {
      this.setState({data: sortData('desc')});
    }
  }

  searchData(value) {
    this.setState({data: searchData(value), searchText: value});
  }
  render() {
    return (
      <SafeAreaView style={style.container}>
        <View style={style.header}>
          <Text style={style.headerText}>Employee List</Text>
          <TouchableOpacity
            style={style.iconContainer}
            onPress={() => this.setModalVisible(!this.state.showModal)}>
            <Icon name={'pluscircleo'} size={35} color={'#ECE5F0'} />
          </TouchableOpacity>
        </View>

        {((this.state.data.length > 2 && this.state.searchText === '') ||
          this.state.searchText !== '') && (
          <View style={style.filterContainer}>
            <View style={style.filterInput}>
              <TextInput
                placeholder="Enter employee name"
                placeholderTextColor={'#003B36'}
                onChangeText={(text) => this.searchData(text)}
                value={this.state.searchText}
              />
            </View>
            <View style={style.sortBtn}>
              <TouchableOpacity onPress={() => this.sortData('asc')}>
                <Icon name={'caretup'} size={25} color={'#003B36'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.sortData('desc')}>
                <Icon name={'caretdown'} size={25} color={'#003B36'} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        {this.state.data.length > 0 ? (
          <FlatList
            data={this.state.data}
            renderItem={this.renderItems}
            keyExtractor={(item, index) => item + index}
            numColumns={2}
          />
        ) : (
          <View style={style.noData}>
            <Text style={style.noDataText}>
              No employees found. Please Add employee
            </Text>
          </View>
        )}

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={() => this.setModalVisible(!this.state.showModal)}>
          <View style={style.modalContainer}>
            <TouchableOpacity
              style={style.modalClose}
              onPress={() => this.setModalVisible(!this.state.showModal)}>
              <Icon size={40} name={'closecircle'} color={'#59114D'} />
            </TouchableOpacity>
            <View style={style.modalContentContainer}>
              <Text style={style.modalContentHeader}>Add New Employee</Text>
            </View>
            <View style={style.textInputs}>
              <View style={style.textInputContainer}>
                <Icon name={'idcard'} size={20} color={'#59114D'} />
                <TextInput
                  style={style.textInput}
                  placeholder="ID"
                  keyboardType={'numeric'}
                  placeholderTextColor={'#59114D'}
                  onChangeText={(text) => this.setData('ID', text)}
                  value={this.state.newID}
                />
              </View>
              <View style={style.textInputContainer}>
                <Icon name={'user'} size={20} color={'#59114D'} />
                <TextInput
                  style={style.textInput}
                  placeholder="Name"
                  placeholderTextColor={'#59114D'}
                  onChangeText={(text) => this.setData('Name', text)}
                  value={this.state.newName}
                />
              </View>
              <View style={style.textInputContainer}>
                <Icon name={'book'} size={20} color={'#59114D'} />
                <TextInput
                  style={style.textInput}
                  placeholder="Designation"
                  placeholderTextColor={'#59114D'}
                  onChangeText={(text) => this.setData('Designation', text)}
                  value={this.state.newDesignation}
                />
              </View>
              <View style={style.textInputContainer}>
                <Icon name={'bank'} size={20} color={'#59114D'} />
                <TextInput
                  style={style.textInput}
                  placeholder="Salary"
                  keyboardType={'numeric'}
                  placeholderTextColor={'#59114D'}
                  onChangeText={(text) => this.setData('Salary', text)}
                  value={this.state.newSalary}
                />
              </View>
            </View>
            <TouchableOpacity onPress={this.submitData} style={style.modalBtn}>
              <Text style={style.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE5F0',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#012622',
    borderBottomWidth: 5,
    backgroundColor: '#003B36',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '200',
    color: '#ECE5F0',
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  dataContainer: {
    backgroundColor: '#E98A15',
    margin: 10,
    borderRadius: 20,
    padding: 10,
    alignItems: 'flex-start',

    width: '45%',
  },
  dataContentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  dataContent: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
    color: '#59114D',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E98A15',
  },
  modalClose: {
    position: 'absolute',
    right: 10,
    top: 50,
    zIndex: 99999,
  },
  modalContentContainer: {
    marginTop: 90,
  },
  modalContentHeader: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '500',
    color: '#59114D',
  },
  textInputs: {
    marginTop: 20,
    marginHorizontal: 50,
  },
  textInputContainer: {
    flexDirection: 'row',

    borderColor: '#59114D',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
    color: '#ECE5F0',
  },
  modalBtn: {
    marginTop: 10,
    backgroundColor: '#59114D',
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    color: '#ECE5F0',
    fontWeight: '500',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  filterInput: {
    borderColor: '#003B36',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    width: 300,
  },
  sortBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#003B36',
  },
});
