import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styled from 'styled-components/native';
import {Country} from '~/graphQL';
import {getScreenStyle} from '~/misc/getScreenStyle';

// code: string;
// name: string;
// native: string;
// continent: Continent;
// capital: String;
// currency: String;
// languages: [Language];
// emoji: string;

type Props = Country & {
  componentId?: string;
};

const CountryItem = (_props: Props): JSX.Element => {
  const {emoji, code, name, capital, componentId} = _props;

  const handlePressCoutryItem = () => {
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
    <TouchableOpacity onPress={handlePressCoutryItem}>
      <BoxCard style={style.boxCard}>
        <TextFlag>{emoji}</TextFlag>
        <ContentBox>
          <Title>{name}</Title>
          <SubTitle>{capital}</SubTitle>
        </ContentBox>
      </BoxCard>
    </TouchableOpacity>
  );
};

export default CountryItem;

//#region

const BoxCard = styled.View`
  flex: 1;
  background-color: #e6eeff;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const TextFlag = styled.Text`
  font-size: 50;
`;

const ContentBox = styled.View`
  margin-left: 2px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const SubTitle = styled.Text`
  font-weight: normal;
  font-size: 16px;
`;

const style = StyleSheet.create({
  boxCard: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

CountryItem.options = getScreenStyle();
//#endregion
