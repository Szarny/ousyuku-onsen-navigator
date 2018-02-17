/**
 * モジュールのインポート
 */
import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Title, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'; // 2.3.8
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

/**
 * ホーム画面
 */
export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
  }

  render() {
    /**
     * homeListItemsを
     */
    const listItemsElements = homeListItems.map((listItem, index) => {
      return (
        <ListItem
          avatar
          key={index.toString()}
          onPress={() => this.props.navigation.navigate('HotSpa')}
        >
          <Left>
            <Thumbnail source={{ uri: listItem.thumbnailSourceUri }} />
          </Left>
          <Body>
            <Text>{listItem.bodyText}</Text>
            <Text note>{listItem.bodyNote}</Text>
          </Body>
        </ListItem>
      )
    });

    return (
      <Container style={styles.containerStyle}>
        <Content>
          <List>
            {listItemsElements}
          </List>
        </Content>
      </Container>
    );
  }
}

export class HotSpaScreen extends Component {
  static navigationOptions = {
    title: 'HotSpa'
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://goo.gl/cfnrV5' }} />
              </Left>
              <Body>
                <Text>施設名称</Text>
                <Text note>(Tel) 営業時間 [料金]</Text>
              </Body>
              <Right>
                <Text>(露天)</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://goo.gl/cfnrV5' }} />
              </Left>
              <Body>
                <Text>ホテル森の風鴬宿</Text>
                <Text note>019-695-3333</Text>
                <Text note>11:00～18:00</Text>
                <Text note>入浴料 1050 (小)525</Text>
              </Body>
              <Right>
                <Text>(有り)</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://goo.gl/cfnrV5' }} />
              </Left>
              <Body>
                <Text>長栄館</Text>
                <Text note>019-695-2121</Text>
                <Text note>11:00～15:00</Text>
                <Text note>入浴料 ￥1000 /(小)500</Text>
              </Body>
              <Right>
                <Text>(有り)</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://goo.gl/cfnrV5' }} />
              </Left>
              <Body>
                <Text>ホテル加賀助</Text>
                <Text note>019-695-2216</Text>
                <Text note>13:00～19:00</Text>
                <Text note>入浴料 500 /(小)250</Text>
              </Body>
              <Right>
                <Text>(無し)</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://goo.gl/cfnrV5' }} />
              </Left>
              <Body>
                <Text />
                <Text note />
                <Text note>入浴料  /(小) </Text>
              </Body>
              <Right>
                <Text>(有り)</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://goo.gl/cfnrV5' }} />
              </Left>
              <Body>
                <Text>ホテル森の風鴬宿</Text>
                <Text note>019-695-3333</Text>
                <Text note>11:00～15:00</Text>
                <Text note>入浴料 1000 /(小)500</Text>
              </Body>
              <Right>
                <Text>(有り)</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://goo.gl/cfnrV5' }} />
              </Left>
              <Body>
                <Text>長栄館   (019-695-3333)</Text>
                <Text note>11:00～15:00</Text>
                <Text note>入浴料 1000 /(小)500</Text>
              </Body>
              <Right>
                <Text>(有り)</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://goo.gl/cfnrV5' }} />
              </Left>
              <Body>
                <Text>ホテル森の風鴬宿   (019-695-3333)</Text>
                <Text note>11:00～15:00</Text>
                <Text note>入浴料 1000 /(小)500</Text>
              </Body>
              <Right>
                <Text>(有り)</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://goo.gl/cfnrV5' }} />
              </Left>
              <Body>
                <Text>ホテル森の風鴬宿   (019-695-3333)</Text>
                <Text note>11:00～15:00</Text>
                <Text note>入浴料 1000 /(小)500</Text>
              </Body>
              <Right>
                <Text>(有り)</Text>
              </Right>
            </ListItem>

          </List>
        </Content>
      </Container>
    );
  }
}

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    HotSpa: {
      screen: HotSpaScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);


const homeListItems = [
  {
    thumbnailSourceUri: "https://goo.gl/cfnrV5",
    bodyText: "日帰り温泉入浴施設",
    bodyNote: "One-day hot spring bathing facilities"
  }, {
    thumbnailSourceUri: "https://goo.gl/N3A7fG",
    bodyText: "温泉宿泊施設",
    bodyNote: "Hot spring accommodation"
  }, {
    thumbnailSourceUri: "https://goo.gl/DDtx3i",
    bodyText: "食事処＆休憩処",
    bodyNote: "Meals and breaks"
  }, {
    thumbnailSourceUri: "https://umekiki.jp/images/events/ico-etc-l.png",
    bodyText: "その他",
    bodyNote: "Others"
  }, {
    thumbnailSourceUri: "https://pbs.twimg.com/profile_images/1022033539/5332dcb0-7dc2-4a31-ab4e-4148953f0667_400x400.jpg",
    bodyText: "しずくちゃん",
    bodyNote: "Shizuku-chan relation"
  }, {
    thumbnailSourceUri: "https://pbs.twimg.com/profile_images/726635752197525504/sjMs4APZ_400x400.jpg",
    bodyText: "ケキョきち君",
    bodyNote: "Kekyo Kichi-kun's relation"
  },
];

const styles = {
  containerStyle: {
    paddingTop: Constants.statusBarHeight
  },
}
