import './Navbar..css'
import rev from '../../Assets/rev.png'
const Navbar = () => {
  return (
    <div>
        <div className="nav">
            <div className="logo">
                <img className='image' src={rev}></img>
                - olution
            </div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='contact'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
