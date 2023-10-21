import { animate, AnimationBuilder, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-half-progress-bar',
  templateUrl: './half-progress-bar.component.html',
  styleUrls: ['./half-progress-bar.component.scss']
})
export class HalfProgressBarComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    $(".progress").each(function() {
      const $bar = $(this).find(".bar");
      const $val = $(this).find("span");
      const perc = parseInt($val.text(), 10);
  
      $({ p: 0 }).animate({ p: perc }, {
        duration: 3000,
        easing: "swing",
        step: function(p) {
          $bar.css({
            transform: "rotate(" + (45 + (p * 1.8)) + "deg)", // 100%=180° so: ° = % * 1.8
            // 45 is to add the needed rotation to have the green borders at the bottom
          });
          $val.text(p | 0);
        }
      });
    });
   
  }
}
