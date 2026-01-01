import { Component, inject } from '@angular/core'
import { Test } from './test'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'dummy-angular'
  data: any
  api = inject(Test)

  load () {
    this.api.getData().subscribe(res => (this.data = res))
  }
}
