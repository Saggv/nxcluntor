import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'form-dialog',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormDialogComponent implements OnInit {
  form: FormGroup;
  fields: any;

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    if(!this.config.data.fields) return;
    this.fields = this.config.data.fields;

    const fields = this.fields.reduce((accumulator: any, item: any) => {
      let field = {
        [item.key]: [item.value, Validators.compose([...item.validators])],
      };
      return { ...accumulator, ...field };
    }, {});

    this.form = this.fb.group({ ...fields });

    this.form.patchValue({...this.config.data.models})
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if(this.form.invalid) return
    this.ref.close(this.form.value);
  }
}
