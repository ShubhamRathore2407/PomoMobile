import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const fieldToIconMap: any = {
  name: 'person-outline',
  email: 'mail-outline',
  phone: 'call-outline',
};

interface Props {
  field: string;
  value: string | undefined;
}

const ProfileItem: React.FC<Props> = ({field, value}) => {
  return (
    <View style={styles.container}>
      <View>
        <Icon type={IconType.Ionicons} size={22} name={fieldToIconMap[field]} />
      </View>
      <View>
        <View style={styles.field}>
          <Text style={styles.title}>{field }</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.value}>{value?.toString() || "- - -"}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileItem;
