import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatNativeDateModule, MatRippleModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';



export const MY_FORMATS = {
  parse: {
    dateInput: 'DD MMM YYYY',
  },
  display: {
    dateInput: 'DD MMM YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatButtonModule,
    MatListModule, MatCardModule, MatProgressBarModule, MatInputModule,
    MatSnackBarModule, MatMenuModule, MatProgressSpinnerModule, MatDatepickerModule,
    MatAutocompleteModule, MatTableModule, MatDialogModule, MatTabsModule,
    MatTooltipModule, MatSelectModule, MatPaginatorModule, MatChipsModule,
    MatButtonToggleModule, MatSlideToggleModule, MatBadgeModule, MatCheckboxModule,
    MatExpansionModule,  DragDropModule, MatSortModule,
    A11yModule,     CdkStepperModule,    CdkTableModule,    CdkTreeModule,    DragDropModule,
    MatAutocompleteModule,    MatBadgeModule,    MatBottomSheetModule,    MatButtonModule,
    MatButtonToggleModule,    MatCardModule,    MatCheckboxModule,    MatChipsModule,    MatStepperModule,
    MatDatepickerModule,    MatDialogModule,    MatDividerModule,    MatExpansionModule,    MatGridListModule,
    MatIconModule,    MatInputModule,    MatListModule,   MatMenuModule,    MatNativeDateModule,    MatPaginatorModule,
    MatProgressBarModule,    MatProgressSpinnerModule,    MatRadioModule,    MatRippleModule,    MatSelectModule,
    MatSidenavModule,    MatSliderModule,    MatSlideToggleModule,    MatSnackBarModule,    MatSortModule,    MatTableModule,
    MatTabsModule,    MatToolbarModule,    MatTooltipModule,    MatTreeModule,    OverlayModule,    PortalModule, MatFormFieldModule,
    MatMomentDateModule
  ],
  exports: [
    CommonModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatButtonModule,
    MatListModule, MatCardModule, MatProgressBarModule, MatInputModule,
    MatSnackBarModule, MatMenuModule, MatProgressSpinnerModule, MatDatepickerModule,
    MatAutocompleteModule, MatTableModule, MatDialogModule, MatTabsModule,
    MatTooltipModule, MatSelectModule, MatPaginatorModule, MatChipsModule,
    MatButtonToggleModule, MatSlideToggleModule, MatBadgeModule, MatCheckboxModule,
    MatExpansionModule,  DragDropModule, MatSortModule,
    A11yModule,     CdkStepperModule,    CdkTableModule,    CdkTreeModule,    DragDropModule,
    MatAutocompleteModule,    MatBadgeModule,    MatBottomSheetModule,    MatButtonModule,
    MatButtonToggleModule,    MatCardModule,    MatCheckboxModule,    MatChipsModule,    MatStepperModule,
    MatDatepickerModule,    MatDialogModule,    MatDividerModule,    MatExpansionModule,    MatGridListModule,
    MatIconModule,    MatInputModule,    MatListModule,   MatMenuModule,    MatNativeDateModule,    MatPaginatorModule,
    MatProgressBarModule,    MatProgressSpinnerModule,    MatRadioModule,    MatRippleModule,    MatSelectModule,
    MatSidenavModule,    MatSliderModule,    MatSlideToggleModule,    MatSnackBarModule,    MatSortModule,    MatTableModule,
    MatTabsModule,    MatToolbarModule,    MatTooltipModule,    MatTreeModule,    OverlayModule,    PortalModule, MatFormFieldModule,
    MatMomentDateModule
  ],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    },
    { provide: LOCALE_ID, useValue: 'en-gb' }
  ],
  declarations: []
})
export class CustomMaterialModule {
  static forRoot() {
    return {
      ngModule: CustomMaterialModule,
      providers: [
      ]
    };
  }
}
