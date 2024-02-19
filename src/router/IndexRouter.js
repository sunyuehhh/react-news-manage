import React from 'react'
import {HashRouter} from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sandbox/NewsSandBox'

export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/" render={()=>
       localStorage.getItem("token")?
        <NewsSandBox></NewsSandBox>:
        <Redirect to="/login"></Redirect>
      }></Route>
      </Switch>
    </HashRouter>
  )
}
