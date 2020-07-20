import React, { Component } from 'react'
import UserProfile from 'react-user-profile'

class Profile extends Component {
    render() {
        const userName = 'Matt'
        const location = 'Australia'

        return (
            <div style={{ margin: '0 auto', width: '100%' }}>
              <UserProfile userName={userName} location={location} initialLikesCount={121} initialFollowingCount={723} initialFollowersCount={4433} initialComments={comments} />
            </div>
          )
        }
      }

export default Profile