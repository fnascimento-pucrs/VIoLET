import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SetupComponent } from './setup.component';
import { SetupRoutingModule } from './setup-routing.module';
import { PageHeaderModule } from './../../shared';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AceEditorModule} from "ng2-ace-editor";
import {ImageViewerModule} from "ng2-image-viewer";
import {SetupInfraComponent} from "../components/setup-infra/setup-infra.component";
import {SetupPartitionComponent} from "../components/setup-partition/setup-partition.component";
import {SetupDeploymentComponent} from "../components/setup-deployment/setup-deployment.component";

@NgModule({
    imports: [CommonModule, PageHeaderModule, SetupRoutingModule, FormsModule, NgbModule.forRoot(), AceEditorModule, ImageViewerModule],
    declarations: [SetupComponent, SetupInfraComponent, SetupPartitionComponent, SetupDeploymentComponent]
})
export class SetupModule {}
