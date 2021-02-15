import { Component, OnInit } from '@angular/core';

interface TreeType {
  title: string;
  child: TreeType[];
}

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.scss']
})

export class RouteOneComponent implements OnInit {
  public recursiveData: TreeType[];
  constructor() { }

  ngOnInit(): void {
    this.recursiveData = [
      {
        title: '1', child: [
          {
            title: '2', child: [
              {
                title: '3', child: [
                  {
                    title: '4', child: [
                      {
                        title: '5', child: [
                          {
                            title: '6', child: [
                              { title: 'Lorem Ipsum is simply dummy text of the printing', child: [] }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }

}
