// Copyright (c) 2024 t2vee. All rights reserved.
// Use of this source code is governed by an MPL license.


import failureEMPTY from "../../responses/raw/failure-EMPTY";
import createMethod from "../../lib/mfa/createMethod";
import successCONTENT from "../../responses/raw/success-CONTENT";

export default async (request, env) => {
	try {
		const updateResponse = await createMethod(env, request.accesstoken, request.userid)
		return successCONTENT(env, updateResponse);
	} catch (e) {
		console.error(e)
		return failureEMPTY(env, 418)
	}
}
