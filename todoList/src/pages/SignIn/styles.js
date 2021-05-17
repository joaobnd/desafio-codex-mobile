import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scroll_view: {},
  card: {
    marginTop: 20,
  },
  card_header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  card_header_text: {
    color: '#fdfaf6',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  card_body: {
    paddingHorizontal:10,
    paddingTop: 50,
    paddingBottom:30,
  },
  view_email: {
    width:'100%',
  },

  email_label_danger: {
    color: "#ee5f5b",
    fontSize:25,
    fontWeight: '400',
    textAlign:'left',
    marginLeft:16,
    marginRight:16,
  },

  email_label: {
    color: '#52575c',
    fontSize:25,
    fontWeight: '400',
    textAlign:'left',
    marginLeft:16,
    marginRight:16,
  },

  email_text_input: {
    borderBottomWidth: 3,
    borderBottomColor: '#52575c',
    fontSize: 28,
    color: '#c2cad1',
    marginLeft: 15,
    marginRight:15,
  },

  view_password: {
    width:'100%',
  },

  password_label_danger:{
    color: '#ee5f5b',
    fontSize:25,
    fontWeight: '400',
    textAlign:'left',
    marginLeft:16,
    marginRight:16,
  },

  password_label: {
    color: '#52575c',
    fontSize:25,
    fontWeight: '400',
    textAlign:'left',
    marginLeft:16,
    marginRight:16,
  },

  view_password_text_input: {
    flexDirection: 'row',
    marginTop: 3,
  },

  passowrd_text_input: {
    borderBottomWidth: 3,
    borderBottomColor: '#52575c',
    fontSize: 28,
    color: '#c2cad1',
    marginLeft: 15,
    flex: 0.9,
  },

  passoword_icon_eye: {
    borderBottomWidth: 3,
    borderBottomColor: '#52575c',
    fontSize: 28,
    color: '#52575c',
    marginRight:15,
    padding: 10,
    textAlign: 'center',
    textAlignVertical:'center',
    flex:0.1,
  },

  card_footer: {
    paddingBottom: 12,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

  },

  button_sign: {
    borderWidth: 3,
    borderColor:'#525775c',
    borderRadius: 10,
    width: '100%',
    marginTop:20,
  },

  button_signin_text_danger: {
    color: '#ee5f5b',
    fontSize:20,
    fontWeight: '500',
    margin:15,
    textAlign:'center',
    textAlignVertical:'center',
  },

  button_signin_text: {
    color: '#e9ecef',
    fontSize:28,
    fontWeight: '500',
    margin:15,
    textAlign:'center',
    textAlignVertical:'center',
  }
});
