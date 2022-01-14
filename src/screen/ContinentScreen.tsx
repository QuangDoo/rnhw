import {useQuery} from '@apollo/client';
import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import styled from 'styled-components/native';
import {ContinentVar, GetContinentData, GET_CONTINENT} from '~/graphQL';
import WrapperTextRow from '~/utils/WrapperTextRow';

type Props = {
  code: string;
  componentId: string;
};

const ContinentScreen: NavigationFunctionComponent<Props> = ({
  code,
  componentId,
}): JSX.Element => {
  const {data: continentData} = useQuery<GetContinentData, ContinentVar>(
    GET_CONTINENT,
    {
      variables: {code},

      onError: error => {
        console.log('error :>> ', error);
        Alert.alert('Can not access this Continent');
        Navigation.popToRoot(componentId);
      },
    },
  );

  const handlePressCountry = (code: string) => {
    Navigation.push(componentId || '', {
      component: {
        name: 'CountryDetails',
        options: {
          topBar: {
            title: {
              text: 'Country',
            },
          },
        },
        passProps: {
          code,
        },
      },
    });
  };
  return (
    <Root>
      <Header>
        <TextName>{continentData?.continent?.name}</TextName>
      </Header>
      <Container>
        <WrapperTextRow containerStyle={style.wrapText}>
          <Text>Code</Text>
          <Text>{continentData?.continent?.code}</Text>
        </WrapperTextRow>

        <ViewRow>
          <Text>Countries</Text>
          <FlexView>
            {continentData?.continent?.countries.map(country => (
              <TouchableOpacity
                key={country?.code}
                onPress={() => handlePressCountry(country.code)}>
                <UnderLineText>{country.name}</UnderLineText>
              </TouchableOpacity>
            ))}
          </FlexView>
        </ViewRow>
      </Container>
    </Root>
  );
};

export default ContinentScreen;

// style

const Root = styled.ScrollView`
  flex: 1;
`;

const Header = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const TextName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const UnderLineText = styled.Text`
  text-decoration: underline;
  color: blue;
  text-align: right;
`;

const Container = styled.View`
  padding-left: 10px;
  padding-right: 10px;
`;

const ViewRow = styled.View`
  flex-direction: row;
`;

const FlexView = styled.View`
  flex: 1;
`;

const style = StyleSheet.create({
  wrapText: {
    marginBottom: 10,
  },
});
