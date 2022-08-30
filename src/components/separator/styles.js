import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    
  },
  lineCont: {
    flexDirection: 'column',
    flexBasis: '33%',
    height: '100%',
    justifyContent: 'center',
  },
  line: {
    height: 1,
    backgroundColor: colors.lightGrey,
  },
  text: {
    flexBasis: '33%',
    color: colors.blue,
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
