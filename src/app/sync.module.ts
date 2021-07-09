import { NgModule } from '@angular/core';

import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

/*import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SidebarModule, MenuAllModule, TreeViewAllModule,TreeViewModule ,NodeSelectEventArgs} from '@syncfusion/ej2-angular-navigations';
*/
import { GridAllModule,InfiniteScrollService } from '@syncfusion/ej2-angular-grids';


import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

import { GridModule, EditService, ToolbarService, SortService } from '@syncfusion/ej2-angular-grids';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
    declarations: [

    ],
    imports: [

      ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule,
      NumericTextBoxModule,
      RichTextEditorAllModule,
      TabModule,
      //DropDownListModule,
      //DialogModule,
      TextBoxModule,
      TimePickerModule,
      /*
      ListViewAllModule,
      DropDownListModule,
      SidebarModule, MenuAllModule, TreeViewAllModule,
      TreeViewModule,
      */
      GridAllModule,
      UploaderModule,

      GridModule,
      DatePickerAllModule,

    ],
    exports:[

      ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule,
      NumericTextBoxModule,
      RichTextEditorAllModule,
      TabModule,
      //DropDownListModule,
      //DialogModule,
      TextBoxModule,
      TimePickerModule,
      /*
      ListViewAllModule,
      DropDownListModule,
      SidebarModule, MenuAllModule, TreeViewAllModule,
      TreeViewModule,
      */
      GridAllModule,
      UploaderModule,

      GridModule,
      DatePickerAllModule,
    ],
    providers: [EditService, ToolbarService, SortService]
  })
  export class SyncModule { }
