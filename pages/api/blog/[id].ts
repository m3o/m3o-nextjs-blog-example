import {NextApiRequest, NextApiResponse} from 'next';
import {readDb} from '../../../m3o/db';

type Query = {
  id: string;
};

export const fetchBlogPost = (id: string): Promise<BlogPost> =>
  readDb({table: 'posts', id});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const query = req.query as Query;

  if (req.method !== 'GET') {
    res.status(404).send({});
    return;
  }

  try {
    const response = await fetchBlogPost(query.id);
    console.log(response);

    res.send({});
  } catch (e) {
    console.log(e);
  }
}
