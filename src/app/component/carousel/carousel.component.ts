import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
declare const Owl:any;

// declare var TweenMax: any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})


export class CarouselComponent implements OnInit {

  data=[
      {
      title:"Get a Device",
      link:'get-device',
      active:true
      },
      {
        title:"Add a phone line",
        link:'phone-line'
      },
      {
        title:"Home internet",
        link:'home-internet'
      },
      {
        title:"Mobile internet",
        link:'mobile-internet'
      },
      {
        title:"Upgrade",
        link:'upgrade'
      },
      
  ]
  constructor() {
   
  }
  ngAfterViewInit(){
    jQuery(document).ready(function(){
      // @ts-ignore
      var $owl = $('.owl-carousel');

      // @ts-ignore
      $owl.owlCarousel({
        center: true,
        loop: true,
        items: 3,
        stagePadding:50,
        nav: true,
        dots:false,
        margin:10,
        responsive:{
          1080:{
            items:4,
            stagePadding:10,
          },
          1366:{
            items:4,
            stagePadding:10,
          },
          1920:{
            items:5,
            stagePadding:0,
           
          }
         
        }
    });
    $owl.on('translate.owl.carousel', function(e){
    // @ts-ignore
      var idx = e.item.index;
      var con = $('.owl-item.center').hasClass('active');
      console.log("second");
      if(con){
        $('p.subtext.text-center').eq(idx).removeClass('hide-start');
        $('p.subtext.text-center').eq(idx-1).addClass('hide-start');
        $('p.subtext.text-center').eq(idx+1).addClass('hide-start');
        $('p.subtext.text-center').eq(idx-2).addClass('hide-start');
        $('p.subtext.text-center').eq(idx+2).addClass('hide-start');
      }
      
  });
   
  
            
    });
    
    
    
}

  ngOnInit(): void {

  }
  
}
