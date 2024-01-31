import React, { useMemo } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { ListItem } from '@rneui/themed';

import createStyles from "../styles"
import { TaskItemProps } from '../../../services/models';
import WelcomeHeader from '../../../components/welcomeHeader';
import { HeaderLevel } from '../../../utils/constants/constants';
import Timer from '../../../components/timer';
import { palette } from '../../../utils/theme/themes';
import { Button } from '@rneui/base';

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface Props {
    style?: CustomStyleProp;
    data: TaskItemProps;
}

const TaskItem: React.FC<Props> = ({ data }) => {
    const styles = useMemo(() => createStyles(), []);

    const { name, description } = data;

    return (
        // <ListItem.Swipeable
        //     leftContent={(reset) => (
        //         <Button
        //             title="Info"
        //             onPress={() => reset()}
        //             icon={{ name: 'info', color: 'white' }}
        //             buttonStyle={{ minHeight: '100%' }}
        //         />
        //     )}
        //     rightContent={(reset) => (
        //         <Button
        //             title="Delete"
        //             onPress={() => reset()}
        //             icon={{ name: 'delete', color: 'white' }}
        //             buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
        //         />
        //     )}
        // >
            <View style={[styles.taskItem]}  >
                <WelcomeHeader
                    name={name}
                    description={description}
                    headerLevel={HeaderLevel.H3}
                    bold
                    textColor={palette.lightGray}
                    descriptionColor={palette.gray}
                    customStyles={{ marginBottom: 20 }}
                />
                <View style={styles.contentContainer} >
                    <Timer initialTime={0} />
                </View>
            </View>
        // </ListItem.Swipeable>
    )
}

export default TaskItem