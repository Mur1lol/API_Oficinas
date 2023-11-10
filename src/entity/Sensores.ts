import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Sensores {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar' })
    data: string;

    @Column({ type: 'varchar' })
    hora: string;

    @Column({ 
        type: 'double precision', 
        default: 0, 
    })
    latitude: number;

    @Column({ 
        type: 'double precision', 
        default: 0, 
    })
    longitude: number;

    @Column({ 
        type: 'double precision', 
        default: 0, 
    })
    altitude: number;

    @Column({ 
        type: 'double precision', 
        default: 0, 
    })
    temperatura: number;

    @Column({ 
        type: 'double precision', 
        default: 0, 
    })
    pressao: number;

    @Column({ 
        type: 'double precision', 
        default: 0, 
    })
    umidade: number;

    @Column({ 
        type: 'double precision', 
        default: 0, 
    })
    velocidadeVento: number;

    @Column({
        type: 'varchar',
        default: 'N'
    })
    direcaoVento: string;

    @Column({ 
        type: 'double precision', 
        default: 0, 
    })
    indiceUV: number;

    @Column({ 
        type: 'double precision', 
        default: 0, 
    })
    intensidadeLuminosa: number;

    @Column({
        type: 'bool',
        default: false
    })
    chuva: boolean;

    @Column({ 
        type: 'double precision', 
        default: 0, 
    })
    volumeChuva: number;

    @Column({ 
        type: 'double precision', 
        default: 0, 
    })
    porcentagemBaterias: number;

    @Column({ 
        type: 'double precision', 
        default: 0, 
    })
    tensaoEletricaPlacaSolar: number;

    @Column({
        type: 'varchar',
        default: 'N'
    })
    orientacaoPlacaSolar: string;
}