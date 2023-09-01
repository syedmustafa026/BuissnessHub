// import React, { useState, useCallback, useEffect } from 'react'
// import { GiftedChat, InputToolbar,Send } from 'react-native-gifted-chat'
// import { View, Text, StyleSheet } from 'react-native'
// import * as colors from "../../utilities/colors"
// import * as fonts from "../../utilities/fonts"
// import Icon from "react-native-vector-icons//Feather"

// const Chat = ({ navigation, route }) => {
//   const [messages, setMessages] = useState([])

//   const CustomtInputToolbar = props => {
//     return (
//       <InputToolbar
//         {...props}
//         placeholderTextColor="#000000"
//         containerStyle={styles.inputToolBar}
//       />
//     );
//   };
//   const renderSend = (props) => {
//     return (
//       <Send {...props}>
//         <Icon
//           name="send"
//           style={{ marginHorizontal: 3, alignItems: "center", alignSelf: 'center' }}
//           size={32}
//           color={colors.primary}
//         />
//       </Send>
//     )
//   }
//   useEffect(() => {
//     navigation.setOptions({
//       title: route.params.title
//     })
//   }, [])
//   useEffect(() => {
//     setMessages([
//       // {
//       //   _id: 1,
//       //   text: 'Hello developer',
//       //   createdAt: new Date(),
//       //   user: {
//       //     _id: 2,
//       //     name: 'React Native',
//       //     avatar: 'https://loremflickr.com/140/140/any',
//       //   },
//       // },
//     ])
//   }, [])

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages =>
//       GiftedChat.append(previousMessages, messages),
//     )
//   }, [])
//   return (
//     <>
//       <GiftedChat
//         placeholder='Send Message...'
//         renderInputToolbar={props => CustomtInputToolbar(props)}
//         keyboardShouldPersistTaps={'never'}
//         messages={messages}
//         onSend={messages => onSend(messages)}
//         renderSend={renderSend}
//         user={{
//           _id: 1,
//         }}
//       />
//     </>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.white,
//     padding: 20,
//     flexDirection: 'row',
//     borderBottomWidth: 0.5,
//     borderColor: 'gray',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 8,
//     },
//     shadowOpacity: 0.44,
//     shadowRadius: 10.32,
//     elevation: 26,
//   },
//   inputToolBar: {
//     backgroundColor: colors.white,
//     borderTopColor: '#E8E8E8',
//     borderTopWidth: 1,
//     paddingBottom: 4,
//     marginHorizontal: 10,
//     marginVertical: 7,
//     borderRadius: 30,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.27,
//     shadowRadius: 4.65,
//     elevation: 6,
//   },
// });

// export default Chat



import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View, Text } from 'react-native'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const Chat = ({navigation,route}) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    navigation.setOptions({
      title: route.params.title
    })
  }, [])
  useEffect(() => {
    setMessages([
      // {
      //   _id: 1,
      //   text: 'Hello developer',
      //   createdAt: new Date(),
      //   user: {
      //     _id: 2,
      //     name: 'React Native',
      //     avatar: 'https://loremflickr.com/140/140/any',
      //   },
      // },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>
  )
}
export default Chat