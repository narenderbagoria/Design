import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = ({navigation}) => {
  const storyInfo = [
    {
      id: 1,
      name: 'Your story',
      image: require('../assets/images/userimg.jpg'),
    },
    {
      id: 1,
      name: 'Picabo',
      image: require('../assets/images/userimg.jpg'),
    },
    {
      id: 1,
      name: 'Satuart',
      image: require('../assets/images/userimg.jpg'),
    },
    {
      id: 1,
      name: 'Dexter',
      image: require('../assets/images/userimg.jpg'),
    },
    {
      id: 1,
      name: 'Dexter',
      image: require('../assets/images/userimg.jpg'),
    },
    {
      id: 1,
      name: 'Dexter',
      image: require('../assets/images/userimg.jpg'),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.headertxtstyle}>
            <Text style={styles.headertxt}>Cali's Dairy!!</Text>
          </View>
          <View style={styles.iconWrapper}>
            <View style={styles.iconstyle}>
              <Icon name="plus" size={20} />
            </View>
            <View style={styles.iconstyle}>
              <Icon name="search1" size={20} />
            </View>
            <View style={styles.iconstyle}>
              <Icon name="message1" size={20} />
            </View>
          </View>
        </View>
        <View style={styles.navstyle}>
          <TouchableOpacity>
            <Icon name="home" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="shoppingcart" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search1" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('User')}>
            <Icon name="user" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="bells" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="navicon" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{paddingVertical: 10}}>
          {storyInfo.map((data, index) => {
            return (
              <View
                style={{
                  paddingHorizontal: 8,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: 'lightblue',
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: 68,
                    height: 68,
                    backgroundColor: 'white',
                    borderWidth: 1.8,
                    borderRadius: 100,
                    borderColor: 'lightblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={data.image}
                    style={{
                      resizeMode: 'cover',
                      width: '92%',
                      height: '92%',
                      borderRadius: 100,
                      backgroundColor: 'orange',
                    }}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    color: 'black',
                  }}>
                  {data.name}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <ScrollView>
        <View
          style={{backgroundColor: 'lightgrey', width: '100%', height: 5}}
        />
        <View style={styles.imgtextcontainer}>
          <Image
            source={require('../assets/images/userimg.jpg')}
            style={styles.imgstyle}
          />
          <View style={{paddingLeft: 12}}>
            <Text style={styles.txtstyle}>Shop-Dope</Text>
            <Text>2d ago</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text>
            Today, i am experienced the most blissfull ride outside.The air is
            fresh and It feel amazing
          </Text>
        </View>
        <View style={{marginVertical: 10}}>
          <Image
            source={require('../assets/images/midimg.jpg')}
            style={styles.midimgstyle}
          />
        </View>
        <View style={styles.commentcontainer}>
          <Image
            source={require('../assets/images/userimg.jpg')}
            style={styles.cmntimgstyle}
          />
          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={styles.cmnttxtstyle}>Aliciamarks</Text>
              <View style={{paddingLeft: 5}}>
                <Text>So good, I also want to do a bike ride!</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 5,
              }}>
              <View>
                <Text>09 hours</Text>
              </View>
              <View style={{paddingLeft: 20}}>
                <Text>1 Likes</Text>
              </View>
              <View style={{paddingLeft: 20}}>
                <Text>Reply</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{backgroundColor: 'lightgrey', width: '100%', height: 5}}
        />
        <View style={styles.imgtextcontainer}>
          <Image
            source={require('../assets/images/userimg.jpg')}
            style={styles.imgstyle}
          />
          <View style={{paddingLeft: 12}}>
            <Text style={styles.txtstyle}>Shop-Dope</Text>
            <Text>2d ago</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text>
            Today, i am experienced the most blissfull ride outside.The air is
            fresh and It feel amazing
          </Text>
        </View>
        <View style={{marginVertical: 10}}>
          <Image
            source={require('../assets/images/midimg.jpg')}
            style={styles.midimgstyle}
          />
        </View>
        <View style={styles.commentcontainer}>
          <Image
            source={require('../assets/images/userimg.jpg')}
            style={styles.cmntimgstyle}
          />
          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={styles.cmnttxtstyle}>Aliciamarks</Text>
              <View style={{paddingLeft: 5}}>
                <Text>So good, I also want to do a bike ride!</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 5,
              }}>
              <View>
                <Text>09 hours</Text>
              </View>
              <View style={{paddingLeft: 20}}>
                <Text>1 Likes</Text>
              </View>
              <View style={{paddingLeft: 20}}>
                <Text>Reply</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 15,
  },
  headertxtstyle: {
    paddingVertical: 15,
  },
  headertxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
  },
  iconstyle: {
    paddingLeft: 10,
  },
  navstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgtextcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  imgstyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  txtstyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  midimgstyle: {
    height: windowWidth * 0.5,
    width: windowHeight * 0.5,
  },
  cmntimgstyle: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  commentcontainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 10,
  },
  cmnttxtstyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
