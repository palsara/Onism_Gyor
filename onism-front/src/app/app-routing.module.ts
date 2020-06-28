import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { AboutComponent } from './page/about/about.component';
import { ServicesComponent } from './page/services/services.component';
import { SelfKnowledgeComponent } from './page/self-knowledge/self-knowledge.component';
import { BlogComponent } from './page/blog/blog.component';
import { ContactComponent } from './page/contact/contact.component';
import { AppointmentsComponent } from './page/appointments/appointments.component';
import { ArticleComponent } from './page/blog/article/article.component';
import { LoginComponent } from './page/login/login.component';
import { AdminComponent } from './page/admin/admin.component';
import { IndividualComponent } from './page/services/individual/individual.component';
import { OrganizationalComponent } from './page/services/organizational/organizational.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'bemutatkozas', component: AboutComponent },
  { path: 'szolgaltatasok/maganszemelyeknek', component: IndividualComponent},
  { path: 'szolgaltatasok/szervezeteknek', component: OrganizationalComponent},
  { path: 'onismeret', component: SelfKnowledgeComponent },
  { path: 'idopontok', component:AppointmentsComponent },
  { path: 'blog', component: BlogComponent },
  {path:'blog/:seo', component:ArticleComponent},
  { path: 'kapcsolat', component: ContactComponent },
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
