import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';


@Schema()

export class Pokemon extends Document{
    static UpdateOne(updatePokemonDto: UpdatePokemonDto, arg1: { new: boolean; }) {
      throw new Error('Method not implemented.');
    }
    @Prop({
        unique: true,
        index: true,
    })
    name: string;
    @Prop({
        unique: true,
        index: true,
    })

    no: number;

}


export const PokemonSchema= SchemaFactory.createForClass (Pokemon);