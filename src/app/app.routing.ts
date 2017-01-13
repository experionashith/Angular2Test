import { RouterModule, Routes } from "@angular/router";

import { EditcontactComponent } from "./editcontact/editcontact.component";
import { HomecomComponent } from "./homecom/homecom.component";
import { NewcontactComponent } from "./newcontact/newcontact.component"
import { SearchcontactComponent } from "./searchcontact/searchcontact.component"
import { ViewcontactComponent } from "./viewcontact/viewcontact.component"

//all the paths to get navigated
const APP_ROUTES: Routes = [
    { path: 'register', component: EditcontactComponent },
    { path: '', component: HomecomComponent },
    { path: 'findacontact', component: SearchcontactComponent },
    { path: 'viewall', component: ViewcontactComponent },
    { path: 'edituser', component: EditcontactComponent },
    { path: 'addnew', component: NewcontactComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);