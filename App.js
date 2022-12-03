import 'expo-dev-client';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Pdf from 'react-native-pdf';

export default function App() {
  const [buttonText, setButtonText] = useState('Android Development');
  const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };

  return (
    <View style={styles.container}>
      <Text>Welcome to {buttonText}</Text>
      <Button
      title={buttonText}
      onPress={() => setButtonText("JavaScript React Native")}
      />

<View style={styles.containerTwo}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTwo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
},
pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
}
});
