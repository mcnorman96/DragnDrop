import { Component } from '@angular/core'; 

@Component({
    selector: 'app-root',
    template: `
      <div class="intro-container">
      <h1><strong> Introduction</strong></h1>
        <p class="introtext">Trash sorting is for many reasons important for our environment. One of the reasons for
         this is that some trash can be very damaging for the environment, if it’s not discarded during
          proper circumstances.  Another reason that trash sorting is important, is that some of your trash
           can be reused and recreated into new usable things. By reusing things, we project the environment,
            by not taking new resources from our nature. Lot of people doesn’t know how to sort their trash and
             fell uninformed about the subject. But do you know were to put your trash? Test yourself in our game
              and receive information about what your trash is used for, after you dumb it properly. </p>
        <div class="text-center">
          <a [routerLink]="['/Game']" class="introbtn" role="button">Got it! Let's play</a>
          <br><br>
          <a [routerLink]="['/Submit']" class="introbtn2" role="button">Back to frontpage</a>
        </div>
      </div>
    
    `,
    styleUrls: ['./app.component.css']
  })

  export class IntroductionComponent {

  }