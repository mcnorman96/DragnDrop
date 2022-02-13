import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { NgStyle } from '@angular/common';
import { $, element } from 'protractor';
import { Url } from 'url';
import Swal from 'sweetalert2'

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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class DragdropComponent {
  UsersCol: AngularFirestoreCollection<User>; //
  Users: any;

  username: string;

  UserDoc: AngularFirestoreDocument<User>;
  User: Observable<User>;

  getUser(UserId) {
    this.UserDoc = this.afs.doc('Users/' + UserId);
    this.User = this.UserDoc.valueChanges();
  }

  constructor(private afs: AngularFirestore) {

  }


  ngOnInit() { //Lifecycle hook 
    this.UsersCol = this.afs.collection('Users', ref => ref.limit(1));
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

  apple = [
    'apple'
  ]

  fish = [
    'fish'
  ]

  bottle = [
    'bottle'
  ]

  cap = [
    'cap'
  ]

  diaper = [
    'diaper'
  ]

  faxe = [
    'faxe'
  ]

  milk = [
    'milk'
  ]

  kande = [
    'kinde'
  ]

  restspand = [
    ''
  ]

  madspand = [
    ''
  ];

  metalspand = [
    ''
  ];

  plastspand = [
    ''
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      Swal.fire({
        icon: 'error',
        title: 'Wrong!',
        width: 600,
        padding: '3em',
        html: '<p style="font-size: 16px; margin: 20px 0;"> You pick the wrong trash can, Click to try agian.</p>',
        confirmButtonText: 'Try again!',
        confirmButtonColor: '#5AB8B6',
        footer: '<a href>Go back to frontpage</a>'
      })

    } else if (event.item.data === this.apple) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        width: 600,
        padding: '3em',
        html: '<p style="font-size: 16px; margin: 20px 0;">When you are throwing an apple in the food waste the sanitation worker is taking the apple to ARGO. It is then transported to Jylland where it is reproduced as biogas. The biogas is used for making new green energy to for an example busses and trucks. Some of the apples is also reproduced into compost, which contains phosphorus and nitrogen. It is then used for fertilizer in fields instead of chemical fertilizers.</p>',
        confirmButtonText: 'Next!',
        confirmButtonColor: '#5AB8B6',
        footer: '<a href>Go back to frontpage</a>'
      })
    } else if (event.item.data === this.fish) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        width: 600,
        padding: '3em',
        html: '<p style="font-size: 16px; margin: 20px 0;">When you are throwing a fish in the food waste it is getting reproduced as biogas. The biogas is used for making new green energy to for an example busses and trucks. Some of the trash is also reproduced into compost, which contains phosphorus and nitrogen. It is then used for fertilizer in fields instead of chemical fertilizers.</p>',
        confirmButtonText: 'Next!',
        confirmButtonColor: '#5AB8B6',
        footer: '<a href>Go back to frontpage</a>'
      })
    } else if (event.item.data === this.bottle) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        width: 600,
        padding: '3em',
        html: '<p style="font-size: 16px; margin: 20px 0;"> When you are throwing a bottle in the plastic trash it is sorted into the different types of plastic there is. It is not all types of plastic that can be recycled. ⅓ of the plastic is reproduced as high quality plastic into new plasticproducts while ⅔ is shipped to Germany to be sorted once again. Here the half of the plastic is used as low quality plastic for cement production. The rest is used for energy utilisation. </p>',
        confirmButtonText: 'Next!',
        confirmButtonColor: '#5AB8B6',
        footer: '<a href>Go back to frontpage</a>'
      })
    }
    else if (event.item.data === this.cap) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        width: 600,
        padding: '3em',
        html: '<p style="font-size: 16px; margin: 20px 0;">When a cap has been thrown into the metal trash it is recycled and sold to Germany or Sweden to be reproduced. Some of the metal can contain plastic or tree but the metal is reprocessed with a high volume of heat that it doesn’t matter for the recycling of the metal. Metal is not a renewable resource which means that the metal we find in the underground cant be produced by the earth anymore. The production of metal is a big strain for the environment so it is very important to recycle our metal. </p>',
        confirmButtonText: 'Next!',
        confirmButtonColor: '#5AB8B6',
        footer: '<a href>Go back to frontpage</a>'
      })
    } else if (event.item.data === this.diaper) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        width: 600,
        padding: '3em',
        html: '<p style="font-size: 16px; margin: 20px 0;">When a diaper has been thrown in the residual waste it is being used in a incinerator to create electricity and district heating. The incineration is very efficient but it is still not good for the environment. It is producing a significant amount of CO2, but we can limit this by sorting as much as possible from the residual waste. </p>',
        confirmButtonText: 'Next!',
        confirmButtonColor: '#5AB8B6',
        footer: '<a href>Go back to frontpage</a>'
      })
    } else if (event.item.data === this.faxe) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        width: 600,
        padding: '3em',
        html: '<p style="font-size: 16px; margin: 20px 0;">When a can has been thrown into the metal trash it is recycled and sold to Germany or Sweden to be reproduced. Some of the metal can contain plastic or tree but the metal is reprocessed with a high volume of heat that it doesn’t matter for the recycling of the metal. Metal is not a renewable resource which means that the metal we find in the underground cant be produced by the earth anymore. The production of metal is a big strain for the environment so it is very important to recycle our metal. </p>',
        confirmButtonText: 'Next!',
        confirmButtonColor: '#5AB8B6',
        footer: '<a href>Go back to frontpage</a>'
      })
    } else if (event.item.data === this.milk) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        width: 600,
        padding: '3em',
        html: '<p style="font-size: 16px; margin: 20px 0;">When a milk has been thrown in the residual waste it is being used in a incinerator to create electricity and district heating. The incineration is very efficient but it is still not good for the environment. It is producing a significant amount of CO2, but we can limit this by sorting as much as possible from the residual waste. </p>',
        confirmButtonText: 'Next!',
        confirmButtonColor: '#5AB8B6',
        footer: '<a href>Go back to frontpage</a>'
      })
    } else if (event.item.data === this.kande) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      Swal.fire({
        icon: 'success',
        width: 600,
        padding: '3em',
        title: 'Good job!',
        html: '<p style="font-size: 16px; margin: 20px 0;"> When you are throwing a plastic jug in the plastic trash it is sorted into the different types of plastic there is. It is not all types of plastic that can be recycled. ⅓ of the plastic is reproduced as high quality plastic into new plasticproducts while ⅔ is shipped to Germany to be sorted once again. Here the half of the plastic is used as low quality plastic for cement production. The rest is used for energy utilisation. </p>',
        confirmButtonText: 'Next!',
        confirmButtonColor: '#5AB8B6',
        footer: '<a href>Go back to frontpage</a>'
      })
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        html: '<p style="font-size: 16px; margin: 20px 0;"> </p>',
        confirmButtonText: 'Next!',
        confirmButtonColor: '#5AB8B6',
        footer: '<a href>Go back to frontpage</a>'
      })

    }
  }

}