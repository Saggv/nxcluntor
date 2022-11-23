import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@cluntor/products';
import { DialogService } from 'primeng/dynamicdialog';
import { Validators } from '@angular/forms';
import { FormDialogComponent } from '@cluntor/ui';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'cluntor-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [DialogService, MessageService],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  onAddOrUpdateCategory(category?: Category) {
    const fields = [
      {
        type: 'id',
        key: '_id',
        label: 'Id',
        value: '',
        validators: [],
      },
      {
        type: 'input',
        key: 'name',
        label: 'Name',
        value: '',
        validators: [Validators.required, Validators.minLength(6)],
      },
      {
        type: 'input',
        key: 'icon',
        label: 'Icon',
        value: '',
        validators: [Validators.required],
      },
      {
        type: 'color',
        key: 'color',
        label: 'Color',
        value: '',
        validators: [Validators.required],
      },
    ];

    const ref = this.dialogService.open(FormDialogComponent, {
      header: category ? 'Update Category' : 'Add New Category',
      width: '50%',
      data: {
        fields,
        models: { ...category },
      },
    });

    ref.onClose.subscribe((data) => {
      console.log(data);
      if (!data) return;

      if (data._id) {
        this.categoriesService.updateNewCategory(data).subscribe(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update Category Successfully',
          });
          this.getData()
        });
        return;
      }

      this.categoriesService.addNewCategory(data).subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Add New Category Successfully',
        });
        this.getData()
      });
    });
  }

  deleteCategory(id: string) {
    this.categoriesService.deleteCategory(id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Delete Category Successfully',
      });
      this.getData()
    });
  }
}
