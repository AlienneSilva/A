import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Cliente{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;

    @Column()
    numeroConteiner:string;  

    @Column()
    tipo:string;

    @Column()
    status:string;

    @Column()
    categoria:string;

    @Column()
    tipoMovimentacao:string;

    @Column()
    dataInicial:Date;

    @Column()
    dataFinal:Date;
    
    @Column({
        default: false
    })
    finished:boolean;
    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}