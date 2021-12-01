import { height } from '@mui/system';
import React from 'react';

const MODAL_STYLES = {
	backgroundColor: ' rgba(233,233,233,1) 0%, rgba(226,238,215,1) 35%, rgba(223,234,239,1)',
	padding: '50px',
	zIndex: 1000,
	width: '500px',
	height: '200px',
};

const ButtonStyle = {
	display: 'flex',
	marginTop: '10px',
	alignItems: 'flex-end',
};

const ModalStyle = {
	display: 'flex',
	alignContent: 'center',
	alignItems: 'center',
};

const OVERLAY_STYLE = {
	display: 'flex',
	alignContent: 'center',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0,0,0,.7)',
	zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
	if (!open) return null;
	return (
		// <div style={ModalStyle}>
		<div style={OVERLAY_STYLE}>
			<div style={MODAL_STYLES}>
				{children}
				<button style={ButtonStyle} onClick={onClose}>
					Close
				</button>
			</div>
			{/* </div> */}
		</div>
	);
}
