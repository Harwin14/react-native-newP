import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import profile from '../img/profil.jpg';
const Layout = () => {
  return (
    <View style={{backgroundColor: '#f4f7f7'}}>

      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          marginLeft: 5,
          marginRight: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          
        <Image
          source={profile}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginHorizontal: 5,
          }}
        />
        <View>
          <Text>75</Text>
          <Text>Post</Text>
        </View>
        <View>
          <Text>247k</Text>
          <Text>Followers</Text>
        </View>
        <View>
          <Text>240</Text>
          <Text>Followings</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 10, flex: 1}}>
        <Text
          style={{
            marginVertical: 5,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#2d3436',
          }}>
          Arrazka Juliandra
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#e9f8fa',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'grey',
            borderRadius: 5,
            alignItems: 'center',
            padding: 3,
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
            }}>
            Edit profile
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 3,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#e9f8fa',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'grey',
              borderRadius: 5,
              alignItems: 'center',
              padding: 3,
              flex: 1,
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
              }}>
              Promotions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#e9f8fa',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'grey',
              borderRadius: 5,
              alignItems: 'center',
              padding: 3,
              marginHorizontal: 3,
              flex: 1,
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
              }}>
              Insights
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#e9f8fa',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'grey',
              borderRadius: 5,
              alignItems: 'center',
              padding: 3,
              flex: 1,
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
              }}>
              Contact
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            color: 'black',
            fontWeight: '500',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 60,
              height: 60,
              borderRadius: 30,
              borderStyle: 'solid',
              borderColor: 'grey',
              borderWidth: 3,
            }}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            New
          </Text>
        </View>
        <View
          style={{
            color: 'black',
            fontWeight: '500',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'grey',
              width: 60,
              height: 60,
              borderRadius: 30,
              borderStyle: 'solid',
              borderColor: 'white',
              borderWidth: 3,
            }}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Bali
          </Text>
        </View>
        <View
          style={{
            color: 'black',
            fontWeight: '500',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'grey',
              width: 60,
              height: 60,
              borderRadius: 30,
              borderStyle: 'solid',
              borderColor: 'white',
              borderWidth: 3,
            }}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Cannes
          </Text>
        </View>
        <View
          style={{
            color: 'black',
            fontWeight: '500',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'grey',
              width: 60,
              height: 60,
              borderRadius: 30,
              borderStyle: 'solid',
              borderColor: 'white',
              borderWidth: 3,
            }}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Hawaii
          </Text>
        </View>
        <View
          style={{
            color: 'black',
            fontWeight: '500',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'grey',
              width: 60,
              height: 60,
              borderRadius: 30,
              borderStyle: 'solid',
              borderColor: 'white',
              borderWidth: 3,
            }}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Maldives
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 3,
        }}>
            <Icon name="th" size={30} color="grey" />
            <Icon name="user-circle" size={30} color="grey" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginVertical: 2,
          gap: 3,
        }}>
        <View style={{backgroundColor: 'grey', flex: 1, height: 130}} />
        <View style={{backgroundColor: 'grey', flex: 1, height: 130}} />
        <View style={{backgroundColor: 'grey', flex: 1, height: 130}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginVertical: 2,
          gap: 3,
        }}>
        <View style={{backgroundColor: 'grey', flex: 1, height: 130}} />
        <View style={{backgroundColor: 'grey', flex: 1, height: 130}} />
        <View style={{backgroundColor: 'grey', flex: 1, height: 130}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginVertical: 2,
          gap: 3,
        }}>  
        <View style={{backgroundColor: 'grey', flex: 1, height: 130}} />
        <View style={{backgroundColor: 'grey', flex: 1, height: 130}} />
        <View style={{backgroundColor: 'grey', flex: 1, height: 130}} />
      </View>
    </View>
  );
};

export default Layout;
