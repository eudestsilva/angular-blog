import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
@Input()
photoCover: string = "https://miro.medium.com/v2/resize:fit:1358/0*qdHImq1G588SB9Ii.jpg"
@Input()
cardTitle: string = "NOVA SERIE ANUNCIADA"

constructor() { }
  ngOnInit(): void {

  }
}
