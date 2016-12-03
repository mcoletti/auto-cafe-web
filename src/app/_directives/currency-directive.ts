import {OnInit, Directive, ElementRef, HostListener} from "@angular/core";
import {CustomCurrencyPipe} from "./custom-currency-pipe";
/**
 * Created by micahcoletti on 11/21/16.
 */


@Directive({ selector: "[currency-directive]" })
export class CurrencyDirective implements OnInit{


  private el: HTMLInputElement;
  constructor(private elementRef: ElementRef,private currencyPipe:CustomCurrencyPipe){

    this.el = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.el.value = this.currencyPipe.transform(this.el.value);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    // this.el.value = this.currencyPipe.parse(value); // opossite of transform
    this.el.value = this.currencyPipe.transform(value);
  }

  // @HostListener("load", ["$event.target.value"])
  // onload(value) {
  //   this.el.value = this.currencyPipe.transform(value); // opossite of transform
  // }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.currencyPipe.transform(value);
    console.log("onBlur");
  }

}
