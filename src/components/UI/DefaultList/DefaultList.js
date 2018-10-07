// @flow
import React from 'react'
// import { View, Text } from 'react-native'
import { List, ListItem } from 'react-native-elements'

type Props = {
  list: Array<Object>,
}

function DefaultList(props: Props) {
  const { list } = props
  return (
    <List>
      {list.map(item => (
        <ListItem key={item.title} title={item.title} leftIcon={{ name: item.icon }} />
      ))}
    </List>
  )
}

export default DefaultList
