import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppCodeComponent } from "src/app/components/shared/app-code/app-code.component";
import { ClipboardModule } from "ngx-clipboard";
import { HighlightModule } from "ngx-highlightjs";
import { AppExampleRunnerComponent } from "src/app/components/shared/app-example-runner/app-example-runner.component";
import { PageViewerComponent } from "src/app/components/shared/page-viewer/page-viewer.component";
import { CodeExampleComponent } from "src/app/components/shared/code-example/code-example.component";
import { AppTabsComponent } from "src/app/components/shared/app-tabs/app-tabs.component";
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";
import { GitHubIssueComponent } from "src/app/components/shared/disqus/github-issue/github-issue.component";
import { ContributionComponent } from '../disqus/contribution/contribution.component';
import { CodeDisplayComponent } from '../code-display/code-display.component';
import { NewCodeDisplayComponent } from '../new-translate-code-display/new-translate-code-display.component';

@NgModule({
 imports:      [CommonModule,ClipboardModule,HighlightModule ,DisqusSharedModule ],
  declarations: [PageViewerComponent, AppCodeComponent,CodeDisplayComponent,NewCodeDisplayComponent ,AppExampleRunnerComponent,CodeExampleComponent,AppTabsComponent ],
  exports: [CommonModule, FormsModule, AppCodeComponent,CodeDisplayComponent,NewCodeDisplayComponent,AppExampleRunnerComponent,PageViewerComponent,CodeExampleComponent,AppTabsComponent,DisqusSharedModule ],
 entryComponents: [GitHubIssueComponent,ContributionComponent],
})
export class CommonSharedModule { }