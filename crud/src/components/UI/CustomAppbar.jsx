import React from 'react';
import { Appbar } from 'react-native-paper';

export const CustomAppbar = ({title, hasLeadingAction = false, leadingOnPress}) => (
  <Appbar.Header>
    {hasLeadingAction && <Appbar.BackAction onPress={leadingOnPress} />}
    <Appbar.Content title={title} />
  </Appbar.Header>
);
