import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import {ActivityIndicator, Alert, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {CountryItem} from '~/components';
import {Country, GetCountriesData} from '~/graphQL';
import GET_COUNTRIES from '~/graphQL/countries';
import {getScreenStyle} from '../misc/getScreenStyle';

export const HomeScreen = (props: {componentId: string}) => {
  const [contries, setContries] = useState<Country[]>([]);

  const {loading, refetch} = useQuery<GetCountriesData, undefined>(
    GET_COUNTRIES,
    {
      onCompleted: data => {
        setContries(data.countries.slice(0, 10));
      },
      onError: () => {
        Alert.alert('Can not get list of counties');
      },
    },
  );

  const hanldeReCallApi = () => {
    refetch();
  };

  return (
    <Root>
      <HeaderBox />

      <Title>List of countries</Title>

      <FlatList
        data={contries}
        renderItem={({item}) => (
          <CountryItem {...item} componentId={props.componentId} />
        )}
        onRefresh={() => hanldeReCallApi}
        keyExtractor={item => item.code}
        refreshing={loading}
      />
      {loading && (
        <Root>
          <ActivityIndicator />
        </Root>
      )}
    </Root>
  );
};

//#region
type Props = {
  componentId: string;
};

const Root = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const HeaderBox = styled.View`
  background-color: #ffbecc;
  height: 200px;
  border-bottom-left-radius: 25px;
`;

HomeScreen.options = getScreenStyle();
//#endregion
