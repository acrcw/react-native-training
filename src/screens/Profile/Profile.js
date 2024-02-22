import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Profile/Profile.styles';
import { TextStyles } from '@/theme';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from 'react-native-screens/lib/typescript/native-stack';

export function Profile({ navigation }) {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [count, setCount] = useState();
  const [add, setAdd] = useState();

  const data = [
    // { key: 'Count' },
    // { key: 'Add' },
    // { key: 'Spread' },
    // { key: 'Mod' },
    // { key: 'Design' },
    // { key: 'Des' },
    // { key: 'Datepicker' },
    // { key: 'Asyne' },
    // { key: 'Asyobj' },
    // { key: 'Image' },
    // { key: 'Clockt' },
    // { key: 'Clockpratice' },
    // { key: 'Firstrd' },
    // { key: 'reduxapi' },
    // { key: 'Reduxnavigation'},
    // { key: 'Reduxhome'},
    // { key: 'Calculator'},
    { key: 'Newcal'},
  ];

  useEffect(() => {
    console.log('use effect', count);
  }, []);

  useEffect(() => {
    console.log('use effect', add);
  }, []);

  const renderItem = ({ item }) => (
    <Button title={item.key} onPress={() => navigation.navigate(item.key)} />
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
