import './Button.module.css';

import React from 'react';

interface ButtonProps {
	label: string;
}

function Button(props: ButtonProps) {
	const gip = async (dir) => {
		const g = await dir('gggg');

		return g + 10;
	};

	return (
		<button className="button" onClick={gip}>
			{props.label}
		</button>
	);
}

export default Button;
