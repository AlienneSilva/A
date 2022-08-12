import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Relatorio{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    numeroConteiner:string;    
    @Column()
    categoria:string;
    @Column()
    tipoMovimentacao:string;  
    @Column({
        default: false
    })
    finished:boolean;
    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
