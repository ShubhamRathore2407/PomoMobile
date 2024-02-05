import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'

interface FieldItemProps {
    id: string | number,
    title: string,
    value: string,
    icon: string
}

interface Props {
    data: FieldItemProps,
}


const ProfileItem: React.FC<Props> = ({ data }) => {
    return (
        <View style={styles.container}>
            <View>
                <Icon type={IconType.Ionicons}size={22} name={data.icon} />
            </View>
            <View>
                <View style={styles.field}>
                    <Text style={styles.title}>{data.title}</Text>
                </View>
                <View style={styles.field}>
                    <Text style={styles.value}>{data.value}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileItem

