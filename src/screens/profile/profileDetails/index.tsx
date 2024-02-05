import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import mockData from '../Mock/mockData';
import ProfileItem from '../profileItem';
import styles from './styles';

const ProfileDetails = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.outerImageContainer}>
                    <View style={styles.innerImageContainer}>
                        <Image
                            source={{ uri: 'https://previews.123rf.com/images/powerart/powerart1708/powerart170804949/84519682-isolated-programmer-icon-symbol-on-clean-background-vector-coder-element-in-trendy-style.jpg' }}
                            style={styles.profileImage}
                        />
                    </View>
                </View>
            </View>
            <View>
                <FlatList
                    data={mockData}
                    renderItem={({ item }) => (
                        <ProfileItem data={item} />
                    )}
                />
            </View>
        </View>
    );
};

export default ProfileDetails;
