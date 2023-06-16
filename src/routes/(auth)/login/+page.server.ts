import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcrypt';

import { db } from '$lib/database';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) throw redirect(303, '/');
};

const login: Action = async ({ request, cookies }) => {
	const data = await request.formData();
	const username = data.get('username');
	const password = data.get('password');

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return fail(400, { invalid: true });
	}

	const user = await db.user.findUnique({
		where: { username }
	});

	if (!user) {
		return fail(400, { isAuth: false });
	}

	const valid = await bcrypt.compare(password, user.passwordHash);

	if (!valid) {
		return fail(400, { isAuth: false });
	}

	const authenticatedUser = await db.user.update({
		where: { id: user.id },
		data: {
			userAuthToken: crypto.randomUUID()
		}
	});

	cookies.set('session', authenticatedUser.userAuthToken, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 30 // 30 days
	});

	throw redirect(302, '/');
};

export const actions: Actions = { login };
