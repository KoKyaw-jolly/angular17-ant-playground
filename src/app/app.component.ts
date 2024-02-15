import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CIMB_IMPORT } from './component/cimb-lite-test/cimb-export';
import { FOLDER_IMPORT } from './component/folder-appraisal/folder-appraisal-export';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    CIMB_IMPORT,
    FOLDER_IMPORT
  ]
})
export class AppComponent {
  title = 'angular17-ant-playground';
}
