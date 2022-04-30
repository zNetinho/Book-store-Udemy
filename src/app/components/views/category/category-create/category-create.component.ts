import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../caterogy-read/category.model';
import { CategoryService } from '../caterogy-read/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.category).subscribe(() => {
        this.router.navigate(['category'])
        this.service.message('Criado com sucesso !');
    }, err => {
      for (let i = 0; i < err.error.errors.length; i++) {
        this.service.message(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['category'])
  }
}
