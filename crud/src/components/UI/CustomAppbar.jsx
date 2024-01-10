import React from 'react';
import { Appbar } from 'react-native-paper';

export const CustomAppbar = ({title, hasLeadingAction = false, leadingOnPress, hasOneActionIcon = false, actionOneOnPress}) => (
  <Appbar.Header>
    {hasLeadingAction && <Appbar.BackAction onPress={leadingOnPress} />}
    <Appbar.Content title={title} />
    {hasOneActionIcon && <Appbar.Action background={{title: 'Read'}} icon="magnify" onPress={actionOneOnPress} />}
  </Appbar.Header>
);
