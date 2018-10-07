/* eslint import/prefer-default-export: 0 */
import { Platform, Dimensions } from 'react-native'

export const platformSpecific = (ios, android) => (Platform.OS === 'ios' ? ios : android)
export const getWindow = () => Dimensions.get('window')
