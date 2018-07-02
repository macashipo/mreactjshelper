const Auth = {
  METHOD:{
    NORMAL: 'NORMAL',
    GOOGLE: 'GOOGLE',
    FACEBOOK: 'FACEBOOK',
  },
  Token:{
    key: null,
    type: 'bearer',
    method: null,
  },
  Credential:{

  },
  Info:{

  },
  isLoggedIn(){
    if(Auth.Token.key){
      return true;
    }
    return true;
  },
  getTokenKey(){
    return Auth.Token.key;
  },
  getTokenWithBearer(){
    return Auth.Token.type + ' ' + Auth.Token.key;
  },
  login({tokenKey,tokenType,method,}){
    Auth.Token.key = tokenKey;
    Auth.Token.type = tokenType;
    Auth.Token.method = method;
    //Update Service with new token
  },
  loginWithFirebase(result){
    console.log('loginWithFirebase:',result);
    if(result){
      if(result.credential){
        Auth.login({
          tokenKey: result.credential.accessToken,
          tokenType: 'bearer',
          method: result.credential.signInMethod
        });
      }
    }
  },
  logout(){
    Auth.Token.key = null;
    Auth.Token.type = 'bearer';
    Auth.Token.method = null;
  },
}

export default Auth;