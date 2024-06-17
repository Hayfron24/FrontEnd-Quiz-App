import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent {
  data: any;

  // constructor(private dataService: DataService) {}

  // ngOnInit(): void {
  //   this.dataService.getData().subscribe((response) => {
  //     this.data = response;
  //     console.log(response);
  //   });
  // }
}
