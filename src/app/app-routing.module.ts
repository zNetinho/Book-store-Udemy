import { CaterogyReadComponent } from './components/views/category/caterogy-read/caterogy-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/views/category/category-create/category-create.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'category',
    component:CaterogyReadComponent
  },
  {
    path:'category/create',
    component: CategoryCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
