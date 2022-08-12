import "reflect-metadata"
import { DataSource } from "typeorm";
import { Cliente } from "./entity/Cliente";
import { Relatorio } from "./entity/Relatorio";

export const AppDataSource = new DataSource({
    type:"postgres",
    host: "castor.db.elephantsql.com",
    port: 5432,
    username: "tsmfwrcl",
    password: "UNa6X3UD2c_Vz70ndyOVGHRds_m4f0rT",
    database: "tsmfwrcl",
    entities: [Cliente],
    synchronize: true,
    logging:false,    
})
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
