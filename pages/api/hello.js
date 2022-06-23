// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if(!session) return res.status(401).send('unauthorized');

  res.status(200).json({ name: 'John Doe' })
}
