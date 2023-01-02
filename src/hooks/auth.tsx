import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';

import { userCreateSession } from '@storage/user/userCreateSession';
import { userDeleteLogged } from '@storage/user/userDeleteLogged';
import { userGetLogged } from '@storage/user/userGetLogged';

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextData {
  user: User;
  authIsReady: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [authIsReady, setAuthIsReady] = useState(false);
  const [user, setUser] = useState<User>({} as User);
 
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: CLIENT_ID!,
    redirectUri: REDIRECT_URI,
  });

  async function signInWithGoogle() {
    try {
      await promptAsync();
    } catch (error: any) {
      throw error;
    }
  }

  async function getGoogleUser(googleCredential: string) {
    try {
      const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleCredential}`);
      const userInfo = await response.json();
      
      const userLogged = {
        id: userInfo.id,
        email: userInfo.email,
        name: userInfo.given_name,
        photo: userInfo.picture ?? `https://ui-avatars.com/api/?name=${userInfo.given_name}&length=1`,
      };

      setUser(userLogged);
      await userCreateSession(userLogged);
    } catch (error) {
      throw error;
    }
  }

  async function signInWithApple(){
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ]
      });

      if(credential) {
        const name = credential.fullName!.givenName!;
        const photo = `https://ui-avatars.com/api/?name=${name}&length=1`;
        const userLogged = {
          id: String(credential.user),
          email: credential.email!,
          name,
          photo
        };

        setUser(userLogged);
        await userCreateSession(userLogged);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      await userDeleteLogged();
      setUser({} as User); 
    } catch (error) {
      throw error;
    }
  }

  async function fetchUserLogged() {
    try {
      const userLogged = await userGetLogged();
      setUser(userLogged);

      setAuthIsReady(true);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if(response && response.type === 'success') {
      const { access_token } = response.params;
      getGoogleUser(access_token);
    }
  }, [response]);

  useEffect(() => {
    fetchUserLogged();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      authIsReady,
      signInWithGoogle,
      signInWithApple,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }
