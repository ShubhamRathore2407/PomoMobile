import React, {useMemo, useState} from 'react';
import {View} from 'react-native';

import WelcomeHeader from '../../../components/welcomeHeader';
import createStyles from '../styles';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

import {brand, fontSize, palette} from '../../../utils/theme/themes';
import fonts from '../../../utils/theme/fonts';
import TaskList from '../taskList';
import Form from '../form';
import ModalWrapper from '../../../utils/customComponents/ModalWrapper';

const AddIcon = () => (
  <Icon
    type={IconType.Ionicons}
    name="add-outline"
    size={fontSize.large}
    color={brand.secondaryMain}
  />
);

const Content = () => {
  const styles = useMemo(() => createStyles(), []);
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleButtonClick = () => setShowForm(true);

  return (
    <View style={styles.contentContainer}>
      <WelcomeHeader
        title="My Tasks"
        titleStyles={{
          color: palette.radium,
          fontFamily: fonts.pacifico.regular,
          fontSize: fontSize.large,
        }}
        hasButton
        onButtonClick={handleButtonClick}
        ButtonIcon={AddIcon}
        buttonStyles={{backgroundColor: palette.blackLight}}
      />
      <TaskList />
      <ModalWrapper
        isVisible={showForm}
        title={'Add Task'}
        onClose={() => setShowForm(false)}>
        <Form setShowForm={setShowForm} />
      </ModalWrapper>
    </View>
  );
};

export default Content;
