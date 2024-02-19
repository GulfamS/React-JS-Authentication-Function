import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  const setCookiesAndNevigateToHome = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30, path: '/'})
    history.replace('/')
  }
  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const responseFetch = await fetch(url, options)
    const fetchedData = await responseFetch.json()

    if (responseFetch.ok === true) {
      setCookiesAndNevigateToHome(fetchedData.jwt_token)
    }
  }
  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button type="button" className="login-btn" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
