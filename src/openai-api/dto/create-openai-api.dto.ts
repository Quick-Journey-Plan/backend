import { IsNotEmpty } from 'class-validator';

export class CreateOpenaiApiDto {
    @IsNotEmpty()
    public readonly city: string;
}
