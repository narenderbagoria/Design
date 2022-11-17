import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const User = () => {
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
  ];
  const imagesArr = [
    {
      id: 1,
      images: require('../assets/images/userimg.jpg'),
    },
    {
      id: 2,
      images: require('../assets/images/userimg.jpg'),
    },
    {
      id: 3,
      images: require('../assets/images/userimg.jpg'),
    },
    {
      id: 4,
      images: require('../assets/images/userimg.jpg'),
    },
    {
      id: 5,
      images: require('../assets/images/userimg.jpg'),
    },
    {
      id: 6,
      images: require('../assets/images/userimg.jpg'),
    },
    {
      id: 7,
      images: require('../assets/images/userimg.jpg'),
    },
    {
      id: 8,
      images: require('../assets/images/userimg.jpg'),
    },
    {
      id: 9,
      images: require('../assets/images/userimg.jpg'),
    },
  ];
  const renderItem = item => {
    return (
      <View style={{flex: 1, alignItems: 'center', padding: 1}}>
        <Image
          source={item.item.images}
          style={{
            width: windowWidth / 3,
            height: windowHeight / 4,
          }}
        />
      </View>
    );
  };
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
          <TouchableOpacity>
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
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/images/userimg.jpg')}
          style={styles.imgstyle}
        />
        <View style={{paddingLeft: 30}}>
          <Text>118</Text>
          <Text>Post</Text>
        </View>
        <View style={{paddingLeft: 30}}>
          <Text>24.6K</Text>
          <Text>Following</Text>
        </View>
        <View style={{paddingLeft: 30}}>
          <Text>13.6K</Text>
          <Text>Followers</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View>
          <Text style={{color: 'lightblue', fontWeight: 'bold', fontSize: 16}}>
            Umair Siddhqui
          </Text>
          <Text style={{color: 'black', fontSize: 14}}>Sec-23,FBD,Delhi</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Text
            style={{
              color: 'white',
              backgroundColor: 'lightblue',
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 5,
            }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
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
      <View style={{paddingLeft: 20, flexDirection: 'row', marginVertical: 10}}>
        <View>
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                color: 'lightblue',
                paddingHorizontal: 35,
                paddingVertical: 10,
                borderRadius: 5,
                borderColor: 'lightblue',
                borderWidth: 1,
              }}>
              Pet
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingLeft: 20}}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                color: 'white',
                backgroundColor: 'lightblue',
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 5,
              }}>
              My Post
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={imagesArr}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default User;

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
  headertxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  navstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgstyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
