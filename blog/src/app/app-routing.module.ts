import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PostComponent } from './views/post/post.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PostCreateComponent } from './components/postCrud/post-create/post-create.component';
import { PostUpdateComponent } from './components/postCrud/post-update/post-update.component';
import { PostDeleteComponent } from './components/postCrud/post-delete/post-delete.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { CategoriaComponent } from './components/categoria/categoria.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: "posts/:id",
    component: PostComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: "posts/byuser/username",
    component: DashboardComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: "posts/username/categorias/:idCategoria",
    component: PostCreateComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: "posts/:id/update",
    component: PostUpdateComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: "posts/:id",
    component: PostDeleteComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: "categoria",
    component: CategoriaComponent,
    canActivate:[AuthGaurdService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
