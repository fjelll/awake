import { Component } from "@angular/core";
import { HeaderComponent } from "./main-page/header/header.component";
import { MainContentComponent } from "./main-page/main-content/main-content.component";
import { SubscriptionComponent } from "./subscription/subscription.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainContentComponent, SubscriptionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
}
