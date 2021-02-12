import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './pages/list/edit/edit.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
    {
        path: "",
        component: ListComponent
    },
    {
        path: "element/add/:id",
        component: EditComponent
    },
    {
        path: "element/edit/:id",
        component: EditComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }