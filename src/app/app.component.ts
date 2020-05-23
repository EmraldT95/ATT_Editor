import { Component, OnInit } from '@angular/core';
import { PopoverComponent } from "./popover/popover.component";
import Quill from 'quill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'EditorApp';
  quill: any;
  // template: PopoverComponent

  ngOnInit () {
    var quill = new Quill('#editor-container', {
      modules: {
        toolbar: '#toolbar'
      },
      placeholder: 'Enter here...',
      theme: 'snow'  // or 'bubble'
    });
    quill.focus();

    var customButton = document.querySelector('#custom-button');
    customButton.addEventListener('click', function() {
      // var range = quill.getSelection();
      // if (range) {
      //   quill.insertText(range.index, "Ω");
      // }
      (<any>$('[data-toggle="popover"]')).attr("data-content",(
        new PopoverComponent()
      )).popover();
    });
  }
}
