import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../caterogy-read/category.model';
import { CategoryService } from '../caterogy-read/category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit {

  category: Category = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get('id')!
    this.finByIdDelete();
  }

  finByIdDelete(): void {
    this.service.findById(this.category.id!).subscribe((resposta) => {
      this.category.nome = resposta.nome
      this.category.descricao = resposta.descricao
    })
  }

  delete(): void {
    this.service.delete(this.category.id!).subscribe((resposta) => {
      this.router.navigate(['catergory'])
      this.service.message('Categoria Deletada')
    })
  }

  cancel() {
    this.router.navigate(['category'])
  }

}
