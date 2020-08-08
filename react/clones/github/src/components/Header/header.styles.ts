import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`

export const SearchBar = styled.div`
  padding-left: 16px;
  width: 100%;

  input {
    background: var(--search);
    width: 100%;
    padding: 7px 12px;
    outline: 0;

    &:focus {
      width: 318px;
    }

    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`

export const GithubIcon = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
