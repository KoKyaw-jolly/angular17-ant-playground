import { Component } from '@angular/core';
import { APP_IMPORTS } from '../../app.import';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { log } from 'node:console';

@Component({
  selector: 'app-cimb-lite-test',
  standalone: true,
  imports: [APP_IMPORTS],
  templateUrl: './cimb-lite-test.component.html',
  styleUrl: './cimb-lite-test.component.scss'
})
export class CimbLiteTestComponent {

  constructor(private fb: NonNullableFormBuilder,
    private msg: NzMessageService) { }

  validateForm: FormGroup<{
    userName: FormControl<string>;
    date: FormControl<Date>;
    selectVal: FormControl<string>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    date: [new Date(), [Validators.required]],
    selectVal: ['', [Validators.required]]
  });

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  current = 0;

  index = 'First-content';

  pre(): void {
    this.current = this.current == 0 ? 0 : this.current - 1;
    this.changeContent();
  }

  next(): void {
    console.log(this.current);
    this.current = this.current == 2 ? 2 : this.current + 1;
    console.log(this.current);
    this.changeContent();
  }
  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  //File Upload
  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  //radio
  radioValue = '';
  radioValue2 = '1';

  selectedSOW: string[] = [];
  sWealths = [
    { name: 'Business proceeds', check: true },
    { name: 'Earnings from other businesses', check: false },
    { name: 'Accumulated personal savings', check: false },
    { name: 'Earnings from previous or current employment', check: false },
    { name: 'Others', check: false }
  ];

  clickCheck(indexVal: number) {
    console.log('indexVal ', indexVal);
    this.sWealths[indexVal].check = !this.sWealths[indexVal].check;
    console.log('sWealths', this.sWealths[indexVal]);
  }

  testClick(val: any): void {
    if (val == 1) {
      this.sWealths = [
        { name: 'Business proceeds', check: true },
        { name: 'Earnings from other businesses', check: false },
        { name: 'Accumulated personal savings', check: false },
        { name: 'Earnings from previous or current employment', check: false },
        { name: 'Others', check: false }
      ]
    } else if (val == 2) {
      this.sWealths = [
        { name: 'Business 1', check: true },
        { name: 'Business 2', check: true },
        { name: 'Business 3', check: false }
      ]
    }else if (val == 3) {
      this.sWealths = [
        { name: 'Earnings from other businesses 1', check: false },
        { name: 'Earnings from other businesses 2', check: false },
        { name: 'Earnings from other businesses 3', check: true },
        { name: 'Earnings from other businesses 4', check: false },
      ]
    }
  }
  log(value: string[]): void {
    console.log(value);
  }

  test2=[
    { name: 'Business proceeds', check: true },
    { name: 'Earnings from other businesses', check: false },
    { name: 'Accumulated personal savings', check: false },
    { name: 'Earnings from previous or current employment', check: false },
    { name: 'Others', check: false }
  ]
}
