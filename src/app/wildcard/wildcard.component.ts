import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-wildcard',
  templateUrl: './wildcard.component.html',
  styleUrls: ['./wildcard.component.css']
})
export class WildcardComponent implements OnInit {

  constructor(public router :Router) { }
  ngOnInit(): void {
      alert("400 You have sent a Bad request");
      this.router.navigate(['/']);
}

}
