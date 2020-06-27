import styled from 'styled-components'
import { Add, PersonAdd, Settings } from '@styled-icons/material'

export const Container = styled.div`
  grid-area: CHANNEL_LIST;
  background: var(--secondary);
`

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 8px;
`

export const ChannelText = styled.div``

export const AddIcon = styled(Add)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`

export const Info = styled.div``

export const HashtagIcon = styled.div``

export const ChannelName = styled.div``

export const IconsContainer = styled.div``

export const AddPersonIcon = styled(PersonAdd)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`

export const SettingsIcon = styled(Settings)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`
