import DB from '@constants/api/config';
import ICatchedPokemonDTO from 'interfaces/dto/api/CatchedPokemon.dto';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const ALL_POKEMON: ICatchedPokemonDTO = await DB.getData('/');
    const FINDED_POKEMON = ALL_POKEMON.catched_pokemon.find(({ id }) => id === Number(params.id));
    return NextResponse.json({ is_pokemon_catched: FINDED_POKEMON ? true : false });
  } catch (error) {
    throw new Error(`Error getting: ${error}`);
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const CATCHED_POKEMON_ID = await DB.getIndex('/catched_pokemon', Number(params.id));

    await DB.delete(`/catched_pokemon[${CATCHED_POKEMON_ID}]`);

    return NextResponse.json('Pokemon liberado', { status: 200 });
  } catch (error) {
    return NextResponse.json('Pokemon no encontrado', { status: 409 });
  }
}
