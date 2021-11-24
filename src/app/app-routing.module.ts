import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CervicoComponent } from './cervico/cervico.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},


  {path:'home', component:InicioComponent},
  {path: 'contacts', component:ContactsComponent},
  {path: 'service', component:CervicoComponent}

  


  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
