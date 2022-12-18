import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LocalstorageService } from '@cluntor/users';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router,
    private messageService: MessageService,
    private localStorageService: LocalstorageService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.form.invalid) return;

    this.auth.login(this.form.value).subscribe((data: any) => {
      if (data.token) {
        this.localStorageService.setToken(data.token);
        this.route.navigateByUrl('/');
        return;
      }

      this.messageService.add({
        severity: 'error',
        summary: 'Login was failed!',
      })
    });
  }
}
