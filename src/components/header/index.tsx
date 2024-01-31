import React from "react";
import { View } from "react-native";
import HeaderIcon from "../Icons/headerIcon";
import styles from "./styles";


const profileURI =
  // eslint-disable-next-line max-len
  "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80";


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