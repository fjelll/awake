import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { EyeComponent } from "../../eye/eye.component";


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatSlideToggleModule, EyeComponent]
})
export class HeaderComponent {}
