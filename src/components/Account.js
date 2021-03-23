import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ItemList from './ItemList';
import CheckBox from '@react-native-community/checkbox';

const FirstItems = [
  {
    name: 'Track Order',
    icon: 'location-outline',
  },
  {
    name: 'Size Chart',
    icon: 'resize',
  },
  {
    name: 'Notifications',
    icon: 'notifications-outline',
  },
  {
    name: 'Store Locator',
    icon: 'locate-outline',
  },
];

const SecondItems = [
  {
    name: 'Country',
    icon: 'globe',
    anotherIcon: true,
    secondaryIcon: 'flag',
    moreText: true,
    text: 'USD',
  },
  {
    name: 'Language',
    icon: 'language-outline',
    moreText: true,
    text: 'ENG',
  },
  {
    name: 'About Us',
    icon: 'person-outline',
  },
  {
    name: 'FAQ',
    icon: 'alert-circle-outline',
  },
  {
    name: 'Shipping & Returns',
    icon: 'md-logo-dropbox',
  },
  {
    name: 'Chat With Us',
    icon: 'ios-chatbox-ellipses-outline',
  },
  {
    name: 'Rate Application',
    icon: 'md-star',
  },
  {
    name: 'Share Application',
    icon: 'thumbs-up-sharp',
  },
  {
    name: 'Privacy Policy',
    icon: 'newspaper-outline',
  },
  {
    name: 'Terms & Conditions',
    icon: 'newspaper-outline',
  },
  {
    name: 'Send us An Email',
    icon: 'mail-outline',
  },
];

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {modalVisible: false, index: 0};
    this.setModalVisible = this.setModalVisible.bind(this);
    this.openModalBox = this.openModalBox.bind(this);
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  openModalBox(indexValue) {
    this.setState({index: indexValue, modalVisible: true});
  }

  renderItem({item}) {
    return <ItemList {...item} />;
  }
  render() {
    return (
      <SafeAreaView style={style.container}>
        <Welcome openModalBox={this.openModalBox} />
        <View style={style.firstItemContainer}>
          <FlatList
            data={FirstItems}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item + index}
          />
        </View>

        <FlatList
          data={SecondItems}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item + index}
        />

        <TouchableOpacity style={style.footer}>
          <Text style={style.footerText}>App Version 4.06(1)</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={style.modalContainer}>
            <TouchableOpacity
              onPress={() => this.setModalVisible(false)}
              style={style.crossBtn}>
              <Icon name="closecircle" size={30} />
            </TouchableOpacity>
            <View style={style.mainContainer}>
              <TouchableOpacity
                onPress={() => this.openModalBox(0)}
                style={this.state.index === 0 ? style.highlight : null}>
                <Text style={style.mainModalHeadingText}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.openModalBox(1)}
                style={this.state.index === 1 ? style.highlight : null}>
                <Text style={style.mainModalHeadingText}>Join</Text>
              </TouchableOpacity>
            </View>
            {this.state.index === 0 ? <SignIn /> : <Join />}
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const Welcome = ({openModalBox}) => (
  <View style={style.welcomeContainer}>
    <View style={style.welcomeTextContainer}>
      <Text style={style.welcomeHeading}>Welcome!</Text>
      <View style={style.joinContainer}>
        <TouchableOpacity onPress={() => openModalBox(0)}>
          <Text style={style.welcometext}>SIGN IN</Text>
        </TouchableOpacity>
        <View style={style.divider} />
        <TouchableOpacity onPress={() => openModalBox(1)}>
          <Text style={style.welcometext}>JOIN</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={style.iconContainer}>
      <Icon name="user" size={50} color="#FFD700" />
    </View>
  </View>
);

const SignIn = () => (
  <View style={style.signInContainer}>
    <TextInput style={style.textInput} placeholder="Your Email Address" />

    <View style={style.passwordContainer}>
      <TextInput placeholder="Password" />
      <Text style={style.passwordText}>Show</Text>
    </View>

    <Text>Forgot Password?</Text>
    <TouchableOpacity style={style.signInBtnContainer}>
      <Text style={style.signInBtnText}>Sign In</Text>
    </TouchableOpacity>
    <Text>OR</Text>
    <AutoLoginBox />
    <TouchableOpacity style={style.signInFooter}>
      <Text style={style.signInFooterText}>Don't have an account? Join</Text>
    </TouchableOpacity>
  </View>
);

