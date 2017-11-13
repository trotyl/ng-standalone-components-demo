import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-temperature',
  templateUrl: './separator.component.html',
})
export class SeparatorComponent {
  text: string = ''

  get list(): string[] {
    return this.text.split(',').map(s => s.trim()).filter(s => s.length > 0)
  }

  trackByIndex(index: number, value: string): number {
    return index
  }
}
