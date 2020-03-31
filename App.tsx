/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native'

const ScrollView = Styled.ScrollView`
  background-color : ${Colors.lighter};
`;

const Body = Styled.View`
  background-color : ${Colors.white};
`;

const SectionContainer = Styled.View`
  margin-top : 32px;
  padding-horizontal : 24px;
`;

const SectionTitle = Styled.Text`
  font-size : 24px;
  font-weight : 600;
  color : ${Colors.black};
`;

const SectionDescription = Styled.Text`
  margin-top : 8px;
  font-size : 18px;
  font-weight : 400;
  color : ${Colors.dark};
`

const HighLight = Styled.Text`
  font-weight : 700;
`

interface Props {}

const App = ({} : Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
              <SectionTitle>Step One</SectionTitle>
              <SectionDescription>
                Edit <HighLight>App.js</HighLight> to change this
                screen and then come back to see your edits.
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>See Your Changes</SectionTitle>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Debug</SectionTitle>
              <SectionDescription>
                <DebugInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Learn More</SectionTitle>
              <SectionDescription>
                Read the docs to discover what to do next:
              </SectionDescription>
            </SectionContainer>
            <LearnMoreLinks />
          </Body>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;
