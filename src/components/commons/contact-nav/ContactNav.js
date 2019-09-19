import React from 'react'
import {Link} from 'react-router-dom'
import {CONTACT_US_URL} from '../../../constants/constants.js'

const ContactNav = () => {
    return (
        <Link to={CONTACT_US_URL}>Contact Us</Link>
    )
}

export default ContactNav;