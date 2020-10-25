import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './ModelUsers';

/**
 * relaciomanento provider(agendamento) e user
 * Um para um (OneToOne) - um user tem 1 provider(agendamento)
 * Um para muitos (OneToMany) - um user tem muitos provider(agendamento)
 * Muitos para um (ManyToOne) - muitos agendamentos para um usuário
 * Muitos para muitos (ManyToMany) -
 * partindo do model atual para o model da ForeignKey(model user, no caso)
 */

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => User) // muitos aprovider(gendamentos) para um user(usuário), então no model user, entra o OneToMany, pq 1 user poder ter muitos agendamentos
  @JoinColumn({ name: 'provider_id' }) // qual coluna que vai identificar esse prestador
  provider: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @Column('time with time zone')
  date: Date;
}

export default Appointment;
