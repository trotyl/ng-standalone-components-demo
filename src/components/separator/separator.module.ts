import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { SeparatorComponent } from './separator.component'

@NgModule({
  declarations: [SeparatorComponent],
  imports: [CommonModule, FormsModule],
  exports: [SeparatorComponent],
  entryComponents: [SeparatorComponent],
})
export class TemperatureModule { }
