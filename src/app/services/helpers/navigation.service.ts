import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { of, Observable } from 'rxjs';
import { SessionService } from './session.service';
import { Navigation } from '../../helpers';
import { ExtendedServiceRequest } from 'src/app/models/crm/ExtendedServiceRequests';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private previousRoute: string;
  private currentRoute: string;

  navigation: Navigation;

  constructor(private _router: Router,  private sessionService: SessionService) {
    this.currentRoute = this._router.url;

    this.navigation = {
      name: 'app',
      uri: 'app',
      redirects: new Map(
        [
          ['error', '404'],
          ['login', 'login']
        ]
        ),
        children: [
          {
            parent: 'app',
            name: 'home',
            uri: 'app/home',
          }
          ]
        };

        this._router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            this.previousRoute = this.currentRoute;
            this.currentRoute = event.url;
          }
        });
      }

      getNavigationItem(key: string = 'app', navigation: Navigation = this.navigation): Navigation {
        if (navigation) {
          if (navigation.name === key) {
            return navigation;
          } else {
            if (navigation.children) {
              for (const child of navigation.children) {
                const item = this.getNavigationItem(key, child);
                if (item) {
                  return item;
                }
              }
            }
            return;
          }
        } else {
          return null;
        }
      }

      navigate(route: string, id?: string) {
        if (id || id !== undefined) {
          this._router.navigate([`${route}`, id]);
        } else {
          this._router.navigate([`${route}`])
          .catch();
        }
      }

      navigateToLanding() {
        this.navigate('/');
      }

      navigateToLogin() {
        this.navigate('/login');
      }

      navigateToRoot() {
        this.navigate('/app');
      }


      hasRoute(routeName: string) {
        return  this._router.url.indexOf(routeName) > -1;
      }

      getCurrentRoute(): string {
        return this.currentRoute;
      }

      getPreviousRoute(): string {
        return this.previousRoute;
      }

      setNewPreviousRoute(route: string) {
        this.previousRoute = route;
      }

      getOnlyMenuItemsWithoutParent(): Observable<any[]> {
        return of(this.getMenuItems().filter(x => x.ParentId != null));
      }

      private getParentMenuItems(): any[] {
        return this.getMenuItems().filter(x => x.ParentId == null);
      }

      private getChildMenuItems(parentId: number): any[] {
        return this.getMenuItems().filter(x => x.ParentId === parentId);
      }
      getMenuSorted(): any[] {
        const menuItems = this.getParentMenuItems().map(x => {
          const childrenItems = this.getChildMenuItems(x.Id);
          let sortedMenu = {
            Id: 90,
            Name: "Crm",
            Icon: "fa fa-file",
            Controller: null,
            ParentId: null,
            Area: null,
            Children : childrenItems
          }
          //sortedMenu['Children'] = childrenItems;
          return sortedMenu;
        });
        //console.log(menuItems);
        return (menuItems);
      }


      private getMenuItems(): any[] {
        let menuItems = [];
        //console.log("Aquin Push Menu");

        let AddMenu1={Id: 90,Area: null, Controller: null, Name: "Crm", ParentId: null, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu1);

        let AddMenu={Id: 91,Area: "Crm", Controller: "empty", Name: "empty", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 92,Area: "Crm", Controller: "Form1", Name: "Form1", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 93,Area: "Crm", Controller: "Form2", Name: "Form2", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 94,Area: "Crm", Controller: "Form3", Name: "Form3", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 95,Area: "Crm", Controller: "Form4", Name: "Form4", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 96,Area: "Crm", Controller: "Form5", Name: "Form5", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 97,Area: "Crm", Controller: "Form6", Name: "Form6", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 98,Area: "Crm", Controller: "Form7", Name: "Form7", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 99,Area: "Crm", Controller: "Form8", Name: "Form8", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 100,Area: "Crm", Controller: "Form9", Name: "Form9", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 101,Area: "Crm", Controller: "Form10", Name: "Form10", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 102,Area: "Crm", Controller: "Form11", Name: "Form11", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 103,Area: "Crm", Controller: "Form12", Name: "Form12", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 104,Area: "Crm", Controller: "Form13", Name: "Form13", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 105,Area: "Crm", Controller: "Form14", Name: "Form14", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);

        AddMenu={Id: 106,Area: "Crm", Controller: "Form15", Name: "Form15", ParentId: 90, Code: null, Action: null, Default: null, Favorit: false,Icon: "fa fa-file",Image: null,IsControlEditor: false,Parameters: null,TypeProgram: 0 }
        menuItems.push(AddMenu);


        return menuItems ? menuItems : null;
      }

    }
