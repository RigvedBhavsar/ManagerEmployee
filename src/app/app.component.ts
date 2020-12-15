import { Component } from '@angular/core';
import {ConnetService} from './connet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(public _auth: ConnetService) { }
  
title = 'MindBowser';
}
