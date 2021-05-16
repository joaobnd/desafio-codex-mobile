import React from 'react';
import { Text, ScrollView, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import Styles from './styles';
import Home from '../Home';
import Icon from 'react-native-vector-icons/FontAwesome'
import { postSignIn, setStorageToken } from '../../services/AuthService'

export default function SignIn() {
  const [success, setSuccess] = useState(false)
  const [emailInvalid, setEmailInvalid] = useState()
  const [emailOnFocus, setEmailOnFocus] = useState(false)
  const [emailOnBlur, setEmailOnBlur] = useState(false)
  const [email, setEmail] = useState('')
  const [signinError, setSigninError] = useState(error)
  const [passwordInvalid, setPasswordInvalid] = useState()
  const [passwordOnFocus, setPasswordOnFocus] = useState(false)
  const [passwordOnBlur, setPasswordOnBlur] = useState(false)
  const [password, setPassword] = useState('')
  const [eye, setEye] = useState(false)

  const onChangeEmail = (txtEmail) => {
    setEmailInvalid()
    setSignError()
    setEmail(txtEmail)
  }

  const onChangePassword = (txtPassword) => {
    setPasswordInvalid()
    setSignError()
    setPassword(txtEmail)
  }

  const emailFocus = useRef(null)
  useEffect(() => {
    emailFocus.current.focus()
  }, [])

  const onEye = () => {
    setEye(!eye)
  }

  const onSignIn = () => {
    if (!email.match(/\S+@\S+\.\S+/)) {
      setEmailInvalid('Insira um email válido')
    } else if (password === '') {
      setPasswordInvalid('Insira uma senha válida')
    } else {
      postSignIn({ email, password }).then(res => {
        if (res.token) {
          setStorageToken(res.token)
          setSuccess(true)
          ToastAndroid.show('Sign in success', ToastAndroid.SHORT)
        } else {
            setSigninError(res.signin_error)
        }
      }).catch(err => console.log('SignIn postSignIn err: ', err))
    }
  }

  if (success) {
    return <Home />
  } else {
    return (
      <ScrollView style={Styles.scroll_view} keyboardShouldPersistTaps='handled'>
        <View style={Styles.card} >
          <View style={Styles.card_header}>
            <Text style={Styles.card_header_text}>Task{'/n'}Management</Text>
          </View>
          <View style={Styles.card_body}>
            <View style={Styles.view_email}>
              {
                emailInvalid !== ''
                  ? (<Text style={Styles.email_label_danger}>{emailInvalid}</Text>)
                  : (<></>)
              }
              {
                emailOnFocus || (emailOnBlur && email !== '')
                  ? (<Text style={Styles.email_label}>Email</Text>)
                  : (<></>)
              }
              <TextInput
                style={Styles.email_text_input}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={email_text => onChangeEmail(email_text)}
                ref={emailFocus}
                placeholder={emailOnFocus ? '' : 'Email'}
                placeholderTextColor="#52575c"
                onFocus={() => {
                  setEmailOnFocus(true)
                  setEmailOnBlur(false)
                }}
                onBlur={() => {
                  setEmailOnFocus(false)
                  setEmailOnBlur(true)
                }}
              />
            </View>
            <View style={Styles.view_password}>
              {
                passwordInvalid !== ''
                  ? (<Text style={Styles.password_label_danger}>{passwordInvalid}</Text>)
                  : (<></>)
              }
              {
                passwordOnFocus || (passwordOnBlur && password !== '')
                  ? (<Text style={Styles.password_label}>Password</Text>)
                  : (<></>)
              }
              <View style={Styles.view_password_text_input}>
                <TextInput
                  style={Styles.password_text_input}
                  autoCorrect={false}
                  autoCapitalize="none"
                  secureTextEntry={eye ? false : true}
                  value={password}
                  onChangeText={password_text => onChangePassword(password_text)}
                  placeholder={passwordOnFocus ? '' : 'Password'}
                  placeholderTextColor="#52575c"
                  onFocus={() => {
                    setPasswordOnFocus(true)
                    setPasswordOnBlur(false)
                  }}
                  onBlur={() => {
                    setPasswordOnFocus(false)
                    setPasswordOnBlur(true)
                  }}
                />
                <Icon name={eye ? 'eye' : 'eye-slash'}
                  style={styles.password_icon_eye} />
                  onPress={onEye}
              </View>
            </View>
          </View>
          <View style={Styles.card_footer}>
            <TouchableOpacity
              style={Styles.button_signIn}
              onPress={onSignIn}
            >
              {
                signInError
                  ? (<Text style={Styles.button_signIn_text_danger}>{signinError}</Text>)
                  : (<Text style={Styles.button_signIn_text}>Sign In</Text>)
              }
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    )
  }

}