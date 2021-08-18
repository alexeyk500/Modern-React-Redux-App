import React from 'react';
import classes from './Authorisation.module.css'
import {useAppSelector} from "../../store/store";
import {useDispatch} from "react-redux";
import {setAuth} from "../../store/Authorisation/actions";

const Authorisation = () => {

  const dispatch = useDispatch();
  const isAuth = useAppSelector(state => state.auth.isAuth);

  const onClickButtonAuth = () => {
    dispatch(setAuth(true))
  }

  const onClickButtonDeAuth = () => {
    dispatch(setAuth(false))
  }

  const onClickButtonChange = () => {
    dispatch(setAuth(!isAuth))
  }

  console.log('render Authorisation')

  const classesForAuthButton = []
  classesForAuthButton.push(classes.buttonAuth)
  if (isAuth) {
    classesForAuthButton.push(classes.buttonDisabled)
  }

  const classesForDeAuthButton = []
  classesForDeAuthButton.push(classes.buttonDeAuth)
  if (!isAuth) {
    classesForDeAuthButton.push(classes.buttonDisabled)
  }

  return (
    <div className={classes.container}>
      <div className={classes.containerTitleAndButton}>
        <div className={classes.containerTitle}>
          {isAuth? 'true' :'false'}
        </div>
        <div className={classes.containerButtons}>
          <button
            className={classesForAuthButton.join(' ')}
            onClick={onClickButtonAuth}
            disabled={isAuth}
          >
            Auth
          </button>
          <button
            className={classesForDeAuthButton.join(' ')}
            onClick={onClickButtonDeAuth}
          >
            DeAuth
          </button>
        </div>
        <div className={classes.containerButtonChange}>
          <button
            className={classes.buttonChange}
            onClick={onClickButtonChange}
          >
            Change
          </button>
        </div>
      </div>


    </div>
  );
};

export default Authorisation;