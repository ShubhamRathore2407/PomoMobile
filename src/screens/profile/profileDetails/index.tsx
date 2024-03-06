import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {useRealm} from '@realm/react';
import ProfileItem from '../profileItem';
import {ProfileProps} from '../../../services/models';

const ProfileDetails = () => {
  const [profile, setProfile] = useState<ProfileProps>();
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

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.imageContainer}>
          <View style={styles.outerImageContainer}>
            <View style={styles.innerImageContainer}>
              <Image
                source={{uri: profile?.image || placeholderImage}}
                style={styles.profileImage}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <ProfileItem field="name" value={profile?.name} />
        <ProfileItem field="email" value={profile?.email} />
        <ProfileItem
          field="phone"
          value={
            profile?.phone && profile?.phone?.length > 5 ? profile?.phone : ''
          }
        />
      </View>
    </View>
  );
};

export default ProfileDetails;
