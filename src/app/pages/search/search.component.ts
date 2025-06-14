import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ REQUIRED

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ ADD FormsModule here
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  location: string = '';
  startDate: string = '';
  endDate: string = '';
  minDate: string = '';
  maxDate: string = '';
  locations: string[] = ['Pune', 'Mumbai', 'Delhi', 'Nashik'];
  searchResults: any[] = [];

  ngOnInit() {
    const today = new Date();
    const lastDate = new Date(today.getFullYear(), 6, 31); // July 31

    this.minDate = today.toISOString().split('T')[0];
    this.maxDate = lastDate.toISOString().split('T')[0];
  }

  searchCars() {
    const carsData: { [key: string]: any[] } = {
      Pune: [
        { name: 'Swift', image: 'assets/swift.jpg', price: 1500 },
        { name: 'Brezza', image: 'assets/brezza.jpg', price: 1800 }
      ],
      Mumbai: [
        { name: 'Innova', image: 'assets/innova.jpg', price: 2500 },
        { name: 'Baleno', image: 'assets/baleno.jpg', price: 1600 }
      ]
    };

    this.searchResults = carsData[this.location] || [];
  }
}
