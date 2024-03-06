import React from "react";
import { View } from "react-native";
import HeaderIcon from "../Icons/headerIcon";
import styles from "./styles";

interface Props {

}

const Header: React.FC<Props> = () => {

    return (
        <View style={styles.container}>
            <HeaderIcon />
            {/* <Image resizeMode="cover" source={{uri : profileURI}} style={styles.profilePicImageStyle} /> */}
        </View>
    )
}

export default Header