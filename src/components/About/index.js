import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const About = () => (
  <div>
    <Header />
    <div className="About-container">
      <h1 className="about-heading">About Route</h1>
      <LogoutButton />
    </div>
  </div>
)
export default About
