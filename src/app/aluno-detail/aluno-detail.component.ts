import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: [ './aluno-detail.component.css' ]
})
export class AlunoDetailComponent implements OnInit {
  aluno: Aluno | undefined;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAluno();
  }

  getAluno(): void {
    const ra = Number(this.route.snapshot.paramMap.get('ra'));
    this.alunoService.getAluno(ra)
      .subscribe(aluno => this.aluno = aluno);
  }

  goBack(): void {
    this.location.back();
  }
}
