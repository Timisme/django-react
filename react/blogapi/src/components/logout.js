import React, { useState, useEffect } from 'react';
import axiosInstance from '../global/axios';
import { useHistory } from 'react-router-dom';

// when an user logs out, put the refresh token in the blacklist
export default function SignOut() {
	const history = useHistory();

	useEffect(() => {
		const response = axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		history.push('/login');
	});
	return <div>Logout</div>;
}