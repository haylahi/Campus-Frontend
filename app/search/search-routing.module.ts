import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { WorkspaceComponent } from "./workspace/workspace.component";
import { SearchComponent } from "./search.component";
import { BranchComponent } from "./branch/branch.component";
import { OrganizationComponent } from "./organization/organization.component";

const routes: Routes = [
    { path: "", component: SearchComponent },
    { path: "workspaces/:id", component: WorkspaceComponent },
    { path: "workspaces/:workspace_id/branches/:id" , component: BranchComponent  },
    { path: "organization/:id" , component: OrganizationComponent  }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SearchRoutingModule { }