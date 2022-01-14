import {useQuery} from '@apollo/client';
import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import styled from 'styled-components/native';
import {CountryVars, GetCountryData, GET_COUNTRY} from '~/graphQL';
import {getScreenStyle} from '~/misc/getScreenStyle';
import WrapperTextRow from '~/utils/WrapperTextRow';

type Props = {
  code: string;
  handlePressContinent?: string;
};

const CountryDetailsScreen: NavigationFunctionComponent<Props> = ({
  code,
  componentId,
}): JSX.Element => {
  const {data: countryData} = useQuery<GetCountryData, CountryVars>(
    GET_COUNTRY,
    {
      variables: {code},

      onError: () => {
        Alert.alert('Can not access this Country!');
        Navigation.popToRoot(componentId);
      },
    },
  );

  const handlePressContinent = () => {
    Navigation.push(componentId || '', {
      component: {
        name: 'Continent',
        options: {
          topBar: {
            title: {
              text: 'Continent',
            },
          },
        },
        passProps: {
          code: countryData?.country?.continent?.code,
        },
      },
    });
  };

  return (
    <>
      <Header>
        <FlagText>{countryData?.country?.emoji}</FlagText>
        <TitlteText>{countryData?.country?.name}</TitlteText>
      </Header>
      <Body>
        <WrapperTextRow containerStyle={style.wrapText}>
          <Text>Alpha2Code</Text>
          <Text>{countryData?.country?.code}</Text>
        </WrapperTextRow>
        <WrapperTextRow containerStyle={style.wrapText}>
          <Text>CallingCodes</Text>
          <Text>+{countryData?.country?.phone}</Text>
        </WrapperTextRow>
        <WrapperTextRow containerStyle={style.wrapText}>
          <Text>Continent</Text>
          <TouchableOpacity onPress={handlePressContinent}>
            <UnderLineText>
              {countryData?.country?.continent?.name}
            </UnderLineText>
          </TouchableOpacity>
        </WrapperTextRow>
      </Body>
    </>
  );
};

export default CountryDetailsScreen;

// style

const FlagText = styled.Text`
  font-size: 80px;
`;

const TitlteText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const UnderLineText = styled.Text`
  text-decoration: underline;
  color: blue;
`;

const Body = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

const style = StyleSheet.create({
  wrapText: {
    marginBottom: 10,
  },
});

CountryDetailsScreen.options = getScreenStyle();
