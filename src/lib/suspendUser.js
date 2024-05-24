// Copyright (c) 2024 t2vee. All rights reserved.
// Use of this source code is governed by an MPL license. 


export default async function (env, accessToken, userId) {
	const url = `${env.LOGTO_DOMAIN}/api/users/${userId}/is-suspended`;
	const headers = {
		'Authorization': `Bearer ${accessToken}`,
		'Content-Type': 'application/json',
	};
	const body = JSON.stringify({"isSuspended": true})
	const response = await fetch(url, { method: 'PATCH', headers, body });
	if (!response.ok) {
		console.error('Error accessing resource:', response);
		throw { message: 'Failed to access resource - ERR 078963', status: response.status };
	}
	return response;
}
