import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { MatSidenavModule } from "@angular/material/sidenav";
// import { MatIconModule } from "@angular/material/icon";
// import { MatListModule } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { HighchartSplineComponent } from './widgets/highchart-spline/highchart-spline.component';
import { DrilldownchartComponent } from './widgets/drilldownchart/drilldownchart.component';
import { HalfProgressBarComponent } from './widgets/half-progress-bar/half-progress-bar.component';
import { FullProgressComponent } from './widgets/full-progress/full-progress.component';
// import { NgCircleProgressModule } from 'ng-circle-progress';
// import { MatButtonModule } from "@angular/material/button";
// import { CircleProgressOptions } from 'ng-circle-progress';

// const defaultOptions: CircleProgressOptions = {
//   radius: 50,
//   outerStrokeWidth: 10,
//   innerStrokeWidth: 5,
//   outerStrokeColor: '#78C000',
//   innerStrokeColor: '#C7E596',
//   animationDuration: 300,
//   showSubtitle: false,
//   class: '',
//   backgroundGradient: false,
//   backgroundColor: '',
//   backgroundGradientStopColor: '',
//   backgroundOpacity: 0,
//   backgroundStroke: '',
//   backgroundStrokeWidth: 0,
//   backgroundPadding: 0,
//   percent: 0,
//   space: 0,
//   toFixed: 0,
//   maxPercent: 0,
//   renderOnClick: false,
//   units: '',
//   unitsFontSize: '',
//   unitsFontWeight: '',
//   unitsColor: '',
//   outerStrokeGradient: false,
//   outerStrokeGradientStopColor: '',
//   outerStrokeLinecap: '',
//   titleFormat: undefined,
//   title: '',
//   titleColor: '',
//   titleFontSize: '',
//   titleFontWeight: '',
//   subtitleFormat: undefined,
//   subtitle: '',
//   subtitleColor: '',
//   subtitleFontSize: '',
//   subtitleFontWeight: '',
//   imageSrc: undefined,
//   imageHeight: undefined,
//   imageWidth: undefined,
//   animation: false,
//   animateTitle: false,
//   animateSubtitle: false,
//   showTitle: false,
//   showUnits: false,
//   showImage: false,
//   showBackground: false,
//   showInnerStroke: false,
//   clockwise: false,
//   responsive: false,
//   startFromZero: false,
//   showZeroOuterStroke: false,
//   lazy: false
// };


@NgModule({
  declarations: [
    HeaderComponent,
  
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    HighchartSplineComponent,
    DrilldownchartComponent,
    HalfProgressBarComponent,
    FullProgressComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatSidenavModule ,
    MatTooltipModule,
    // NgCircleProgressModule.forRoot(defaultOptions)
   
  ],
  exports: [
    HeaderComponent,
    
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    HighchartSplineComponent,
    DrilldownchartComponent,
    HalfProgressBarComponent,
    FullProgressComponent
  ]
})
export class SharedModule { }
