import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, 
OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit,AfterViewChecked, OnDestroy{

  @Input('srvElement') element: { "type": string, "name": string, "content": string };
  @Input() name: string;
  @ViewChild('heading',{static:true}) header:ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraphy:ElementRef;
  constructor() {
    console.log("constructor called!");
  }
  ngOnDestroy(): void {
    console.log("onDestroy called!");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked called!");
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit called!");
    console.log("In AfterViewInit header is "+this.header.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked called!");
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit called!");
    console.log("In AfterContentInit Paragraphy content "+this.paragraphy.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log("DoCheck called!");
  }

  ngOnInit(): void {
    console.log("OnInit called!");
    console.log("In onInit header is "+this.header.nativeElement.textContent);
    console.log("In onInit Paragraphy content "+this.paragraphy.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges called!");
    console.log(changes);
  }
}
