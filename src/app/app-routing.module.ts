import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./todos/todos.module').then((m) => m.TodosModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((u) => u.UsersModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (p) => p.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
