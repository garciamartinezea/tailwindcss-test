import React from 'react';
import SocialSection from './socialSection'
import MenuSeccion from './menuSeccion'

class Header extends React.Component {

    render() {
        return (
            <>
                <SocialSection/>
                <MenuSeccion/>
            </>
        );
    }
}

export default Header