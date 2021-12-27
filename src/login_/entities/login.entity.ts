import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Login {
  @PrimaryColumn()
  id: string;

  @Column()
  pw: string;
}
