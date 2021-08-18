import {NextPageContext} from 'next';
import cookie from 'cookie';
import {getUserById, readSession} from './api';

export async function getUserFromServerRequestNextJs(
  req: NextPageContext['req'],
): Promise<m3oUserSession> {
  if (!req?.headers) return null;
  const cookies = cookie.parse(req.headers.cookie || '');

  if (!cookies.session) return null;

  try {
    const microUserCookie = JSON.parse(
      cookies.session,
    ) as m3oLoginUserResponse['session'];

    await readSession(microUserCookie.id);

    const response = (await getUserById(
      microUserCookie.userId,
    )) as m3oUserResponse;

    return response.account;
  } catch (e) {
    return null;
  }
}
