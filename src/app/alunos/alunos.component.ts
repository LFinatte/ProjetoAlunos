import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

export class AlunosComponent implements OnInit {

  alunos: Aluno[] = [];

  selectedAluno?: Aluno;

  constructor(private alunoService: AlunoService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos(): void {
    this.alunoService.getAlunos()
        .subscribe(alunos => this.alunos = alunos);
  }

  onSelect(aluno: Aluno): void {
    this.selectedAluno = aluno;
    this.messageService.add(`AlunosComponent: Selected aluno id=${aluno.ra}`);
  }
}
