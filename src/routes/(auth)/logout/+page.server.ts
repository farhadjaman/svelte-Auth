import { redirect } from '@sveltejs/kit';
import type { Action, Actions } from './$types';

const logout: Action = async ({ cookies }) => {
	cookies.set('session', '', {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
		maxAge: 0
	});
	throw redirect(302, '/login  ');
};

export const actions: Actions = { default: logout };
