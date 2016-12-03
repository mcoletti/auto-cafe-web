import {Input, Component} from "@angular/core";
/**
 * Created by micahcoletti on 10/5/16.
 */
@Component({
  selector: 'spinner',
  template: `
    	<div *ngIf="visible" class="container-fluid">
    	<div class="alert alert-info">{{ text }}</div>
    	<i class="fa fa-spinner fa-spin fa-3x"></i>
    	</div>
    `
})
export class SpinnerComponent {
  @Input() visible = true;
  text:string = "Running please waits..";
}
