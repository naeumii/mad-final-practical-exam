import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen() {
  return (
    <SafeAreaProvider style={styles.safe}>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Sign In</Text>
        </View>

        <View>
        <Text style={styles.subHeader}>Welcome back! Sign in to continue</Text>
        <Text style={styles.subHead}>where you left of.</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.social}>
            <Ionicons name="logo-facebook" size={24} color="#1877F2" style={styles.icon} />
            <Text style={styles.facebook}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.social}>
            <Ionicons name="logo-google" size={22} color="#4285F4" style={styles.icon} />
            <Text style={styles.google}>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        <View>
          <TextInput style={styles.input} placeholder='Email/Phone Number' placeholderTextColor='#808080'/>
          <TextInput style={styles.input} placeholder='Password' placeholderTextColor='#808080'/>
        </View>

        <View>
        <TouchableOpacity style={styles.password}>Forgot Password?</TouchableOpacity>
        </View>

        <View style={styles.login}>
          <TouchableOpacity style={styles.loginText}>Log In</TouchableOpacity>
        </View>

        <View style={styles.signUp}>
          <Text>Dont have an account?</Text>
          <TouchableOpacity style={styles.signup}>Sign Up</TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  )
};

  const styles = StyleSheet.create({
    safe: {
      flex: 1
    },
    container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: '#f5f5f5'
    },
    header: {
      alignSelf: 'center',
      color: '#000080',
      fontWeight: 'bold',
      fontSize: 30,
      paddingBottom: 15
    },
    subHeader: {
      alignSelf: 'center',
      width: 230,
      justifySelf: 'center',
      color: '#696969',
    },
    subHead: {
      alignSelf: 'center',
      color: '#696969',
      right: 5
    },
    facebook: {
      alignSelf: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#4b5147'
    },
    google: {
      alignSelf: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#4b5147'
    },
    input: {
      backgroundColor: '#d3d3d3',
      borderRadius: 5,
      width: '90%',
      alignSelf: 'center',
      height: 40,
      marginTop: 20,
      paddingHorizontal: 15
    },
    password: {
      alignSelf: 'flex-end',
      paddingRight: 13,
      color: '#4b5147',
      paddingTop: 10
    },
    login: {
    height: 40,
    width: '90%',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 40,
    backgroundColor: '#000080'
    },
    loginText: {
      color: '#f5f5f5'
    },
    signUp: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      paddingLeft: 25,
      marginTop: 15
    },
    signup: {
      color: '#000080'
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 16,
      marginTop: 20,
      paddingHorizontal: 20,

    },
    social: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 30,
      backgroundColor: '#e2e4e6',
      borderRadius: 5,
    },
    icon: {
      right: 20
    },
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
      width: '90%',
      alignSelf: 'center',
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: '#E0E0E0',
    },
    dividerText: {
      marginHorizontal: 12,
      color: '#696969',
      fontSize: 14,
    },
  })