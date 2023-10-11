import { IsNotEmpty } from 'class-validator';

export class CreateOpenaiApiDto {
    @IsNotEmpty()
    private readonly city: string;
}
