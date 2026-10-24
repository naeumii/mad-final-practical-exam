import { TextInput, Image, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaProvider style={styles.safe}>
      <View style={styles.container}>
        <Image 
          source={require('../assets/login.png')} 
          style={styles.image} 
          resizeMode="contain"
        />

        <View style={styles.card}>
          <View>
            <Text style={styles.header1}>Welcome Back</Text>
            <Text style={styles.header2}>Login to your account to continue.</Text>
          </View>

          <View>

            <Text style={styles.text}>Email Address</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} />
              <TextInput 
                style={styles.input} 
                placeholder="johndoe@gmail.com" 
                placeholderTextColor="#5e5b78"
              />
            </View>

            <Text style={styles.text}>Password</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="key-outline" size={20} color="gray" style={styles.icon} />
              <TextInput 
                style={styles.input} 
                placeholder="Create password" 
                placeholderTextColor="#5e5b78"
                secureTextEntry
              />
              <TouchableOpacity style={styles.eye}>
                <Ionicons name="eye-outline" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.text1}>Forgot Password?</TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}  onPress={()=> navigation.navigate('LoginScreen')}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.text2}>or continue with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-google" size={22} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-apple" size={22} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-facebook" size={22} color="#1877F2" />
            </TouchableOpacity>
          </View>

          <View style={styles.continue}>
            <Text style={styles.text3}>Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.terms}  onPress={()=> navigation.navigate('SignUpScreen')}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#eceaff',
  },
  image: {
    height: 180,
    width: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  header1: {
    fontWeight: 'bold',
    color: '#1c1a3a',
    fontSize: 24,
  },
  header2: {
    color: '#1c1a3a',
    marginBottom: 16,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 6,
    color: '#1c1a3a',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f5',
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e2e0f0',
    height: 48,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#1c1a3a',
  },
  eye: {
    padding: 4,
  },
  text1: {
    color: '#5b4bff',
    fontSize: 15,
    marginTop: 6,
    alignSelf: 'flex-end'
  },
  button1: {
    backgroundColor: '#5b4bff',
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 20,
  },
  buttonText1: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#e2e0f0',
  },
  text2: {
    marginHorizontal: 12,
    color: '#5e5b78',
    fontSize: 13,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: '#d0ceee',
    width: 65,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continue: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    gap: 6,
  },
  text3: {
    fontSize: 14,
    color: '#5b5b78',
  },
  terms: {
    color: '#5b4bff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});