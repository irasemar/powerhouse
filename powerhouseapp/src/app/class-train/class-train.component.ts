import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class-train.component.html',
})
export class ClassTrainComponent implements OnInit {

  public bikes : any[];
  public class : any;
  public welcome = false;


  constructor() { }

  ngOnInit() {
    //Show alert
    this.welcome = true;
    setTimeout(() => this.welcome = false, 5000);

    this.class = {
      date: 'Martes, 02 de Mayo 7:15PM',
      coach: 'Mely',
      coachId: 25,
      type: ' 60 Min Ride'
    }
    this.bikes =  [
      {
        id: 0,
        status: true
      },
      {
        id: 1,
        status: false
      },
      {
        id: 2,
        status: false
      },
      {
        id: 3,
        status: false
      },
      {
        id: 4,
        status: false
      },
      {
        id: 5,
        status: false
      },    
      {
        id: 6,
        status: false
      }, 
      {
        id: 7,
        status: false
      },  
      {
        id: 8,
        status: false
      },  
      {
        id: 9,
        status: false
      },
      {
        id: 10,
        status: false
      },  
      {
        id: 11,
        status: false
      }, 
      {
        id: 12,
        status: false
      }, 
      {
        id: 13,
        status: false
      }, 
      {
        id: 14,
        status: false
      }, 
      {
        id: 15,
        status: false
      },
      {
        id: 16,
        status: false
      },
      {
        id: 17,
        status: false
      },
      {
        id: 18,
        status: false
      },
      {
        id: 19,
        status: false
      },
      {
        id: 20,
        status: false
      },
      {
        id: 21,
        status: false
      },
      {
        id: 22,
        status: false
      }, 
      {
        id: 23,
        status: false
      },
      {
        id: 24,
        status: false
      },
      {
        id: 25,
        status: false
      },
      {
        id: 26,
        status: false
      }, 
      {
        id: 27,
        status: false
      },
      {
        id: 28,
        status: false
      },
      {
        id: 29,
        status: false
      }, 
      {
        id: 30,
        status: false
      },
      {
        id: 31,
        status: false
      },
      {
        id: 32,
        status: false
      },
      {
        id: 33,
        status: false
      }, 
      {
        id: 34,
        status: false
      },
      {
        id: 35,
        status: false
      },
      {
        id: 36,
        status: false
      },
      {
        id: 37,
        status: false
      }, 
      {
        id: 38,
        status: false
      },
      {
        id: 39,
        status: false
      },
      {
        id: 40,
        status: false
      },
      {
        id: 41,
        status: false
      }, 
      {
        id: 42,
        status: false
      },
      {
        id: 43,
        status: false
      },
      {
        id: 44,
        status: false
      },
    ]
  }

  public select(bike:any){
    this.bikes.map(item=>{
      if(item.id === bike.id && item.status === false){
        item.status = true
      }else{
        item.status = false
      }
    })
  }

}
