import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { AboutComponent } from './page/about/about.component';
import { ServicesComponent } from './page/services/services.component';
import { SelfKnowledgeComponent } from './page/self-knowledge/self-knowledge.component';
import { ContactComponent } from './page/contact/contact.component';
import { BlogComponent } from './page/blog/blog.component';
import { AppointmentsComponent } from './page/appointments/appointments.component';
import { ArticleComponent } from './page/blog/article/article.component';
import { LoginComponent } from './page/login/login.component';
import { AdminComponent } from './page/admin/admin.component';
import { IndividualComponent } from './page/services/individual/individual.component';
import { OrganizationalComponent } from './page/services/organizational/organizational.component';
import { AddArticleComponent } from './page/admin/add-article/add-article.component';
import { AddAppointmentComponent } from './page/admin/add-appointment/add-appointment.component';
import { UpdateAppointmentComponent } from './page/admin/update-appointment/update-appointment.component';
import { UpdateArticleComponent } from './page/admin/update-article/update-article.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ServicesComponent,
    SelfKnowledgeComponent,
    ContactComponent,
    BlogComponent,
    AppointmentsComponent,
    ArticleComponent,
    LoginComponent,
    AdminComponent,
    IndividualComponent,
    OrganizationalComponent,
    AddArticleComponent,
    AddAppointmentComponent,
    UpdateAppointmentComponent,
    UpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
