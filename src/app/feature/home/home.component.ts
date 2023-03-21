import { Component} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  slides = [
    {'image': './assets/images/slide1.png'}, 
    {'image': './assets/images/slide2.png'},
    {'image': './assets/images/slide3.png'}, 
    {'image': './assets/images/slide4.png'}
  ];
  

}
