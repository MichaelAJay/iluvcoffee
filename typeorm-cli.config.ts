import { Coffee } from 'src/coffees/entities/coffee.entity'
import { Flavor } from 'src/coffees/entities/flavor.entity'
import { coffeeRefactor1654747438900 } from 'src/migrations/1654747438900-coffeeRefactor'
import { SchemaSync1654747837991 } from 'src/migrations/1654747837991-SchemaSync'
import { DataSource } from 'typeorm'

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [Coffee, Flavor],
    migrations: [coffeeRefactor1654747438900, SchemaSync1654747837991]
})