import { Component } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';



interface User {  //This is the structure of the database 
  username: string;
}

interface UserId extends User { 
  id: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './submit.component.html',
  styleUrls: ['./app.component.css']
})


export class SubmitComponent {

  UsersCol: AngularFirestoreCollection<User>; //
  Users: any;
  
  username: string; 

  UserDoc: AngularFirestoreDocument<User>;
  User: Observable<User>;

  addUser() {
    this.afs.collection('Users').add({'username': this.username});
  }
  //.doc('my-custom-id').set({'title': this.title, 'content': this.content}) The .doc method lets us create a custom ID. 


  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() { //Lifecycle hook 
    this.UsersCol = this.afs.collection('Users');
    this.Users = this.UsersCol.snapshotChanges()
    .pipe(
      map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, data };
      });
    })
    
    );
  }

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
