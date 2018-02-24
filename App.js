/**
 * モジュールのインポート
 */
import React, { Component } from 'react';
import { Image, Linking, View } from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'; // 2.3.8
import { Constants, MapView } from 'expo';
import { StackNavigator } from 'react-navigation'; // 1.1.2

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
 * 食事画面
 */
export class BreakScreen extends Component {
  static navigationOptions = {
    title: 'Break'
  };

  render() {
    const listItemsElements = breaksListItems.map((listItem, index) => {
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
    title: 'Kekyokichi'
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
          onPress={() => {Linking.openURL(listItem.linkUri)}}>
          <Left>
            <Thumbnail source={{ uri: listItem.thumbnailSourceUri }} />
          </Left>
          <Body>
            <Text>{listItem.bodyText} {listItem.account}</Text>
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
          <View style={{flex: 1, justifyContent: "center", alignItems: "center", marginTop: 20}}>
            <Image
              style={{width: 300, height: 400}}
              source={{ uri: "https://i.imgur.com/0cO8d4a.jpg" }} />
          </View>
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
    title: 'Shizuku-chan'
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
            <Text>{listItem.bodyText} {listItem.account}</Text>
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
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", marginTop: 20}}>
              <Image
                style={{width: 300, height: 400}}
                source={{ uri: "https://imgur.com/ZL3VZta.jpg" }} />
            </View>
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
    Break: {
      screen: BreakScreen,
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
    link: "HotSpa"
  }, {
    thumbnailSourceUri: "https://goo.gl/DDtx3i",
    bodyText: "食事処＆休憩処",
    bodyNote: "Meals and breaks",
    link:"Break"
  },
  // {
  //   thumbnailSourceUri: "https://umekiki.jp/images/events/ico-etc-l.png",
  //   bodyText: "その他",
  //   bodyNote: "Others",
  //   link: ""
  // },
  {
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
  { thumbnailSourceUri: "http://www.ousyukuonsen.com/title.jpg", bodyText: "鶯宿温泉観光協会",
    tel: "019-695-2209",
    time: "9:00～17:00", price: "", roten: "",
    lat: 39.637777, lng: 140.924387, },
  { thumbnailSourceUri: "https://goo.gl/xHKkak", bodyText: "ホテル森の風鴬宿",
    tel: "019-695-3333",
    time: "11:00～18:00", price: "入浴料 1000 (小)500", roten: "露天?",
    lat: 39.638157, lng: 140.933680, },
  { thumbnailSourceUri: "https://goo.gl/xHKkak", bodyText: "長栄館",
    tel: "019-695-2121",
    time: "11:00～15:00", price: "入浴料 1000 (小)500", roten: "露天?",
    lat: 39.634697, lng: 140.921397, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "ホテル加賀助",
    tel: "019-695-2216",
    time: "13:00～18:00", price: "入浴料 500 (小)250", roten: "",
    lat: 39.636305, lng: 140.9215876, },
  { thumbnailSourceUri: "https://goo.gl/xHKkak", bodyText: "ホテル偕楽苑",
    tel: "019-695-2111",
    time: "10:00～21:00", price: "入浴料 600 (小)300", roten: "露天?",
    lat: 39.639641, lng: 140.929625, },
  { thumbnailSourceUri: "https://goo.gl/xHKkak", bodyText: "寿広園",
    tel: "019-695-2465",
    time: "10:00～21:00", price: "入浴料 500 (小)350", roten: "露天?",
    lat: 39.640821, lng: 140.935530, },
  { thumbnailSourceUri: "https://goo.gl/xHKkak", bodyText: "赤い風車",
    tel: "019-695-2311",
    time: "7:00～23:00", price: "入浴料 600 (小)300", roten: "露天?",
    lat: 39.642343, lng: 140.938922, },
  { thumbnailSourceUri: "https://goo.gl/xHKkak", bodyText: "ホテル鶯",
    tel: "019-695-2036",
    time: "10:00～19:30", price: "入浴料 500 (小)300", roten: "露天?",
    lat: 39.634694, lng: 140.919325, },
  { thumbnailSourceUri: "https://goo.gl/xHKkak", bodyText: "川長",
    tel: "019-695-2171",
    time: "10:00～16:00", price: "入浴料 600 (小)300", roten: "露天?",
    lat: 39.638437, lng: 140.929051, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "清光荘",
    tel: "019-695-2136",
    time: "13:00～18:00", price: "入浴料 400 (小)200", roten: "",
    lat: 39.635532, lng: 140.922138, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "レムナント鴬宿",
    tel: "019-613-2345",
    time: "11:00～20:00", price: "入浴料 500 (小)200", roten: "",
    lat: 39.641913, lng: 140.935834, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "鶯泉館",
    tel: "019-695-2309",
    time: "10:00～17:00", price: "入浴料 400 (小)無料", roten: "",
    lat: 39.635182, lng: 140.922411, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "民宿小枝",
    tel: "019-695-2126",
    time: "9:00～19:00", price: "入浴料 300 (小)100", roten: "",
    lat: 39.636500, lng: 140.923374, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "民宿栄弥",
    tel: "019-695-2109",
    time: "11:00～20:00", price: "入浴料 400 (小)200", roten: "",
    lat: 39.636620, lng: 140.922478, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "民宿あけぼの荘",
    tel: "019-695-2245",
    time: "8:00～20:00", price: "入浴料 300 (小)150", roten: "",
    lat: 39.641169, lng: 140.931704, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "民宿けむやま",
    tel: "019-695-2334",
    time: "10:00～19:00", price: "入浴料 300 (小)150", roten: "",
    lat: 39.634629, lng: 140.920685, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "石塚旅館",
    tel: "019-695-2221",
    time: "9:00～20:00", price: "入浴料 200 (小)100", roten: "",
    lat: 39.635280, lng: 140.921972, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "民宿川久",
    tel: "019-695-2134",
    time: "要問合せ", price: "入浴料 300 (小)要問合せ", roten: "",
    lat: 39.634959, lng: 140.920711, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "鶯宿温泉共同浴場",
    tel: "019-695-2209",
    time: "10:00～21:00", price: "入浴料 310 (小)160", roten: "",
    lat: 39.637781, lng: 140.924394, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "ニュー鶯山荘",
    tel: "019-695-2301",
    time: "要問合せ", price: "要問合せ", roten: "",
    lat: 39.638655, lng: 140.930182, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "民宿とちない",
    tel: "019-695-2026",
    time: "10:00～15:00", price: "入浴料 400 (小)200", roten: "",
    lat: 39.635695, lng: 140.922349, },
  { thumbnailSourceUri: "https://goo.gl/PVMd29", bodyText: "かどや旅館",
    tel: "019-695-2219",
    time: "要問合せ", price: "要問合せ", roten: "",
    lat: 39.635240, lng: 140.921673, },
];

const breaksListItems = [
  { thumbnailSourceUri: "https://goo.gl/RaAXd4", bodyText: "足湯(無料)うぐいす湯の里公園",
    tel: "", time: "", price: "", roten: "",
    lat: 39.636690, lng: 140.923211, },
  { thumbnailSourceUri: "https://goo.gl/RaAXd4", bodyText: "フラワー＆ガーデン森の風",
    tel: "019-691-8787", time: "10:00～20:00", price: "", roten: "",
    lat: 39.640289, lng: 140.933941, },
  { thumbnailSourceUri: "https://goo.gl/RaAXd4", bodyText: "餅工房 むらかみ",
    tel: "019-695-2441", time: "8:00～18:00", price: "", roten: "",
    lat: 39.636996, lng: 140.923632, },
  { thumbnailSourceUri: "https://goo.gl/RaAXd4", bodyText: "魚弥太",
    tel: "019-695-2421", time: "8:00～18:30", price: "", roten: "",
    lat: 39.636613, lng: 140.923420, },
  { thumbnailSourceUri: "https://goo.gl/RaAXd4", bodyText: "煙山商店",
    tel: "019-695-2435", time: "7:00～20:30", price: "", roten: "",
    lat: 39.636062, lng: 140.922944, },
  { thumbnailSourceUri: "https://goo.gl/RaAXd4", bodyText: "スナック華",
    tel: "019-695-2261", time: "19:00～24:00", price: "", roten: "",
    lat: 39.635557, lng: 140.922844, },
  { thumbnailSourceUri: "https://goo.gl/RaAXd4", bodyText: "一品料理 山酔",
    tel: "019-695-2157", time: "18:00～23:30", price: "", roten: "",
    lat: 39.637846, lng: 140.924654, },
  { thumbnailSourceUri: "https://goo.gl/RaAXd4", bodyText: "鮨輝",
    tel: "019-695-2614", time: "18:00～", price: "", roten: "",
    lat: 39.637788, lng: 140.923937, },
];

/**
* ケキョきちくん関連のデータ
*/
const kekyokichiListItems = [
  {
    thumbnailSourceUri: "https://goo.gl/9jZzmm",
    bodyText: "Twitter",
    account: "@ousyukuonsen",
    bodyNote: "Check Kekyokichi's tweet",
    linkUri: "https://twitter.com/ousyukuonsen",
  }, {
    thumbnailSourceUri: "https://goo.gl/8LSpGa",
    bodyText: "Facebook",
    bodyNote: "Check Kekyokichi's Facebook",
    linkUri: "https://www.facebook.com/kekyokichi/"
  },
];

/**
* しずくちゃん関連のデータ
*/
const shizukuListItems = [
  {
    thumbnailSourceUri: "https://goo.gl/9jZzmm",
    bodyText: "Twitter",
    account: "@Machitane_Shizu",
    bodyNote: "Check Shizuku-chan's tweet",
    linkUri: "https://twitter.com/machitane_shizu",
  }, {
    thumbnailSourceUri: "https://goo.gl/8LSpGa",
    bodyText: "Facebook",
    bodyNote: "Check Shizuku-chan's Facebook",
    linkUri: "https://www.facebook.com/machitane.shizu/"
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
