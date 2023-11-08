import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
    constructor(@InjectRepository(City) private readonly cityRepository: Repository<City>) { }

    public async getCityFromDB(inputCity: string): Promise<City> {
        return await this.cityRepository.findOne({ where: { title: inputCity }, relations: ["plans"] });
    }

    public async saveCity(city: { title: string }): Promise<City> {
        const cityObj = this.cityRepository.create(city);

        return await this.cityRepository.save(cityObj);
    }
}
