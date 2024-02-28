import DB from '@constants/api/config';
import ICatchedPokemonDTO, { IPokemonDTO } from 'interfaces/dto/api/CatchedPokemon.dto';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const ALL_POKEMON: ICatchedPokemonDTO = await DB.getData('/catched_pokemon');
    return NextResponse.json({ catched_pokemon: ALL_POKEMON }, { status: 200 });
  } catch (error) {
    throw new Error(`Error getting: ${error}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const NEW_POKEMON: IPokemonDTO = await request.json();

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
