import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {

    marginBottom:20,
  },
  
  label: {
    marginBottom: 8,
   color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,

    width:'80%',

    // borderColor:'yellow',
  },

  eye:{
  width:35,
   height:35,
   marginHorizontal:16,


  },

  eyeIcon:{
    width:'100%',
    height:'100%',
 
  }
});
