import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
   height: '100%',
  },
  image: {
    width: `100%`,
    height: 200,
  },
  titleContainer: {
    marginVertical: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },

  footerText: {
    color: colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
});
