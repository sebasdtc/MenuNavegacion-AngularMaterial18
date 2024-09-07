export interface MenuItem {
  label:string;
  icon?:string;
  routerLink?:string;
  subItems?:MenuItem[];
}
