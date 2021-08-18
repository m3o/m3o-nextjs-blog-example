import {makeService} from '..';

const userService = makeService<m3oUserMethods>('user');

export function signUpUser(
  payload: m3oCreateUserData,
): Promise<m3oUserResponse> {
  return userService.request('Create', payload);
}

export function loginUser(
  payload: m3oCreateUserData,
): Promise<m3oUserResponse> {
  return userService.request('Login', payload);
}

export function getUserById(id: string): Promise<m3oUserResponse> {
  return userService.request('Read', {id});
}

export function logoutUser(sessionId: string): Promise<void> {
  return userService.request('Logout', {sessionId});
}

export function readSession(sessionId: string): Promise<m3oUserSession> {
  return userService.request('ReadSession', {sessionId});
}
