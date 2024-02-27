import EApiMethods from '@constants/enum';
import { NextApiRequest, NextApiResponse } from 'next';
import { JsonDB, Config } from 'node-json-db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = new JsonDB(new Config('db', true, false, '/'));
  if (req.method === 'GET') {
    var data = await db.getData('/catchedPokemon');

    return res.status(200).json(data);
  } else if (req.method === 'POST') {
    const newPokemon = {
      id: req.body.id,
      name: req.body.name
    };

    const index = await db.getIndex('/catchedPokemon', Number(newPokemon.id));

    if (index === -1) {
      await db.push('/catchedPokemon[]', newPokemon);
      return res.status(200).json(newPokemon);
    } else {
      return res.status(409).send('Pokemon ya existente');
    }
  }
  return res.status(405).send('Method not allowed.');
}

/* 
const DB = new JsonDB(new Config('db', true, false, '/'));

const handler = async (req: NextApiRequest, res: NextApiResponse) => ({
  [EApiMethods.GET]: async () => {
    try {
      console.log('Im getting from');
      return res.status(200).json(DB.getData('/catchedPokemon'));
    } catch (error) {
      throw new Error(`Error sending: ${error}`);
    }
  },
  [EApiMethods.POST]: async () => {
    try {
      const NEW_POKEMON = req.body;

      console.log(NEW_POKEMON);

        const CATCHED_POKEMON_ID = await DB.getIndex('/catchedPokemon', Number(NEW_POKEMON.id));

      if (CATCHED_POKEMON_ID === -1) {
        await DB.push('/catchedPokemon[]', NEW_POKEMON);
        return res.status(200).json(NEW_POKEMON);
      } 

      return res.status(409).send('Pokemon ya existente');
    } catch (error) {
      throw new Error(`Error updating: ${error}`);
    }
  }
});

export default handler; */