const Join = () => (
  <ScrollView contentContainerStyle={style.scrollViewContainer}>
    <View style={style.joinDataContainer}>
      <TextInput style={style.jointextInput} placeholder="First Name" />
      <TextInput style={style.jointextInput} placeholder="Last Name" />
      <TextInput style={style.jointextInput} placeholder="Your Email" />

      <View style={style.joinpasswordContainer}>
        <TextInput placeholder="Password" />
        <Text style={style.joinpasswordText}>Show</Text>
      </View>
      <View style={style.countryCodeContainer}>
        <Icon style={style.countryCode} name="flag" size={20} />
        <TextInput placeholder="123 456 7890" />
      </View>

      <View style={style.genderContainer}>
        <View style={style.genderType}>
          <CheckBox style={style.checkBox} />
          <Text style={style.genderText}>Male</Text>
        </View>
        <View style={style.genderType}>
          <CheckBox style={style.checkBox} />
          <Text style={style.genderText}>Female</Text>
        </View>
      </View>

      <View style={style.acceptOfferContainer}>
        <CheckBox boxType={'square'} style={style.checkBox} />
        <Text style={style.offerText}>
          Be the first to know about arrivals,sales & promos by submitting your
          email You can optout anytime
        </Text>
      </View>

      <TouchableOpacity style={style.joinBtnContainer}>
        <Text style={style.joinBtnText}>Join Now</Text>
      </TouchableOpacity>
      <Text>OR</Text>
      <AutoLoginBox />
      <TouchableOpacity style={style.signInFooter}>
        <Text style={style.signInFooterText}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

const AutoLoginBox = () => (
  <>
    <TouchableOpacity style={[style.BoxContainer, style.Google]}>
      <Icon name="googleplus" size={20} />
      <Text style={style.googleText}>Join With Google</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[style.BoxContainer, style.FaceBook]}>
      <Icon size={20} color="white" name="facebook-square" />
      <Text style={style.boxText}>Join With Facebook</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[style.BoxContainer, style.Apple]}>
      <Icon size={20} color="white" name="apple1" />
      <Text style={style.boxText}>Join With Apple</Text>
    </TouchableOpacity>
  </>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    paddingHorizontal: 10,
  },
  iconContainer: {
    borderColor: '#F0E68C',
    borderWidth: 2,
    padding: 5,
    borderRadius: 50,
    alignSelf: 'center',
  },
  welcomeTextContainer: {
    width: '50%',
    justifyContent: 'space-evenly',
    height: '60%',
    alignSelf: 'center',
  },
  welcomeHeading: {
    fontSize: 25,
    fontWeight: '500',
  },
  joinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  divider: {
    borderColor: 'black',
    borderWidth: 2,
  },
  welcometext: {
    fontSize: 15,
  },

  firstItemContainer: {
    borderTopWidth: 20,
    borderBottomWidth: 20,
    borderColor: '#E0E0E0',
  },
  footer: {
    backgroundColor: '#DCDCDC',
    height: 80,
    alignContent: 'center',
    justifyContent: 'center',
  },
  footerText: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 20,
    fontWeight: '600',
  },
  modalContainer: {
    marginTop: Platform.OS === 'ios' ? 50 : null,
    padding: 10,
  },
  crossBtn: {
    alignSelf: 'flex-end',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  highlight: {
    borderBottomWidth: 5,
    borderBottomColor: 'orange',
    paddingBottom: 20,
  },
  mainModalHeadingText: {
    fontSize: 30,
  },
  signInContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 40 : 10,
  },
  textInput: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    height: 50,
    width: '90%',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  passwordText: {
    position: 'absolute',
    right: 10,
    top: '50%',
  },
  signInBtnContainer: {
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '10%',
    marginVertical: 30,
  },
  signInBtnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  BoxContainer: {
    height: 50,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  Google: {
    borderColor: 'grey',
    borderWidth: 1,
  },
  FaceBook: {
    backgroundColor: '#3b5998',
  },
  Apple: {
    backgroundColor: 'black',
  },
  boxText: {
    color: 'white',
    padding: 5,
    marginLeft: 20,
    fontWeight: '500',
  },
  googleText: {
    padding: 5,
    marginLeft: 20,
    fontWeight: '500',
  },
  signInFooter: {
    backgroundColor: '#DCDCDC',
    height: 80,
    alignContent: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: 30,
  },
  signInFooterText: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 20,
    fontWeight: '600',
  },
  joinDataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },

  jointextInput: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  joinpasswordContainer: {
    flexDirection: 'row',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
  },
  joinpasswordText: {
    position: 'absolute',
    right: 10,
    top: '50%',
  },
  joinBtnContainer: {
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '10%',
    marginVertical: 30,
  },
  joinBtnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    height: 50,
    width: '90%',
    marginVertical: 10,
    borderColor: '#D3D3D3',
    borderWidth: 1,

    paddingHorizontal: 10,
  },
  countryCode: {
    alignSelf: 'center',
    marginRight: 20,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: 10,
  },
  genderType: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 100,
  },
  genderText: {
    fontSize: 16,
  },
  checkBox: {
    width: 20,
    height: 20,
  },
  acceptOfferContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  offerText: {
    fontSize: 14,
    marginLeft: 8,
  },
  scrollViewContainer: {paddingBottom: '50%'},
});

export default Account;
