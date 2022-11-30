import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProvincesService } from '@cluntor/users';
// const pcVN = require('pc-vn')

import { UsersService, User } from '@cluntor/users';

@Component({
  selector: 'product-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [MessageService],
})
export class UserUpdateComponent implements OnInit {
  form: FormGroup;
  id: string;
  user: any;
  provinces: any = [];
  districts: any = [];
  wards: any = [];

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private provincesService: ProvincesService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      isAdmin: [false, Validators.required],
      city: ['', Validators.required],
      password: ['', Validators.required],
      ward: ['', Validators.required],
      district: ['', Validators.required],
    });

    this.usersService.getUsers().subscribe((data) => {
      this.user = data;
    });

    this.route.params.subscribe((params) => {
      if (params?.['id']) {
        this.id = params?.['id'];
        this.usersService.getUser(this.id).subscribe((data) => {
          const city = data.city;
          const district = data.district;
          const ward = data.ward;
          delete city['_id'];
          delete district['_id'];
          delete ward['_id'];

          this.form.patchValue({ ...data,city, district, ward });
          console.log(this.form.value);
        });
      }
    });

    this.provincesService.getProvinces().subscribe((data: any) => {
      this.provinces = data.results;
    });

    this.form.controls['city'].valueChanges.subscribe((province) => {
      this.getDisctricts(province.province_id);
    });

    this.form.controls['district'].valueChanges.subscribe((district) => {
      this.getWards(district.district_id);
    });
  }

  getDisctricts(provinceId: number) {
    this.provincesService.getDistricts(provinceId).subscribe((data: any) => {
      this.districts = data.results;
    });
  }

  getWards(districtId: number) {
    this.provincesService.getWards(districtId).subscribe((data: any) => {
      this.wards = data.results;
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    if (this.id) {
      this.usersService
        .updateUser(this.form.value, this.id)
        .subscribe((data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update User Successfully',
          });

          setTimeout(() =>{
            this.redirectToProducts()
          }, 2000)
        });

      return;
    }

    this.usersService.addUser(this.form.value).subscribe((data) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Add User Successfully',
      });

      setTimeout(() =>{
        this.redirectToProducts()
      }, 2000)
    });
  }

  redirectToProducts() {
    this.router.navigateByUrl('/users');
  }
}
