import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultlayoutComponent } from './defaultlayout/defaultlayout.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [{
  path:'',
  component:DefaultlayoutComponent,
  
},

{path:'header',
component:HeaderComponent,
},

  { path: 'main', component: BodyComponent 
},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
