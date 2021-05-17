import React, { useState } from 'react';
import { Text } from 'react-native';
import Loading from '../pages/Loading';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import { getStorageToken} from '../services/AuthService'

export default function Auth() {
  const [component, setComponent] = useState('Loading')
  

  if (component === 'Loading') {
    return <Loading/>
  } else if (component === 'signIn') {
    return <SignIn error={error}/>
  } else if (component === 'Home') {
    return <Home/>
  } else if (component === 'ErrorPage') {
    return <ErrorPage error={error}/>
  } 
 
}