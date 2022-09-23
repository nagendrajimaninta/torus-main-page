import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor() { }
                people: any[] = [
                  {
                    "name": "CRM",
                    "link":"/crm"
                  },
                  {
                    "name": "Prime",
                    "link":"/prime"    
                  },
                  {
                    "name": "Pay",
                    "link":"/pay"
                  },
                  {
                    "name": "Prise",
                    "link":"/prise"
                  },
                  {
                    "name": "Neo",
                    "link":"/neo"
                  },
                  {
                    "name": "Playverse",
                    "link":"/playverse"
                  },
                  {
                    "name": "TickPro",
                    "link":"/tickpro"    
                  },
                  {
                    "name": "HeyTorus",
                    "link":"/heytorus"    
                  },
                  {
                    "name": "Cloud",
                    "link":"https://outlook.office.com/mail/"
                  },
                  {
                    "name": "Digital Operation",
                    "link":"http://localhost:8102/dashboard"
                  }
                ];
  ngOnInit() {
  }

}
