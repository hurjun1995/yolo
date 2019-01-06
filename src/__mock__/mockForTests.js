/* eslint-disable */
jest.mock('react-native-firebase', () => {
  return {
    firebase: jest.fn(() => ({
      auth: jest.fn(() => ({
        createUserAndRetrieveDataWithEmailAndPassword: jest.fn(() => Promise.resolve()),
        signInAndRetrieveDataWithEmailAndPassword: jest.fn(() => Promise.resolve()),
        signInAndRetrieveDataWithCredential: jest.fn(() => Promise.resolve()),
        FacebookAuthProvider: jest.fn(() => ({
          credention: jest.fn(() => Promise.resolve()),
        })),
        GoogleAuthProvider: jest.fn(() => ({
          credention: jest.fn(() => Promise.resolve()),
        })),
      })),
    })),
  }
})

jest.mock('react-native-fbsdk', () => ({
  AccessToken: jest.fn(() => {
    jest.fn(() => Promise.resolve({}))
  }),
  LoginManager: jest.fn(() => {
    jest.fn(() => Promise.resolve({}))
  }),
}))

jest.mock('react-native-google-signin', () => ({
  GoogleSignin: jest.fn(() => ({
    configure: jest.fn(() => Promise.resolve()),
    signIn: jest.fn(() => Promise.resolve()),
  })),
}))
