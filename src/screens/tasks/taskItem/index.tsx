import React, { useMemo } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import createStyles from "../styles"
import { TaskItemProps } from '../../../services/models';
import WelcomeHeader from '../../../components/welcomeHeader';
import { HeaderLevel } from '../../../utils/constants/constants';
import Timer from '../../../components/timer';
import { palette } from '../../../utils/theme/themes';
// import CustomSwipeableWrapper from '../../../utils/customComponents/CustomSwipeableWrapper';

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface Props {
    style?: CustomStyleProp;
    data: TaskItemProps;
}

const TaskItem: React.FC<Props> = ({ data }) => {
    const styles = useMemo(() => createStyles(), []);
    const { name, description } = data;

    return (
        // <CustomSwipeableWrapper swipeSensitivity={50} onLeftSwipe={() => {console.log("left")}} onRightSwipe={() => (console.log("right"))}>
            <View style={[styles.taskItem]}>
                <WelcomeHeader
                    title={name}
                    description={description}
                    headerLevel={HeaderLevel.H3}
                    titleColor={palette.lightGray}
                    descriptionColor={palette.gray}
                    customStyles={{ marginBottom: 20 }}
                />
                <View style={styles.contentContainer}>
                    <Timer initialTime={0} />
                </View>
            </View>
        // </CustomSwipeableWrapper>
    );
};

export default TaskItem