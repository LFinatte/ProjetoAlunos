import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno'

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

export class AlunosComponent implements OnInit {

  aluno: Aluno = {
    ra: 1,
    name: 'Laura',
    curso: 'Tecnologia',
    semestre: 2,
    idade: 21
  };

  constructor() { }

  ngOnInit(): void {
  }

}
