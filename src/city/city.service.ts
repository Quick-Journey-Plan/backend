import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
    public constructor(@InjectRepository(City) private readonly cityRepository: Repository<City>) { }

    public async saveCity(city: City): Promise<City> {
        const cityObj = this.cityRepository.create(city);

        return await this.cityRepository.save(cityObj);
    }
}