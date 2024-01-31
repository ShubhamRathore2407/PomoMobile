import React, { useMemo } from 'react'
import { FlatList, View } from 'react-native'
import createStyles from "../styles"
import MockData from '../Mock/MockData';
import TaskItem from '../taskItem';

const TaskList = () => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={MockData}
                renderItem={({ item }) => (
                    <TaskItem data={item} />
                )}
            />
        </View>
    )
}

export default TaskList