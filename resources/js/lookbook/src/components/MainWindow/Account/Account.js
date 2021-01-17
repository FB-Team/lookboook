import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { toggle } from '../../../redux/actions/content/credentialsDialog';
import defaultAccount from '../../../assets/defaultAccount.png'
import s from './Account.module.css';

const Account = (props) => {
  const dispatch = useDispatch ()
  const isVisible = useSelector (state => state.dialog.isVisible)
  function handleClick (e) {
    if (!isVisible)
    dispatch (toggle ())
  }
  function changeAuthPath (e) {
    dispatch ( changeAuthPath (e.target.dataset.auth) )
  }
  return (
      <div className={s.Account} onClick={handleClick}>          
          <span className={s.label}>Ваш аккаунт</span>

        <div className={s.authButtons} onClick={changeAuthPath}>
          <button data-auth="sign-in">Sign in</button>
          <button data-auth="sign-up">Sign up</button>
        </div>
      </div>
  )
}
export default Account
