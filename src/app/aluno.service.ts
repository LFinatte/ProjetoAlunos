import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Aluno } from './aluno';
import { ALUNOS } from './mock-alunos';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class AlunoService {

  constructor(private messageService: MessageService) { }

  getAlunos(): Observable<Aluno[]> {
    const alunos = of(ALUNOS);
    this.messageService.add('AlunoService: fetched alunos');
    return alunos;
  }

  getAluno(ra: number): Observable<Aluno> {
    const aluno = ALUNOS.find(h => h.ra === ra)!;
    this.messageService.add(`AlunoService: fetched aluno ra=${ra}`);
    return of(aluno);
  }
}