import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos(): void {
    this.alunoService.getAlunos()
    .subscribe(alunos => this.alunos = alunos);
  }
}
