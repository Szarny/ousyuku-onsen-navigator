/**
 * モジュールのインポート
 */
import React, { Component } from 'react';
import { Image, Linking } from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'; // 2.3.8
import { Constants, MapView } from 'expo';
import { StackNavigator } from 'react-navigation'; // 1.0.3

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
     * homeListItemsをmapによって，エレメント群に変換する
     */
    const listItemsElements = homeListItems.map((listItem, index) => {
      return (
        <ListItem
          avatar
          key={index.toString()}
          onPress={() => this.props.navigation.navigate(listItem.link)}
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

/**
 * 日帰り温泉入浴施設画面
 */
export class HotSpaScreen extends Component {
  static navigationOptions = {
    title: 'HotSpa'
  };

  render() {
    const listItemsElements = hotSpaListItems.map((listItem, index) => {
      return (
        <ListItem
          avatar
          key={index.toString()}
          onPress={() => {
            this.props.navigation.navigate('Map', {
              data: listItem
            });
          }}
        >
          <Left>
            <Thumbnail source={{ uri: listItem.thumbnailSourceUri }} />
          </Left>
          <Body>
            <Text>{listItem.bodyText}</Text>
            <Text note>{listItem.tel}</Text>
            <Text note>{listItem.time}</Text>
            <Text note>{listItem.price}</Text>
          </Body>
          <Right>
            <Text>{listItem.roten}</Text>
          </Right>
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

/**
 * マップ画面
 */
export class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map'
  };

  constructor(props){
    super(props);
  }

  render() {
    /**
     * Navigationからの値の受け渡し
     */
    const { params } = this.props.navigation.state;
    const bodyText   = params ? params.data.bodyText : null;
    const lat        = params ? params.data.lat : null;
    const lng        = params ? params.data.lng : null;
    const src        = params ? params.data.thumbnailSourceUri : null;
    const tel        = params ? params.data.tel : null;
    const time       = params ? params.data.time : null;
    const price      = params ? params.data.price : null;
    const roten      = params ? params.data.roten : null;

    // 緯度経度情報
    const mapRegion   = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }

    return (
      <Container style={styles.containerStyle}>
        <Content>
          <MapView
            style={{ alignSelf: 'stretch', height: 350 }}
            region={mapRegion}
            zoomEnabled={true}
            rotateEnabled={true}
            scrollEnabled={true}
            >
            <MapView.Marker
              coordinate={mapRegion}
              title={bodyText}
              description={tel}
            />
          </MapView>

          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: src }} />
              </Left>
              <Body>
                <Text>{bodyText}</Text>
                <Text note>{tel}</Text>
                <Text note>{time}</Text>
                <Text note>{price}</Text>
              </Body>
              <Right>
                <Text>{roten}</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

/**
* ケキョきち画面
*/
export class KekyokichiScreen extends Component {
  static navigationOptions = {
    title: 'kekyokichi'
  };

  constructor(props) {
    super(props);
  }

  render() {
    /**
     * homeListItemsをmapによって，エレメント群に変換する
     */
    const listItemsElements = kekyokichiListItems.map((listItem, index) => {
      return (
        <ListItem
          avatar
          key={index.toString()}
          onPress={() => Linking.openURL(listItem.linkUri)}>
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

/**
* しずくちゃん画面
*/
export class ShizukuScreen extends Component {
  static navigationOptions = {
    title: 'shizuku'
  };

  constructor(props) {
    super(props);
  }

  render() {
    /**
     * homeListItemsをmapによって，エレメント群に変換する
     */
    const listItemsElements = shizukuListItems.map((listItem, index) => {
      return (
        <ListItem
          avatar
          key={index.toString()}
          onPress={() => Linking.openURL(listItem.linkUri)}>
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
          <Image
            style={{flex: 1, alignItems: "center", justifyContent: "center", width: 300, height: 300}}
            source={{uri: "https://pbs.twimg.com/profile_images/1022033539/5332dcb0-7dc2-4a31-ab4e-4148953f0667_400x400.jpg"}}/>
        </Content>
      </Container>
    );
  }
}

/**
 * Navigation(画面遷移)の設定
 */
export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    HotSpa: {
      screen: HotSpaScreen,
    },
    Map: {
      screen: MapScreen,
    },
    Shizuku: {
      screen: ShizukuScreen,
    },
    Kekyokichi: {
      screen: KekyokichiScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

/**
 * ホーム画面に表示するリストのデータ
 */
const homeListItems = [
  {
    thumbnailSourceUri: "https://goo.gl/cfnrV5",
    bodyText: "日帰り温泉入浴施設",
    bodyNote: "One-day hot spring bathing facilities",
    link: "HotSpa"
  }, {
    thumbnailSourceUri: "https://goo.gl/N3A7fG",
    bodyText: "温泉宿泊施設",
    bodyNote: "Hot spring accommodation",
    link: ""
  }, {
    thumbnailSourceUri: "https://goo.gl/DDtx3i",
    bodyText: "食事処＆休憩処",
    bodyNote: "Meals and breaks",
    link:""
  }, {
    thumbnailSourceUri: "https://umekiki.jp/images/events/ico-etc-l.png",
    bodyText: "その他",
    bodyNote: "Others",
    link: ""
  }, {
    thumbnailSourceUri: "https://pbs.twimg.com/profile_images/1022033539/5332dcb0-7dc2-4a31-ab4e-4148953f0667_400x400.jpg",
    bodyText: "しずくちゃん",
    bodyNote: "Shizuku-chan relation",
    link: "Shizuku"
  }, {
    thumbnailSourceUri: "https://pbs.twimg.com/profile_images/726635752197525504/sjMs4APZ_400x400.jpg",
    bodyText: "ケキョきち君",
    bodyNote: "Kekyo Kichi-kun's relation",
    link: "Kekyokichi"
  },
];

/**
 * 日帰り温泉画面に表示するリストのデータ
 */
const hotSpaListItems = [
  {
    thumbnailSourceUri: "https://goo.gl/cfnrV5",
    bodyText: "ホテル森の風鴬宿",
    tel: "019-695-3333",
    time: "11:00～18:00",
    price: "入浴料 1050 (小)525",
    roten: "(有り)",
    lat: 39.638157,
    lng: 140.933680
  },
  {
    thumbnailSourceUri: "https://goo.gl/cfnrV5",
    bodyText: "ホテル加賀助",
    tel: "019-695-2216",
    time: "13:00～18:00",
    price: "入浴料 500 (小)250",
    roten: "(無し)",
    lat: 39.636090,
    lng: 140.921975
  }
];

/**
* ケキョきちくん関連のデータ
*/
const kekyokichiListItems = [
  {
    thumbnailSourceUri: "http://icons.iconarchive.com/icons/sicons/basic-round-social/512/twitter-icon.png",
    bodyText: "Twitter",
    bodyNote: "Check Kekyokichi's tweet",
    linkUri: "https://twitter.com/ousyukuonsen",
  }, {
    thumbnailSourceUri: "https://www.facebook.com/images/fb_icon_325x325.png",
    bodyText: "Facebook",
    bodyNote: "Check Kekyokichi's Facebook",
    linkUri: "https://www.facebook.com/kekyokichi/",
  },
];

/**
* しずくちゃん関連のデータ
*/
const shizukuListItems = [
  {
    thumbnailSourceUri: "http://icons.iconarchive.com/icons/sicons/basic-round-social/512/twitter-icon.png",
    bodyText: "Twitter",
    bodyNote: "Check Shizuku-chan's tweet",
    linkUri: "https://twitter.com/machitane_shizu",
  }, {
    thumbnailSourceUri: "https://www.facebook.com/images/fb_icon_325x325.png",
    bodyText: "Facebook",
    bodyNote: "Check Shizuku-chan's Facebook",
    linkUri: "https://www.facebook.com/machitane.shizu/",
  },
];

/**
 * スタイルの定義
 */
const styles = {
  containerStyle: {
    paddingTop: Constants.statusBarHeight
  },
  mapStyle: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  }
}
