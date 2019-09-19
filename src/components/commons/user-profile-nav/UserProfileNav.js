import React from 'react'
import {Link} from 'react-router-dom'
import {USER_PROFILE_URL} from '../../../constants/constants.js'

const UserProfileNav = () => {
    return (
        <Link to={USER_PROFILE_URL}>Profile</Link>
    )
}

export default UserProfileNav;