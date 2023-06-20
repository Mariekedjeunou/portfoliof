import React from 'react'
import {BsWhatsapp} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'
const HeaderSocial = () => {
return (
<div className='header__social'>
<a href='https://wa.me/+237697724045' target='blank'><BsWhatsapp/> </a>
<a href='https://github.com/Mariekedjeunou' target='blank'><FaGithub/> </a>
<a href='https://facebook.com/profile.php?id=100071856189879' target='blank'><FaFacebookF/> </a>
<a href='https://twitter.com/mariek_djeunou?t=nkEnB9Rydo4AgY33oRjERg&s=09' target='blank'><CgTwitter/> </a>
</div>
)
}
export default HeaderSocial
