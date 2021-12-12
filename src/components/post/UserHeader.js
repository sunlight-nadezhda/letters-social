import PropTypes from 'prop-types';
import React from 'react';

const UserHeader = props => {
    const { user } = props;
    return (
        <div className="user-header">
            <div className="user-info-section">
                {/* <img src={user.profilePicture} width={25} height={25} className="img-circle" alt="user avatar" /> */}
                <a>{user.name}</a>
            </div>
        </div>
    );
};

UserHeader.propTypes = {
    user: PropTypes.shape({
        profilePicture: PropTypes.string.isRequired,
        name: PropTypes.string
    })
};

UserHeader.defaultProps = {
    user: {
        profilePicture: '/static/assets/users/4.jpeg'
    }
};

export default UserHeader;
