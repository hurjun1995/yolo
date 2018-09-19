import { Platform } from 'react-native';

export const platformSpecific = (ios, android) => (Platform.OS === 'ios' ? ios : android);
