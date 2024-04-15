import React ,{ useState} from 'react'

function Profile() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    const closeMenu =() => setClick(false);
    
  return (
    <div>Profile</div>
  )
}

export default Profile