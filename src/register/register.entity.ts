import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RegisterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
