import { Category } from './category.model';
import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caterogy-read',
  templateUrl: './caterogy-read.component.html',
  styleUrls: ['./caterogy-read.component.scss']
})
export class CaterogyReadComponent implements OnInit {

  category: Category[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    // this.findAll
  }


//   findAll() {
//     // this.service.findAll().subscribe(res =>{
//       console.log(res);
//       this.category = res;
//     })
//   }
}
