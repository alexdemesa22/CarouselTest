import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import Draggable from "gsap/Draggable"; 
import { TweenLite, TimelineMax,Linear,TweenMax } from "gsap/TweenMax";
declare const Owl:any;

// declare var TweenMax: any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})


export class CarouselComponent implements OnInit {

  item={
    items:4,
    dots: false,
    navigation: false,
    center:true,
    loop:true,
    nav:true,
    margin:10,
    stagePadding: 10,
    animateOut:true,
    animateIn:true
  };
  constructor() {
   
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      // @ts-ignore
      var $owl = $('.owl-carousel');

      $owl.children().each( function( index ) {
        $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
      });
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
            items:3,
            stagePadding:80,
          },
          1366:{
            items:3,
            stagePadding:80,
          },
          1920:{
            items:5,
            stagePadding:0,
           
          }
         
        }
        
      });
       // @ts-ignore
       $owl.on('translate.owl.carousel', function(e){
         // @ts-ignore
        var idx = e.item.index;
        console.log(idx)
        $('.owl-item.big').removeClass('big');
        $('.owl-item.medium').removeClass('medium');
        $('.owl-item').eq(idx).addClass('big');
        $('.owl-item').eq(idx-1).addClass('medium');
        $('.owl-item').eq(idx+1).addClass('medium');
        $('.owl-item').eq(idx-2).addClass('medium');
        $('.owl-item').eq(idx+2).addClass('medium');
    });

        $(document).on('click', '.owl-item>div', function() {
          // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
          var $speed = 300;  // in ms
          $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
        });
            
    });
    
}

  ngOnInit(): void {
   

  }
  
}