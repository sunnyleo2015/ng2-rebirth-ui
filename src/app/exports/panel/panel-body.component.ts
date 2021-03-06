import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-panel-body,[re-panel-body],re-accordion-body,[re-accordion-body]',
  template: '<ng-content></ng-content>',
  host: {
    '[style.display]': '"block"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelBodyComponent {

}
