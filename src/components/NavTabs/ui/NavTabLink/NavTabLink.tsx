import React from 'react';

import {NavTabLinkProps} from './NavTabLink.types';

function NavTabLink({foo, ...tabProps}: NavTabLinkProps) {
	return <span {...tabProps}>{foo}</span>;
}

export default NavTabLink;
