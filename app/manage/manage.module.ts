import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { SharedModule } from "../shared/shared.module";
import { ManageRoutingModule } from "./manage-routing.module";
import { ManageComponent } from "./manage.component";
import { ManageOrganizationComponent } from "./manage_organization/manage_organization.component"
import { ManageWorkspaceComponent } from "./manage_workspace/manage_workspace.component"
import { CreateOrganizationComponent } from "./create_organization/create_organization.component"
import { CreateWorkspaceComponent } from "./create_workspace/create_workspace.component"
import { ManageBranchComponent } from "./manage_workspace/manage_branch/manage_branch.component"

import {NativeScriptFormsModule} from "nativescript-angular/forms"

import { NativeScriptHttpModule } from "nativescript-angular/http";


@NgModule({
    imports: [
        NativeScriptModule,
        ManageRoutingModule,
        SharedModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule
    ],
    declarations: [
        ManageComponent,
        ManageOrganizationComponent,
        ManageWorkspaceComponent,
        CreateOrganizationComponent,
        CreateWorkspaceComponent,
        ManageBranchComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ManageModule { }
