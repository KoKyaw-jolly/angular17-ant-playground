import { Component } from '@angular/core';
import { APP_IMPORTS } from '../../app.import';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    selectVal:['', [Validators.required]]
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
}
