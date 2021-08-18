import {NextApiRequest, NextApiResponse} from 'next';
import {signUpUser} from '../../../m3o/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(404).send({});
    return;
  }

  try {
    await signUpUser(req.body);
    res.send({});
  } catch (e) {
    res.status(e.Code).send({
      message: e.Detail,
    });
  }
}
