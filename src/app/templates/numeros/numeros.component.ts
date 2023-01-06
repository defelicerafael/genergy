import { Component, OnInit,HostListener } from '@angular/core';
import { BehaviorSubject, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {
  public topLimit:number = 800;
  public mobileMedia:any = window.matchMedia("(min-width:764px)");
  public louncher:boolean = false;

 @HostListener("window:scroll", [])
  onWindowScroll():void {
    if(window.scrollY > this.topLimit){
      this.louncher = true;   
      //console.log(this.louncher); 
    }else{
      this.louncher = false;  
      //console.log(this.louncher);    
    }
  }
    
  public numeroUno:Subject<number> = new BehaviorSubject(1);

  
    // How long you want the animation to take, in ms
    public animationDuration = 4000;
    // Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
    public frameDuration = 1000 / 60;
    // Use that to calculate how many frames we need to complete the animation
    public totalFrames = Math.round( this.animationDuration / this.frameDuration );
    // An ease-out function that slows the count as it progresses
    easeOutQuad = (t: number) => t * ( 2 - t );

// The animation function, which takes an Element
    animateCountUp = (el:any) => {
      let frame = 0;
      const countTo = parseInt( el.innerHTML, 10 );
      // Start the animation running 60 times per second
      const counter = setInterval( () => {
        frame++;
        // Calculate our progress as a value between 0 and 1
        // Pass that value to our easing function to get our
        // progress on a curve
        const progress = this.easeOutQuad( frame / this.totalFrames );
        // Use the progress value to calculate the current count
        const currentCount = Math.round( countTo * progress );

        // If the current count has changed, update the element
        if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
          el.innerHTML = currentCount;
        }

        // If we’ve reached our last frame, stop the animation
        if ( frame === this.totalFrames ) {
          clearInterval( counter );
        }
      }, this.frameDuration );
    };

// Run the animation on all elements with a class of ‘countup’
    runAnimations = () => {
      console.log("arrancó");
      const countupEls = document.querySelectorAll( '.countup' );
      countupEls.forEach( this.animateCountUp );
    };
        
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
