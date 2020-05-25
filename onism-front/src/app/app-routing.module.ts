import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SelfKnowledgeComponent } from './self-knowledge/self-knowledge.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ArticleComponent } from './blog/article/article.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'bemutatkozas', component: AboutComponent },
  { path: 'szolgaltatasok', component: ServicesComponent },
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
