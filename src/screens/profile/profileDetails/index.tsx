import React, {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {View, Image, TouchableOpacity} from 'react-native';
import {useRealm} from '@realm/react';

import {ProfileProps} from '../../../services/models';
import {Profile} from '../../../realm/ProfileModel';
import ProfileItem from '../profileItem';

import styles from './styles';

const ProfileDetails = () => {
  const [profile, setProfile] = useState<any>();
  const realm = useRealm();
  const placeholderImage =
    'https://previews.123rf.com/images/powerart/powerart1708/powerart170804949/84519682-isolated-programmer-icon-symbol-on-clean-background-vector-coder-element-in-trendy-style.jpg';

  useEffect(() => {
    const profiles = realm.objects('Profile');

    const handleChange = () => {
      const updatedProfile = profiles[0];
      setProfile(updatedProfile as unknown as ProfileProps);
    };

    profiles.addListener(handleChange);

    return () => {
      profiles.removeListener(handleChange);
    };
  }, [realm]);

  // const [selectedImage, setSelectedImage] = useState(null);
  const handleImageSelect = () => {
    const options: any = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;

        try {
          if (profile) {
            realm.write(() => {
              profile.image = imageUri;
            });
          } else {
            let user: ProfileProps = {
              name: '',
              email: '',
              image: imageUri,
              phone: '',
            };
            realm.write(() => {
              realm.create('Profile', Profile.generate(user));
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.outerImageContainer}>
          <TouchableOpacity onPress={handleImageSelect}>
            <View style={styles.innerImageContainer}>
              <Image
                source={{
                  uri: profile?.image || placeholderImage,
                }}
                style={styles.profileImage}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ProfileItem field="name" value={profile?.name} />
        <ProfileItem field="email" value={profile?.email} />
        <ProfileItem
          field="phone"
          value={profile?.phone && profile?.phone !== 0 ? profile?.phone : ''}
        />
      </View>
    </View>
  );
};

export default ProfileDetails;
