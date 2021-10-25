import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {PayWithFlutterwave} from 'flutterwave-react-native';

const App = () => {
  // Generate a transaction reference
  const generateReference = (length: number) => {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `tx_ref_${result}`;
  };

  const onWillInitialize = () => {
    console.log('generating payment link');
  };

  const onDidInitialize = () => {
    console.log('GENERATED Payment link');
  };

  const onInitializeError = () => {
    console.log('iniatialization error');
  };

  interface RedirectParams {
    status: 'successful' | 'cancelled';
    transaction_id?: string;
    tx_ref: string;
  }

  const handleOnRedirect = (data: RedirectParams) => {
    Alert.alert(data.status);
  };

  return (
    <SafeAreaView>
      <Text style={styles.headerText}> Accept Payment With Flutterwave!!</Text>

      <View style={styles.buttonContainer}>
        <PayWithFlutterwave
          onRedirect={handleOnRedirect}
          onWillInitialize={onWillInitialize}
          onDidInitialize={onDidInitialize}
          onInitializeError={onInitializeError}
          options={{
            tx_ref: generateReference(20),
            authorization: 'FLWPUBK_TEST-8271539878145e737ed3720de9c0e4a4-X',
            customer: {
              email: 'customer-email@example.com',
            },
            amount: 5000,
            currency: 'NGN',
            payment_options: 'card',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
});
