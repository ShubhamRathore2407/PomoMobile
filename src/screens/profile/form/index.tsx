import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {useRealm} from '@realm/react';

import {palette} from '../../../utils/theme/themes';
import {ProfileProps} from '../../../services/models';
import {Profile} from '../../../realm/ProfileModel';

import styles from './styles';

type Props = {
  setShowForm: any;
};

const Form: React.FC<Props> = ({setShowForm}) => {
  const realm = useRealm();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>();

  const handleSaveProfile = () => {
    const user: ProfileProps = {
      name,
      email,
      phone: phone && phone?.length > 5 ? phone : '',
      image: '',
    };

    const profile = realm.objects<any>('Profile')[0];

    try {
      if (profile) {
        realm.write(() => {
          profile.name = name;
          profile.email = email;
          profile.phone = Number(phone);
          profile.image;
        });
      } else {
        realm.write(() => {
          realm.create('Profile', Profile.generate(user));
        });
      }
    } catch (error) {
      console.log(error);
    }
    setShowForm(false);
  };

  useEffect(() => {
    const profile = realm.objects<any>('Profile')[0];

    if (profile) {
      setName(profile.name || '');
      setEmail(profile.email || '');
      setPhone(profile.phone === 0 ? '' : profile?.phone.toString());
    }
  }, []);

  return (
    <View style={styles.formCard}>
      <View style={styles.datePickerButton}>
        <Icon
          onPress={() => setShowForm(false)}
          type={IconType.Ionicons}
          name="close-outline"
          size={26}
          color="gray"
        />
        <View style={styles.saveContainer}>
          <TouchableOpacity
            onPress={handleSaveProfile}
            style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
        placeholderTextColor={palette.title}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        multiline
        placeholderTextColor={palette.title}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        onChangeText={text => setPhone(text)}
        value={phone?.toString()}
        placeholderTextColor={palette.title}
        keyboardType="numeric"
      />
    </View>
  );
};

export default Form;
