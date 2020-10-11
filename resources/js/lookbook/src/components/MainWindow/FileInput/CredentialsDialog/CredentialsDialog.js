import {Route, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';
import React from 'react'
import styled from 'styled-components'

const Dialog = styled.div`
  display: ${props => props.display};
  position: fixed;

`
const CredentialsDialog = (props) => {
  const display =  useSelector (state => state.dialog.isVisible)
  return (
      <Dialog display={'flex'}>
        <Route path="/sign-in">This is a sign in</Route>
        <Route path="/sign-up">This is a sign up</Route>
      <NavLink to='/auth'>SIGNIN</NavLink>
      <NavLink to='/auth/sign-up'>SIGNUP</NavLink>
      </Dialog>

  )
}
export default CredentialsDialog
