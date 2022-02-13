import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})


export class AppComponent {


}

// .where - This makes it possible to create different kriteria for what that will be shown. 

/* Aside from where, you can also use:

orderBy
limit
startAt
startAfter
endAt
endBefore */  

// We bind postsCol to our AngularFirestore instance using the .collection method, wherein we pass the name of our collection (posts).
//Then, we bind posts to postsCol and use the .valueChanges() method, which provides us with an Observable.
