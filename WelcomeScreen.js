import { View, Text,TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';

export default function WelcomeScreen()
{
  return(
    <SafeAreaProvider style={styles.safe}>
      <View style={styles.container}>
        <View>
          <Image source={require('../assets/welcome.png')} style={styles.image} resizeMode="contain"/>
        </View>

        <View>
        <Text style={styles.header1}>Let's get</Text>
        <Text style={styles.header1}>you started</Text>

        <Text style={styles.header2}>Create an account or login to pickup right where you left off.</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1} onPress={()=> navigation.navigate('SignUpScreen')}>Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2} onPress={()=> navigation.navigate('LoginScreen')}>Log in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.continue}>
          <Text style={styles.text}>By continuing you agree to our</Text>
          <TouchableOpacity >
          <Text style={styles.terms}>Terms and Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  )
}

const styles =StyleSheet.create({
  safe: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#eceaff'
  },
  image: {
    height: 250,
    width: 270,
    alignSelf: 'center',
    marginTop: 50
  },
  header1: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 20,
    lineHeight: 25,
    paddingBottom: 10,
    color: '#1c1a3a'
  },
  header2: {
    marginLeft: 20,
    marginTop: 2,
    marginBottom: 20,
    fontSize: 15,
    color: '#1c1a3a',
    width: '80%'
  },
  button1: {
    backgroundColor:'#5b4bff',
    height: 40,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    paddingTop: 10,
    alignSelf: 'center',
    justfyContent: 'center',
    textAlign: 'center',
    marginTop: 20
  },
  buttonText1:{
    color: '#f4f3fb',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  button2: {
    backgroundColor:'#f4f3fb',
    height: 40,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    paddingTop: 10,
    alignSelf: 'center',
    justfyContent: 'center',
    textAlign: 'center',
    marginTop: 20   
  },
  buttonText2:{
    color: '#1c1a3a',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  continue:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    gap: 6
  },
  text: {
    fontSize: 12,
    color: '#5b5b78'
  },
  terms: {
    color: '#5b4bff',
    fontSize: 12,
    textDecorationLine: 'underline',
  }
})