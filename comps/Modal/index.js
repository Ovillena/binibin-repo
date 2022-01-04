import React from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.css';

const MODAL_STYLES = {
	backgroundColor: 'rgba(233,233,233,1)',
	padding: '20px',
	zIndex: 2,
	width: '500px',
	height: 'min-content',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	borderRadius: '10px'
};

const ButtonStyle = {
	display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: 'none',
	borderRadius: '10px',
	width: 'fit-content',
		cursor: 'pointer'
};

const OVERLAY_STYLE = {
	display: 'flex',
	alignContent: 'center',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0,0,0,.7)',
	zIndex: 1,
};

export default function Modal({ open, children, onClose, router = useRouter() }) {
	if (!open) return null;
	return (
		// <div style={ModalStyle}>
		<div style={OVERLAY_STYLE}>
			<div style={MODAL_STYLES}>
				{/* <button className={styles.btnClose} style={ButtonStyle} onClick={onClose}>
					X
				</button> */}
				<span className={styles.message}>{children}</span>
				<div className={styles.btnContainer}>
					<button
						className={styles.btnEntries}
						style={ButtonStyle}
						onClick={onClose}
					>
						Close
					</button>
					<button
						className={styles.btnEntries}
						style={ButtonStyle}
						onClick={() => router.push('/pastentries')}
					>
						View Entries
					</button>
					<button
						className={styles.btnEntries}
						style={ButtonStyle}
						onClick={() => router.push('/graphs')}
					>
						View Graphs
					</button>

				</div>
			</div>
			{/* </div> */}
		</div>
	);
}
