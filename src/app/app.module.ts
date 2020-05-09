import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserNameCaptial } from './serivepipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule ,
   MatTabsModule, MatDatepickerModule, MatNativeDateModule,
  MatRadioModule, MatGridListModule, MatCardModule, MatMenuModule, MatPaginatorModule,
  MatSortModule, MatAutocompleteModule, MatButtonToggleModule, MatChipsModule, MatDialogModule,
  MatExpansionModule, MatProgressBarModule,  MatProgressSpinnerModule, MatRippleModule,
  MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule, MatTooltipModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailsService } from './user-details.service';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SerchDirectiveDirective } from './serch-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainNavComponent,
    LoginComponent,
    UserNameCaptial,
    UserdetailsComponent,
    SerchDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule, MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule, MatTabsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatRadioModule, MatGridListModule, MatCardModule, MatMenuModule, MatPaginatorModule,
    MatSortModule, MatAutocompleteModule, MatButtonToggleModule, MatChipsModule, MatDialogModule,
    MatExpansionModule, MatListModule, MatProgressBarModule,  MatProgressSpinnerModule, MatRippleModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule, MatTooltipModule

  ],
  providers: [UserDetailsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
