import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '../../shared/components/button/button.module';
import { InputModule } from '../../shared/components/input/input.module';
import { LoginComponent } from './login.component';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
	declarations: [LoginComponent],
	imports: [CommonModule, InputModule, ReactiveFormsModule, ButtonModule, RouterModule.forChild(routes)]
})
export class LoginModule {}
