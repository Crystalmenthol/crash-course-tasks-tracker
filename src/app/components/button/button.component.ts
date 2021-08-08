import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // Input and Output use for sharing data between child and parent
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter<string>();
  
  constructor() {}


  ngOnInit(): void {
  }

  onClick(): void {
    this.btnClick.emit();
  }

}
