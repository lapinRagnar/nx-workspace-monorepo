import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'mon-nx-monorepo-en-famille',
  templateUrl: './en-famille.component.html',
  styleUrls: ['./en-famille.component.scss'],
})
export class EnFamilleComponent implements OnInit {
  

  ngOnInit(): void {
    AOS.init()
  }
}
