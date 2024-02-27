import DB from '@constants/api/config';
import { IPokemonDTO } from 'interfaces/dto/api/CatchedPokemon.dto';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ catched_pokemon: DB.getData('/catched_pokemon') });
  } catch (error) {
    throw new Error(`Error getting: ${error}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const NEW_POKEMON: IPokemonDTO = await req.json();

    const CATCHED_POKEMON_ID = await DB.getIndex('/catched_pokemon', Number(NEW_POKEMON.id));

    if (CATCHED_POKEMON_ID === -1) {
      await DB.push('/catched_pokemon[]', NEW_POKEMON);
      return NextResponse.json({ new_pokemon: NEW_POKEMON }, { status: 200 });
    }

    throw new Error('Pokemon ya existente');
  } catch (error) {
    return NextResponse.json('Pokemon ya existente', { status: 409 });
  }
}
