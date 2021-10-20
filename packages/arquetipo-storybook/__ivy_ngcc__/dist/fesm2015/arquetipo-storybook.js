import { EventEmitter, Component, Output, Input, NgModule, ViewChild, LOCALE_ID, Injectable, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef, ContentChildren, forwardRef, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSortModule } from '@angular/material/sort';
import { Subject } from 'rxjs';
import { NgApexchartsModule } from 'ng-apexcharts';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/material/button';
import * as ɵngcc3 from '@angular/material/icon';
import * as ɵngcc4 from '@angular/material/progress-bar';
import * as ɵngcc5 from '@angular/material/form-field';
import * as ɵngcc6 from '@angular/material/select';
import * as ɵngcc7 from '@angular/material/core';
import * as ɵngcc8 from '@angular/material/slide-toggle';
import * as ɵngcc9 from '@angular/material/radio';
import * as ɵngcc10 from '@angular/forms';
import * as ɵngcc11 from '@angular/material/input';
import * as ɵngcc12 from '@angular/material/table';
import * as ɵngcc13 from '@angular/material/paginator';
import * as ɵngcc14 from 'ng-apexcharts';

function BoxItemsComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelement(1, "span", 10);
    ɵngcc0.ɵɵelementStart(2, "span", 11);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(item_r1);
} }
function ButtonComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.outline ? "material-icons-outlined" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.icon);
} }
const _c0 = function (a0, a1) { return { square: a0, disabled: a1 }; };
const _c1 = function (a0) { return { disabled: a0 }; };
function HeaderComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 15);
    ɵngcc0.ɵɵlistener("click", function HeaderComponent_li_25_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.navigationMenu(item_r1); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("active", ctx_r0.navigationActive(item_r1));
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c1, item_r1.disabled));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r1.text, " ");
} }
function ProgressBarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "div", 8);
    ɵngcc0.ɵɵelement(2, "mat-progress-bar", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 10);
    ɵngcc0.ɵɵelementStart(4, "div", 11);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 12);
    ɵngcc0.ɵɵtext(7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const progress_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵpropertyInterpolate("value", progress_r1.amount);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1("", progress_r1.amount, " %");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", progress_r1.text, " ");
} }
function SelectComponent_mat_label_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-label");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.settings == null ? null : ctx_r0.settings.title);
} }
function SelectComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-option");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.settings == null ? null : ctx_r2.settings.firstOption);
} }
function SelectComponent_mat_option_7_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(action_r4 == null ? null : action_r4.icon);
} }
function SelectComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-option", 5);
    ɵngcc0.ɵɵtemplate(1, SelectComponent_mat_option_7_mat_icon_1_Template, 2, 1, "mat-icon", 1);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    ɵngcc0.ɵɵproperty("value", i_r5)("disabled", action_r4.disabled);
    ɵngcc0.ɵɵattribute("data-index", i_r5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", action_r4.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", action_r4.name, " ");
} }
function SliderToggleComponent_mat_label_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-label");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r1 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵstyleProp("font-weight", !_r1.checked ? "700" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.statusText == null ? null : ctx_r0.statusText.first);
} }
function SliderToggleComponent_mat_label_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-label");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r1 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵstyleProp("font-weight", _r1.checked ? "700" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.statusText == null ? null : ctx_r2.statusText.second, "");
} }
const _c2 = function (a0, a1) { return { "border": a0, "background-color": a1 }; };
function CustomerInfoComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span", 16);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.textRow);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.currency.format(ctx_r0.user == null ? null : ctx_r0.user.patrimony));
} }
function CustomerInfoComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵelementStart(1, "mln-select", 18, 19);
    ɵngcc0.ɵɵlistener("actionSelected", function CustomerInfoComponent_div_19_Template_mln_select_actionSelected_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.proposalSelected = $event.name; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("settings", ctx_r1.settingsSelect)("listItem", ctx_r1.settingsSelect == null ? null : ctx_r1.settingsSelect.listItemSelect);
} }
function RadioButtonListComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "label", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.textLabel);
} }
function RadioButtonListComponent_mat_radio_group_1_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-radio-button", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    ɵngcc0.ɵɵproperty("value", i_r4)("checked", item_r3.checked);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r3.text, " ");
} }
function RadioButtonListComponent_mat_radio_group_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-radio-group", 3);
    ɵngcc0.ɵɵlistener("change", function RadioButtonListComponent_mat_radio_group_1_Template_mat_radio_group_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.changeDetectionRadio($event); });
    ɵngcc0.ɵɵtemplate(1, RadioButtonListComponent_mat_radio_group_1_mat_radio_button_1_Template, 2, 3, "mat-radio-button", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.vertical ? "radio-group--vertical" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.list);
} }
function SearchInputComponent_mat_hint_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-hint");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "i");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    let tmp_1_0;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.amount, " resultados para ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.formGroupSearch == null ? null : (tmp_1_0 = ctx_r0.formGroupSearch.get("search")) == null ? null : tmp_1_0.value);
} }
const _c3 = ["*"];
function DatatableComponent_div_0_ng_container_2_mat_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-header-cell", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(column_r7.name);
} }
function DatatableComponent_div_0_ng_container_2_mat_cell_2_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 22);
    ɵngcc0.ɵɵlistener("click", function DatatableComponent_div_0_ng_container_2_mat_cell_2_img_2_Template_img_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r23); const datasource_r12 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r22 = ɵngcc0.ɵɵnextContext(3); return ctx_r22.expandedElement = ctx_r22.expandedElement === datasource_r12 ? null : datasource_r12; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const datasource_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassProp("img-accordion--up", ctx_r13.expandedElement === datasource_r12);
} }
function DatatableComponent_div_0_ng_container_2_mat_cell_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const datasource_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    const column_r7 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassMap(column_r7.class);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", datasource_r12[column_r7.key], " ");
} }
function DatatableComponent_div_0_ng_container_2_mat_cell_2_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const datasource_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    const column_r7 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(column_r7.class);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r15.currency.format(datasource_r12[column_r7.key]), " ");
} }
function DatatableComponent_div_0_ng_container_2_mat_cell_2_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "date");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const datasource_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    const column_r7 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassMap(column_r7.class);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(2, 3, datasource_r12[column_r7.key], column_r7.types.settings.format), " ");
} }
function DatatableComponent_div_0_ng_container_2_mat_cell_2_mln_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r35 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mln-select", 23, 24);
    ɵngcc0.ɵɵlistener("actionSelected", function DatatableComponent_div_0_ng_container_2_mat_cell_2_mln_select_6_Template_mln_select_actionSelected_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r35); const datasource_r12 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r33 = ɵngcc0.ɵɵnextContext(3); return ctx_r33.onActionChange(datasource_r12, $event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("settings", column_r7.types.settings.select)("listItem", column_r7.types.settings.listItem);
} }
function DatatableComponent_div_0_ng_container_2_mat_cell_2_a_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 25);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const datasource_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    const column_r7 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassMap(column_r7.class);
    ɵngcc0.ɵɵproperty("href", datasource_r12.url, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", datasource_r12[column_r7.key], " ");
} }
function DatatableComponent_div_0_ng_container_2_mat_cell_2_mln_button_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mln-button", 26, 27);
} if (rf & 2) {
    const column_r7 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("callback", column_r7.types.settings.callback)("classButton", column_r7.types.settings.classButton)("icon", column_r7.types.settings.icon)("isSquare", column_r7.types.settings.isSquare)("isDisabled", column_r7.types.settings.isDisabled);
} }
function DatatableComponent_div_0_ng_container_2_mat_cell_2_mln_slider_toggle_9_Template(rf, ctx) { if (rf & 1) {
    const _r44 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mln-slider-toggle", 28, 29);
    ɵngcc0.ɵɵlistener("changeToggleAction", function DatatableComponent_div_0_ng_container_2_mat_cell_2_mln_slider_toggle_9_Template_mln_slider_toggle_changeToggleAction_0_listener() { ɵngcc0.ɵɵrestoreView(_r44); const column_r7 = ɵngcc0.ɵɵnextContext(2).$implicit; return column_r7.types.settings.callback; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r7 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("label", column_r7.types.settings.label)("statusText", column_r7.types.settings.statusText);
} }
function DatatableComponent_div_0_ng_container_2_mat_cell_2_span_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const datasource_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    const column_r7 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassMap(column_r7 == null ? null : column_r7.class);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", datasource_r12[column_r7.key], " ");
} }
function DatatableComponent_div_0_ng_container_2_mat_cell_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-cell", 14);
    ɵngcc0.ɵɵelementContainerStart(1);
    ɵngcc0.ɵɵtemplate(2, DatatableComponent_div_0_ng_container_2_mat_cell_2_img_2_Template, 1, 2, "img", 15);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵtemplate(3, DatatableComponent_div_0_ng_container_2_mat_cell_2_span_3_Template, 2, 3, "span", 16);
    ɵngcc0.ɵɵtemplate(4, DatatableComponent_div_0_ng_container_2_mat_cell_2_span_4_Template, 2, 3, "span", 16);
    ɵngcc0.ɵɵtemplate(5, DatatableComponent_div_0_ng_container_2_mat_cell_2_span_5_Template, 3, 6, "span", 16);
    ɵngcc0.ɵɵtemplate(6, DatatableComponent_div_0_ng_container_2_mat_cell_2_mln_select_6_Template, 2, 2, "mln-select", 17);
    ɵngcc0.ɵɵtemplate(7, DatatableComponent_div_0_ng_container_2_mat_cell_2_a_7_Template, 2, 4, "a", 18);
    ɵngcc0.ɵɵtemplate(8, DatatableComponent_div_0_ng_container_2_mat_cell_2_mln_button_8_Template, 2, 5, "mln-button", 19);
    ɵngcc0.ɵɵtemplate(9, DatatableComponent_div_0_ng_container_2_mat_cell_2_mln_slider_toggle_9_Template, 2, 2, "mln-slider-toggle", 20);
    ɵngcc0.ɵɵtemplate(10, DatatableComponent_div_0_ng_container_2_mat_cell_2_span_10_Template, 2, 3, "span", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r48 = ɵngcc0.ɵɵnextContext();
    const column_r7 = ctx_r48.$implicit;
    const i_r8 = ctx_r48.index;
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngSwitch", column_r7.types.type);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", i_r8 === 0 && ctx_r10.isAccordion);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "text");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "money");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "date");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "select");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "link");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "button");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "toggle");
} }
function DatatableComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 10);
    ɵngcc0.ɵɵtemplate(1, DatatableComponent_div_0_ng_container_2_mat_header_cell_1_Template, 2, 1, "mat-header-cell", 11);
    ɵngcc0.ɵɵtemplate(2, DatatableComponent_div_0_ng_container_2_mat_cell_2_Template, 11, 9, "mat-cell", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r7 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("matColumnDef", column_r7.key);
} }
function DatatableComponent_div_0_ng_container_3_mat_cell_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 33);
    ɵngcc0.ɵɵelement(2, "mln-datatable", 34);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r50 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r51 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@detailExpand", element_r50 == ctx_r51.expandedElement ? "expanded" : "collapsed");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("datasources", element_r50.accordion.datasources)("datacolumns", element_r50.accordion.datacolumns);
} }
function DatatableComponent_div_0_ng_container_3_mat_cell_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-cell", 32);
    ɵngcc0.ɵɵtemplate(1, DatatableComponent_div_0_ng_container_3_mat_cell_1_ng_container_1_Template, 3, 3, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    const ctx_r49 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("colspan", ctx_r49.datacolumns.length);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", element_r50.accordion);
} }
function DatatableComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 30);
    ɵngcc0.ɵɵtemplate(1, DatatableComponent_div_0_ng_container_3_mat_cell_1_Template, 2, 2, "mat-cell", 31);
    ɵngcc0.ɵɵelementContainerEnd();
} }
function DatatableComponent_div_0_mat_header_row_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-header-row");
} }
function DatatableComponent_div_0_mat_row_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-row");
} if (rf & 2) {
    const datasource_r53 = ctx.$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("element-row ", ctx_r4.isAccordion ? "expandable-element" : "", "");
    ɵngcc0.ɵɵclassProp("expanded-row", ctx_r4.expandedElement === datasource_r53);
} }
const _c4 = function (a0, a1, a2) { return { "min-height": a0, "display": a1, "height": a2 }; };
function DatatableComponent_div_0_ng_container_6_mat_row_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-row", 36);
} if (rf & 2) {
    const datasource_r55 = ctx.$implicit;
    const ctx_r54 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction3(1, _c4, ctx_r54.expandedElement === datasource_r55 ? "48px" : "0px", ctx_r54.expandedElement === datasource_r55 ? "block" : "flex", ctx_r54.expandedElement === datasource_r55 ? "auto" : "0"));
} }
const _c5 = function () { return ["expandedDetail"]; };
function DatatableComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DatatableComponent_div_0_ng_container_6_mat_row_1_Template, 1, 5, "mat-row", 35);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matRowDefColumns", ɵngcc0.ɵɵpureFunction0(1, _c5));
} }
function DatatableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelementStart(1, "mat-table", 2);
    ɵngcc0.ɵɵtemplate(2, DatatableComponent_div_0_ng_container_2_Template, 3, 1, "ng-container", 3);
    ɵngcc0.ɵɵtemplate(3, DatatableComponent_div_0_ng_container_3_Template, 2, 0, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(4, DatatableComponent_div_0_mat_header_row_4_Template, 1, 0, "mat-header-row", 5);
    ɵngcc0.ɵɵtemplate(5, DatatableComponent_div_0_mat_row_5_Template, 1, 5, "mat-row", 6);
    ɵngcc0.ɵɵtemplate(6, DatatableComponent_div_0_ng_container_6_Template, 2, 2, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(7, "mat-paginator", 8, 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("dataSource", ctx_r0.dataSources);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.datacolumns);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isAccordion);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matHeaderRowDef", ctx_r0.datasourcesColumns);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matRowDefColumns", ctx_r0.datasourcesColumns);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isAccordion);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("hidden-paginator", !(ctx_r0.paginatorSettings == null ? null : ctx_r0.paginatorSettings.items));
    ɵngcc0.ɵɵproperty("pageSize", ctx_r0.paginatorSettings == null ? null : ctx_r0.paginatorSettings.items)("pageSizeOptions", ctx_r0.paginatorSettings == null ? null : ctx_r0.paginatorSettings.perPage);
} }
const _c6 = ["content"];
function StepComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function StepComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, StepComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate);
} }
function StepperComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("click", function StepperComponent_div_5_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.changeHiring(ctx_r3.linkHiring); });
    ɵngcc0.ɵɵelement(1, "i", 13);
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtext(3, "Contrataci\u00F3n");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("disabled", ctx_r0.linkHiring.disabled);
} }
function StepperComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("click", function StepperComponent_div_6_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.changeAmount(ctx_r5.linkAmount); });
    ɵngcc0.ɵɵelement(1, "i", 14);
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtext(3, "Costes");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("disabled", ctx_r1.linkAmount.disabled);
} }
function StepperComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 15);
    ɵngcc0.ɵɵlistener("click", function StepperComponent_li_9_Template_li_click_0_listener($event) { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r10); const panel_r7 = restoredCtx.$implicit; const i_r8 = restoredCtx.index; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.selectTab($event, panel_r7, i_r8); });
    ɵngcc0.ɵɵelement(1, "div", 16);
    ɵngcc0.ɵɵelementStart(2, "div", 17);
    ɵngcc0.ɵɵelement(3, "i", 18);
    ɵngcc0.ɵɵelementStart(4, "span");
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const panel_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r2.selectedIndex >= i_r8 && !panel_r7.disabled ? "done" : "pending");
    ɵngcc0.ɵɵattribute("title", panel_r7.descriptionLabel)("id", "header-" + panel_r7.index)("aria-selected", panel_r7.selected)("aria-controls", panel_r7.index);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵclassProp("tick-ok", ctx_r2.selectedIndex > i_r8);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(panel_r7.title);
} }
function SubHeaderComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelement(1, "mln-button", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("text", ctx_r1.settingsSubHeader.buttonSettings == null ? null : ctx_r1.settingsSubHeader.buttonSettings.text)("classButton", ctx_r1.settingsSubHeader.buttonSettings == null ? null : ctx_r1.settingsSubHeader.buttonSettings.class)("isSquare", ctx_r1.settingsSubHeader.buttonSettings == null ? null : ctx_r1.settingsSubHeader.buttonSettings.isSquare)("isDisabled", ctx_r1.settingsSubHeader.buttonSettings == null ? null : ctx_r1.settingsSubHeader.buttonSettings.isDisabled)("callback", ctx_r1.settingsSubHeader.buttonSettings == null ? null : ctx_r1.settingsSubHeader.buttonSettings.callback)("type", ctx_r1.settingsSubHeader.buttonSettings == null ? null : ctx_r1.settingsSubHeader.buttonSettings.type);
} }
function SubHeaderComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r2.settingsSubHeader.sufix.amount, " ", ctx_r2.settingsSubHeader.sufix.text, "");
} }
function SubHeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, SubHeaderComponent_div_0_div_1_Template, 2, 6, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵtemplate(5, SubHeaderComponent_div_0_span_5_Template, 2, 2, "span", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 6);
    ɵngcc0.ɵɵelementStart(7, "span", 7);
    ɵngcc0.ɵɵtext(8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.settingsSubHeader.buttonSettings);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.settingsSubHeader.title, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.settingsSubHeader.sufix);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.settingsSubHeader.rightTitle);
} }
const _c7 = ["chart"];
function ChartCircleComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelement(1, "mln-check-box", 15, 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("settings", item_r3);
} }
const _c8 = function (a0) { return { "background-image": a0 }; };
function AccordionPanelComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c8, "url(" + ctx_r0.imageIconUrl + ")"));
} }
const _c9 = [[["mln-accordion-header"]], [["mln-accordion-content"]]];
const _c10 = function (a0, a1) { return { "mln-accordion-panel--disabled": a0, "mln-accordion-panel--active": a1 }; };
const _c11 = ["mln-accordion-header", "mln-accordion-content"];
const _c12 = ["chart2"];
function ChartBarComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "section");
    ɵngcc0.ɵɵelement(1, "apx-chart", 1, 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("dataLabels", ctx_r0.chartOptions.dataLabels)("plotOptions", ctx_r0.chartOptions.plotOptions)("yaxis", ctx_r0.chartOptions.yaxis)("legend", ctx_r0.chartOptions.legend)("fill", ctx_r0.chartOptions.fill)("stroke", ctx_r0.chartOptions.stroke)("tooltip", ctx_r0.chartOptions.tooltip)("xaxis", ctx_r0.chartOptions.xaxis);
} }
class BoxItemsComponent {
    constructor() {
        this.actionEdit = new EventEmitter();
    }
    ngOnInit() { }
    editFilterAction(event) {
        this.actionEdit.emit({ event });
    }
}
BoxItemsComponent.ɵfac = function BoxItemsComponent_Factory(t) { return new (t || BoxItemsComponent)(); };
BoxItemsComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BoxItemsComponent, selectors: [["mln-box-items"]], inputs: { settings: "settings" }, outputs: { actionEdit: "actionEdit" }, decls: 14, vars: 4, consts: [[1, "mln-box-items"], [1, "header-wrapper"], [1, "header-amount", 3, "innerHTML"], [1, "header-text"], [1, "icon-info"], [1, "items-wrapper"], [4, "ngFor", "ngForOf"], [1, "footer-wrapper", 3, "click"], [1, "icon", "pencil"], [1, "footer-text"], [1, "tick"], [1, "item-text"]], template: function BoxItemsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "span");
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(6, "i", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 5);
        ɵngcc0.ɵɵelementStart(8, "ul");
        ɵngcc0.ɵɵtemplate(9, BoxItemsComponent_li_9_Template, 4, 1, "li", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 7);
        ɵngcc0.ɵɵlistener("click", function BoxItemsComponent_Template_div_click_10_listener($event) { return ctx.editFilterAction($event); });
        ɵngcc0.ɵɵelement(11, "i", 8);
        ɵngcc0.ɵɵelementStart(12, "span", 9);
        ɵngcc0.ɵɵtext(13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("innerHTML", ctx.settings == null ? null : ctx.settings.title, ɵngcc0.ɵɵsanitizeHtml);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.settings == null ? null : ctx.settings.subTitle);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.settings.listItems);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵtextInterpolate(ctx.settings == null ? null : ctx.settings.footerText);
    } }, directives: [ɵngcc1.NgForOf], styles: [".mln-box-items[_ngcontent-%COMP%]{border-radius:3px;background-color:#fff;border:1px solid #b3c2c9;max-width:300px;min-width:170px}.mln-box-items[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]{margin:0 auto;padding:20px 0 16px;text-align:center;width:85%;border-bottom:1px solid #b3c2c9}.mln-box-items[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .header-amount[_ngcontent-%COMP%]{margin-bottom:4px;color:#2699d6;font-family:\"RobotoBold\";font-size:28px}.mln-box-items[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-family:\"Roboto\"}.mln-box-items[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .icon-info[_ngcontent-%COMP%]{background-position:center;background-repeat:no-repeat;background-size:contain;width:20px;height:18px;margin-left:10px;background-image:url(/assets/img/info.png)}.mln-box-items[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]{width:100%;margin:0 auto;padding:5px 0 10px}.mln-box-items[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.mln-box-items[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:8px 0;display:flex}.mln-box-items[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .tick[_ngcontent-%COMP%]:before{content:\" \";padding-right:5px;position:relative;display:inline-block;width:19px;height:26px;top:-4px;background-image:url(/assets/img/success.png);background-repeat:no-repeat;background-size:contain}.mln-box-items[_ngcontent-%COMP%]   .items-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .item-text[_ngcontent-%COMP%]{padding-right:25px;font-family:\"Roboto\";font-size:14px}.mln-box-items[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]{border-top:1px solid #b3c2c9;margin:0 auto;text-align:center;min-height:50px;display:flex;align-items:center;justify-content:center;width:100%;cursor:pointer}.mln-box-items[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{background-position:center;background-repeat:no-repeat;background-size:contain;margin-right:8px;padding:10px}.mln-box-items[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]   .icon.pencil[_ngcontent-%COMP%]{background-image:url(/assets/img/pencil.svg)}.mln-box-items[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%]{font-family:\"RobotoBold\";font-weight:bold;color:#9b9b9b}.mln-box-items[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]:hover{background-color:#b3c2c924}"] });
BoxItemsComponent.ctorParameters = () => [];
BoxItemsComponent.propDecorators = {
    actionEdit: [{ type: Output }],
    settings: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BoxItemsComponent, [{
        type: Component,
        args: [{
                selector: 'mln-box-items',
                template: "<div class=\"mln-box-items\">\r\n    <div class=\"header-wrapper\">\r\n        <div class=\"header-amount\" [innerHTML]=\"settings?.title\"></div>\r\n        <div class=\"header-text\">\r\n            <span>{{ settings?.subTitle }}</span>\r\n            <i class=\"icon-info\"></i>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"items-wrapper\">\r\n        <ul>\r\n            <li *ngFor=\"let item of settings.listItems\">\r\n                <span class=\"tick\"></span><span class=\"item-text\">{{ item }}</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"footer-wrapper\" (click)=\"editFilterAction($event)\">\r\n        <i class=\"icon pencil\"></i>\r\n        <span class=\"footer-text\">{{ settings?.footerText }}</span>\r\n    </div>\r\n</div>",
                styles: [".mln-box-items{border-radius:3px;background-color:#fff;border:1px solid #b3c2c9;max-width:300px;min-width:170px}.mln-box-items .header-wrapper{margin:0 auto;padding:20px 0 16px;text-align:center;width:85%;border-bottom:1px solid #b3c2c9}.mln-box-items .header-wrapper .header-amount{margin-bottom:4px;color:#2699d6;font-family:\"RobotoBold\";font-size:28px}.mln-box-items .header-wrapper .header-text{display:flex;justify-content:center;align-items:center;font-family:\"Roboto\"}.mln-box-items .header-wrapper .header-text .icon-info{background-position:center;background-repeat:no-repeat;background-size:contain;width:20px;height:18px;margin-left:10px;background-image:url(/assets/img/info.png)}.mln-box-items .items-wrapper{width:100%;margin:0 auto;padding:5px 0 10px}.mln-box-items .items-wrapper ul{list-style:none}.mln-box-items .items-wrapper ul li{margin:8px 0;display:flex}.mln-box-items .items-wrapper ul .tick:before{content:\" \";padding-right:5px;position:relative;display:inline-block;width:19px;height:26px;top:-4px;background-image:url(/assets/img/success.png);background-repeat:no-repeat;background-size:contain}.mln-box-items .items-wrapper ul .item-text{padding-right:25px;font-family:\"Roboto\";font-size:14px}.mln-box-items .footer-wrapper{border-top:1px solid #b3c2c9;margin:0 auto;text-align:center;min-height:50px;display:flex;align-items:center;justify-content:center;width:100%;cursor:pointer}.mln-box-items .footer-wrapper .icon{background-position:center;background-repeat:no-repeat;background-size:contain;margin-right:8px;padding:10px}.mln-box-items .footer-wrapper .icon.pencil{background-image:url(/assets/img/pencil.svg)}.mln-box-items .footer-wrapper .footer-text{font-family:\"RobotoBold\";font-weight:bold;color:#9b9b9b}.mln-box-items .footer-wrapper:hover{background-color:#b3c2c924}\n"]
            }]
    }], function () { return []; }, { actionEdit: [{
            type: Output
        }], settings: [{
            type: Input
        }] }); })();

class BoxItemsModule {
}
BoxItemsModule.ɵfac = function BoxItemsModule_Factory(t) { return new (t || BoxItemsModule)(); };
BoxItemsModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: BoxItemsModule });
BoxItemsModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BoxItemsModule, [{
        type: NgModule,
        args: [{
                declarations: [BoxItemsComponent],
                imports: [CommonModule],
                exports: [BoxItemsComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BoxItemsModule, { declarations: function () { return [BoxItemsComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [BoxItemsComponent]; } }); })();

class ButtonComponent {
    constructor() {
        this.isSquare = false;
        this.isDisabled = false;
    }
    ngOnInit() { }
    clickButton(event) {
        if (this.callback) {
            this.callback.next({
                element: event && event.target,
                text: this.text,
                class: this.classButton,
            });
        }
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["mln-button"]], inputs: { isSquare: "isSquare", isDisabled: "isDisabled", text: "text", classButton: "classButton", icon: "icon", type: "type", callback: "callback", outline: "outline" }, decls: 3, vars: 13, consts: [["mat-stroked-button", "", 3, "ngClass", "disabled", "type", "click"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.clickButton($event); });
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵtemplate(2, ButtonComponent_mat_icon_2_Template, 2, 2, "mat-icon", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("mln-button ", ctx.classButton, "");
        ɵngcc0.ɵɵclassProp("mln-button--icon", ctx.icon && !ctx.text);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(10, _c0, ctx.isSquare == true, ctx.isDisabled == true))("disabled", ctx.isDisabled)("type", ctx.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.text, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon);
    } }, directives: [ɵngcc2.MatButton, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc3.MatIcon], styles: [".mln-button[_ngcontent-%COMP%]{padding:0 30px;font-weight:bold;border-radius:20px;margin:0 auto;border-width:2px;height:40px;font-family:\"Roboto\"}.mln-button.square[_ngcontent-%COMP%]{border-radius:3px;font-weight:normal}.mln-button.primary[_ngcontent-%COMP%]{color:#212b65;border-color:#212b65;background-color:#fff}.mln-button.secondary[_ngcontent-%COMP%]{color:#fff;background-color:#212b65}.mln-button.disabled[_ngcontent-%COMP%]{color:#bcbfd1;border-color:#bcbfd1;background-color:#fff}.mln-button--icon[_ngcontent-%COMP%]{border:none;color:#2a9fd8}"] });
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    text: [{ type: Input }],
    classButton: [{ type: Input }],
    icon: [{ type: Input }],
    isSquare: [{ type: Input }],
    isDisabled: [{ type: Input }],
    type: [{ type: Input }],
    callback: [{ type: Input }],
    outline: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'mln-button',
                template: "<button mat-stroked-button [class.mln-button--icon]=\"icon && !text\" class=\"mln-button {{ classButton }}\" [ngClass]=\"{ square: isSquare == true, disabled: isDisabled == true }\" [disabled]=\"isDisabled\" [type]=\"type\" (click)=\"clickButton($event)\">\r\n  {{ text }}\r\n  <mat-icon *ngIf=\"icon\" [ngClass]=\"outline ? 'material-icons-outlined' : ''\">{{ icon }}</mat-icon>\r\n</button>",
                styles: [".mln-button{padding:0 30px;font-weight:bold;border-radius:20px;margin:0 auto;border-width:2px;height:40px;font-family:\"Roboto\"}.mln-button.square{border-radius:3px;font-weight:normal}.mln-button.primary{color:#212b65;border-color:#212b65;background-color:#fff}.mln-button.secondary{color:#fff;background-color:#212b65}.mln-button.disabled{color:#bcbfd1;border-color:#bcbfd1;background-color:#fff}.mln-button--icon{border:none;color:#2a9fd8}\n"]
            }]
    }], function () { return []; }, { isSquare: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], text: [{
            type: Input
        }], classButton: [{
            type: Input
        }], icon: [{
            type: Input
        }], type: [{
            type: Input
        }], callback: [{
            type: Input
        }], outline: [{
            type: Input
        }] }); })();

class ButtonModule {
}
ButtonModule.ɵfac = function ButtonModule_Factory(t) { return new (t || ButtonModule)(); };
ButtonModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, MatButtonModule, MatIconModule], MatButtonModule, MatIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonComponent],
                imports: [CommonModule, MatButtonModule, MatIconModule],
                exports: [ButtonComponent, MatButtonModule, MatIconModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonModule, { declarations: function () { return [ButtonComponent]; }, imports: function () { return [CommonModule, MatButtonModule, MatIconModule]; }, exports: function () { return [ButtonComponent, MatButtonModule, MatIconModule]; } }); })();

class ButtonBigComponent {
    constructor() {
        this.active = true;
        this.icon = 'work_outline';
    }
    ngOnInit() { }
    onClick(event) {
        if (!this.active) {
            return;
        }
        this.callback.next({
            event,
            text: this.text,
        });
    }
}
ButtonBigComponent.ɵfac = function ButtonBigComponent_Factory(t) { return new (t || ButtonBigComponent)(); };
ButtonBigComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ButtonBigComponent, selectors: [["mln-button-big"]], inputs: { active: "active", icon: "icon", text: "text", callback: "callback" }, decls: 7, vars: 6, consts: [[1, "mln-icon-button", "primary", 3, "ngClass", "click"], [1, "left"], [1, "icon"], [1, "right"], [1, "text"]], template: function ButtonBigComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function ButtonBigComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "mat-icon", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("active", ctx.active);
        ɵngcc0.ɵɵproperty("ngClass", ctx.active == true ? "active" : "disabled");
        ɵngcc0.ɵɵattribute("disabled", !ctx.active ? true : null);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.icon);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.text);
    } }, directives: [ɵngcc1.NgClass, ɵngcc3.MatIcon], styles: [".mln-icon-button[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center;justify-content:center;min-width:260px;border-radius:5px;background-color:#fff;border:1px solid #bcbfd1;padding:1rem;margin:0 auto}.mln-icon-button[_ngcontent-%COMP%]:focus, .mln-icon-button[_ngcontent-%COMP%]:active{outline:none}.mln-icon-button.active[_ngcontent-%COMP%]{color:#fff;background-color:#212b65}.mln-icon-button[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{display:inline-block;width:35%}.mln-icon-button[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:40px;color:#fff}.mln-icon-button.disabled[_ngcontent-%COMP%]{background-color:#fff}.mln-icon-button.disabled[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#bcbfd1}.mln-icon-button.disabled[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{color:#bcbfd1}.mln-icon-button[_ngcontent-%COMP%] > .right[_ngcontent-%COMP%]{width:65%;color:#fff}.mln-icon-button[_ngcontent-%COMP%] > .right[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-family:\"RobotoBold\";padding:0 2rem}"] });
ButtonBigComponent.ctorParameters = () => [];
ButtonBigComponent.propDecorators = {
    active: [{ type: Input }],
    text: [{ type: Input }],
    icon: [{ type: Input }],
    callback: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonBigComponent, [{
        type: Component,
        args: [{
                selector: 'mln-button-big',
                template: "<button class=\"mln-icon-button primary\" [ngClass]=\"active == true ? 'active' : 'disabled'\" (click)=\"onClick($event)\" [class.active]=\"active\" [attr.disabled]=\"!active ? true : null\">\r\n    <!-- <i class=\"icon\" [ngStyle]=\"{'background-image': 'url(' + classIcon + ')'}\"> </i> -->\r\n    <div class=\"left\">\r\n        <mat-icon class=\"icon\">{{ icon }}</mat-icon>\r\n    </div>\r\n    <div class=\"right\">\r\n        <div class=\"text\">{{ text }}</div>\r\n    </div>\r\n</button>",
                styles: [".mln-icon-button{cursor:pointer;display:flex;align-items:center;justify-content:center;min-width:260px;border-radius:5px;background-color:#fff;border:1px solid #bcbfd1;padding:1rem;margin:0 auto}.mln-icon-button:focus,.mln-icon-button:active{outline:none}.mln-icon-button.active{color:#fff;background-color:#212b65}.mln-icon-button .left{display:inline-block;width:35%}.mln-icon-button .left .mat-icon{font-size:40px;color:#fff}.mln-icon-button.disabled{background-color:#fff}.mln-icon-button.disabled .left .mat-icon{color:#bcbfd1}.mln-icon-button.disabled .right{color:#bcbfd1}.mln-icon-button>.right{width:65%;color:#fff}.mln-icon-button>.right .text{font-family:\"RobotoBold\";padding:0 2rem}\n"]
            }]
    }], function () { return []; }, { active: [{
            type: Input
        }], icon: [{
            type: Input
        }], text: [{
            type: Input
        }], callback: [{
            type: Input
        }] }); })();

class BigButtonModule {
}
BigButtonModule.ɵfac = function BigButtonModule_Factory(t) { return new (t || BigButtonModule)(); };
BigButtonModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: BigButtonModule });
BigButtonModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, MatIconModule], MatIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BigButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonBigComponent],
                imports: [CommonModule, MatIconModule],
                exports: [ButtonBigComponent, MatIconModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BigButtonModule, { declarations: function () { return [ButtonBigComponent]; }, imports: function () { return [CommonModule, MatIconModule]; }, exports: function () { return [ButtonBigComponent, MatIconModule]; } }); })();

class ButtonDoubleComponent {
    constructor() {
        this.actionBigButton = new EventEmitter();
    }
    ngOnInit() { }
    onClick(event) {
        this.actionBigButton.emit({ event });
    }
}
ButtonDoubleComponent.ɵfac = function ButtonDoubleComponent_Factory(t) { return new (t || ButtonDoubleComponent)(); };
ButtonDoubleComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ButtonDoubleComponent, selectors: [["mln-button-double"]], inputs: { active: "active", classIcon: "classIcon", rightText: "rightText", leftText: "leftText" }, outputs: { actionBigButton: "actionBigButton" }, decls: 6, vars: 5, consts: [[1, "mln-icon-button", "primary", 3, "click"], [1, "initial"], [1, "text"]], template: function ButtonDoubleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function ButtonDoubleComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div");
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("active", ctx.active);
        ɵngcc0.ɵɵattribute("disabled", !ctx.active ? true : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.leftText);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.rightText);
    } }, styles: [".mln-icon-button[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center;justify-content:center;min-width:260px;height:70px;margin:0 auto;border-radius:5px;color:#212b65;background-color:#fff;border:0px;box-shadow:0 0 7px #00000040}.mln-icon-button[_ngcontent-%COMP%]:focus, .mln-icon-button[_ngcontent-%COMP%]:active{outline:none}.mln-icon-button[_ngcontent-%COMP%] > .initial[_ngcontent-%COMP%]{width:30%;height:85%;vertical-align:middle;display:flex;align-items:center;justify-content:center;border-right:2px solid #bcbfd1;font-weight:bold;font-size:20px}.mln-icon-button[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%]{width:70%;font-size:14px;padding:0 4px;font-family:\"RobotoBold\"}.mln-icon-button.active[_ngcontent-%COMP%]{color:#fff;background-color:#212b65;box-shadow:0 0 #0000}.mln-icon-button.active[_ngcontent-%COMP%] > .initial[_ngcontent-%COMP%]{border-right:2px solid #ffffff}"] });
ButtonDoubleComponent.ctorParameters = () => [];
ButtonDoubleComponent.propDecorators = {
    active: [{ type: Input }],
    classIcon: [{ type: Input }],
    rightText: [{ type: Input }],
    leftText: [{ type: Input }],
    actionBigButton: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonDoubleComponent, [{
        type: Component,
        args: [{
                selector: 'mln-button-double',
                template: "<button class=\"mln-icon-button primary\" (click)=\"onClick($event)\" [class.active]=\"active\" [attr.disabled]=\"!active ? true : null\">\r\n    <div class=\"initial\">{{ leftText }}</div>\r\n    <div class=\"text\">\r\n        <div>{{ rightText }}</div>\r\n    </div>\r\n</button>",
                styles: [".mln-icon-button{cursor:pointer;display:flex;align-items:center;justify-content:center;min-width:260px;height:70px;margin:0 auto;border-radius:5px;color:#212b65;background-color:#fff;border:0px;box-shadow:0 0 7px #00000040}.mln-icon-button:focus,.mln-icon-button:active{outline:none}.mln-icon-button>.initial{width:30%;height:85%;vertical-align:middle;display:flex;align-items:center;justify-content:center;border-right:2px solid #bcbfd1;font-weight:bold;font-size:20px}.mln-icon-button>.text{width:70%;font-size:14px;padding:0 4px;font-family:\"RobotoBold\"}.mln-icon-button.active{color:#fff;background-color:#212b65;box-shadow:0 0 #0000}.mln-icon-button.active>.initial{border-right:2px solid #ffffff}\n"]
            }]
    }], function () { return []; }, { actionBigButton: [{
            type: Output
        }], active: [{
            type: Input
        }], classIcon: [{
            type: Input
        }], rightText: [{
            type: Input
        }], leftText: [{
            type: Input
        }] }); })();

class DoubleButtonModule {
}
DoubleButtonModule.ɵfac = function DoubleButtonModule_Factory(t) { return new (t || DoubleButtonModule)(); };
DoubleButtonModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: DoubleButtonModule });
DoubleButtonModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DoubleButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonDoubleComponent],
                imports: [CommonModule],
                exports: [ButtonDoubleComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DoubleButtonModule, { declarations: function () { return [ButtonDoubleComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ButtonDoubleComponent]; } }); })();

class HeaderComponent {
    constructor() {
        this.user = {
            name: 'Name',
            lastname: 'Surname1 Surname2',
            patrimony: 0.0,
        };
        this.menuItems = [
            { text: 'Link 1', class: 'active', navigation: '#' },
            { text: 'Link 2', class: '', navigation: '#' },
            { text: 'Link 3', class: '', navigation: '#' },
            { text: 'Link 4', class: '', navigation: '#', disabled: true },
        ];
        this.backButtonAction = new EventEmitter();
        this.informationUserAction = new EventEmitter();
        this.navigationAction = new EventEmitter();
    }
    ngOnInit() {
        this.amountInt = Math.trunc(this.user.patrimony);
        this.amountDec = Math.trunc((this.user.patrimony % 1) * 100);
        this.initials =
            this.user.name[0].toUpperCase() + this.user.lastname[0].toUpperCase();
    }
    goBackAction() {
        this.backButtonAction.emit(true);
    }
    informationUser() {
        this.informationUserAction.emit(true);
    }
    navigationMenu(item) {
        this.navigationSelected = item.text;
        this.navigationAction.emit(item);
    }
    navigationActive(item) {
        const isNavigationSelected = !this.navigationSelected && item.class;
        const isCurrentNavigationActive = this.navigationSelected === item.text;
        if (!item.disabled && (isNavigationSelected || isCurrentNavigationActive)) {
            this.menuItems = this.menuItems.map((d) => {
                d.class = '';
                if (item.text === d.text) {
                    d.class = 'active';
                }
                return d;
            });
            return true;
        }
        return false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["mln-header"]], inputs: { user: "user", menuItems: "menuItems" }, outputs: { backButtonAction: "backButtonAction", informationUserAction: "informationUserAction", navigationAction: "navigationAction" }, decls: 26, vars: 6, consts: [[1, "header-wrapper"], [1, "header-info"], [1, "header-search", 3, "click"], [1, "header-icon-back"], [1, "header-user"], [1, "header-initial"], [1, "header-user-info"], [1, "header-user-name"], [1, "header-user-icon", 3, "click"], [1, "header-amount"], [1, "header-amount-number"], [1, "decimal"], [1, "header-amount-text"], [1, "header-menu"], ["class", "header-item", 3, "active", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "header-item", 3, "ngClass", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "header", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵlistener("click", function HeaderComponent_Template_div_click_2_listener() { return ctx.goBackAction(); });
        ɵngcc0.ɵɵelement(3, "i", 3);
        ɵngcc0.ɵɵelementStart(4, "span");
        ɵngcc0.ɵɵtext(5, "Buscador");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 4);
        ɵngcc0.ɵɵelementStart(7, "div", 5);
        ɵngcc0.ɵɵtext(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 6);
        ɵngcc0.ɵɵelementStart(10, "div", 7);
        ɵngcc0.ɵɵtext(11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "div", 8);
        ɵngcc0.ɵɵlistener("click", function HeaderComponent_Template_div_click_12_listener() { return ctx.informationUser(); });
        ɵngcc0.ɵɵelement(13, "span");
        ɵngcc0.ɵɵelementStart(14, "span");
        ɵngcc0.ɵɵtext(15, "MiFid");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "div", 9);
        ɵngcc0.ɵɵelementStart(17, "div", 10);
        ɵngcc0.ɵɵelementStart(18, "span");
        ɵngcc0.ɵɵtext(19);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(20, "span", 11);
        ɵngcc0.ɵɵtext(21);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "div", 12);
        ɵngcc0.ɵɵtext(23, "PATRIMONIO");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(24, "ul", 13);
        ɵngcc0.ɵɵtemplate(25, HeaderComponent_li_25_Template, 2, 6, "li", 14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(8);
        ɵngcc0.ɵɵtextInterpolate(ctx.initials);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate2("", ctx.user.name, " ", ctx.user.lastname, "");
        ɵngcc0.ɵɵadvance(8);
        ɵngcc0.ɵɵtextInterpolate(ctx.amountInt);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(",", ctx.amountDec, " \u20AC");
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.menuItems);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass], styles: [".header-wrapper[_ngcontent-%COMP%]{min-height:80px;display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:3px;box-shadow:0 10px 18px -5px #ccc;top:0;left:0;background:#ffffff;z-index:99;padding:8px 0}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]{display:flex}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-search[_ngcontent-%COMP%]{cursor:pointer;color:#000;font-family:\"GillSans\";font-weight:400;padding-left:20px;display:flex;align-items:center}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-search[_ngcontent-%COMP%]   .header-icon-back[_ngcontent-%COMP%]{background-image:url(/assets/img/arrow-back.png);background-size:contain;background-repeat:no-repeat;width:12px;height:12px;display:inline-block;padding-right:5px}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-user[_ngcontent-%COMP%]{display:flex;margin:0 20px 0 10px}@media only screen and (max-width: 540px){.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-user[_ngcontent-%COMP%]{margin:20px 0 10px;justify-content:center;text-align:center;width:100%}}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-user[_ngcontent-%COMP%]   .header-initial[_ngcontent-%COMP%]{width:50px;min-width:50px;height:50px;border-radius:50%;background-color:#f1f5fc;display:flex;align-items:center;justify-content:center;color:#2f9ad3;text-transform:uppercase;font-family:\"Roboto900\";font-size:20px}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-user[_ngcontent-%COMP%]   .header-user-info[_ngcontent-%COMP%]{margin-left:10px}@media only screen and (max-width: 540px){.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-user[_ngcontent-%COMP%]   .header-user-info[_ngcontent-%COMP%]{flex-wrap:wrap}}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-user[_ngcontent-%COMP%]   .header-user-info[_ngcontent-%COMP%]   .header-user-name[_ngcontent-%COMP%]{color:#202967;font-family:\"GillSansBold\";font-size:20px}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-user[_ngcontent-%COMP%]   .header-user-info[_ngcontent-%COMP%]   .header-user-icon[_ngcontent-%COMP%]{cursor:pointer;padding-top:5px;display:flex;align-items:center}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-user[_ngcontent-%COMP%]   .header-user-info[_ngcontent-%COMP%]   .header-user-icon[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child{font-family:\"GillSans\";padding-right:10px;border-right:2px solid lightgray;display:inline-block;background-image:url(/assets/img/cliente-real.png);background-repeat:no-repeat;background-size:contain;width:30px;height:28px}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-user[_ngcontent-%COMP%]   .header-user-info[_ngcontent-%COMP%]   .header-user-icon[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{display:flex;align-items:center;font-family:\"Roboto\";padding-left:10px}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-user[_ngcontent-%COMP%]   .header-user-info[_ngcontent-%COMP%]   .header-user-icon[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child:before{content:\" \";padding-right:5px;position:relative;display:inline-block;width:19px;height:26px;top:0px;background-image:url(/assets/img/success.png);background-repeat:no-repeat;background-size:contain}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-amount[_ngcontent-%COMP%]{margin-left:20px}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-amount[_ngcontent-%COMP%]   .header-amount-number[_ngcontent-%COMP%]{color:#2f9ad3;font-family:\"RobotoBold\";font-size:24px;padding-bottom:3px;white-space:nowrap}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-amount[_ngcontent-%COMP%]   .header-amount-number[_ngcontent-%COMP%]   .decimal[_ngcontent-%COMP%]{font-size:18px}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-amount[_ngcontent-%COMP%]   .header-amount-text[_ngcontent-%COMP%]{display:flex;justify-content:left;align-items:center;font-family:\"Roboto\";padding-bottom:3px}@media only screen and (max-width: 540px){.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-amount[_ngcontent-%COMP%]{text-align:center;width:100%}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-amount[_ngcontent-%COMP%]   .header-amount-number[_ngcontent-%COMP%], .header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-amount[_ngcontent-%COMP%]   .header-amount-text[_ngcontent-%COMP%]{text-align:center;justify-content:center}}.header-wrapper[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]{list-style:none;padding:0;display:flex;min-height:80px;align-items:center;margin:0}.header-wrapper[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]{margin-right:20px;cursor:pointer;display:flex;min-height:80px;align-items:center;box-sizing:border-box;border-bottom:4px solid transparent;font-family:\"GillSans500\";outline:none;text-align:center}.header-wrapper[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .header-item.active[_ngcontent-%COMP%]{border-bottom:4px solid #202967;outline:none}.header-wrapper[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .header-item.disabled[_ngcontent-%COMP%]{color:#9999;pointer-events:none}.header-wrapper[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]:focus{outline:none}@media only screen and (max-width: 980px){.header-wrapper[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:space-between}.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;padding-top:10px;padding-right:10px}}@media only screen and (max-width: 980px) and (max-width: 540px){.header-wrapper[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]{flex-wrap:wrap}}@media only screen and (max-width: 980px){.header-wrapper[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]{justify-content:center;display:flex;width:100%;margin:0}}"] });
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    user: [{ type: Input }],
    menuItems: [{ type: Input }],
    backButtonAction: [{ type: Output }],
    informationUserAction: [{ type: Output }],
    navigationAction: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{
                selector: 'mln-header',
                template: "<header class=\"header-wrapper\">\r\n    <div class=\"header-info\">\r\n        <div class=\"header-search\" (click)=\"goBackAction()\">\r\n            <i class=\"header-icon-back\"></i>\r\n            <span>Buscador</span>\r\n        </div>\r\n        <div class=\"header-user\">\r\n            <div class=\"header-initial\">{{initials}}</div>\r\n            <div class=\"header-user-info\">\r\n                <div class=\"header-user-name\">{{user.name}} {{user.lastname}}</div>\r\n                <div class=\"header-user-icon\" (click)=\"informationUser()\">\r\n                    <span></span>\r\n                    <span>MiFid</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"header-amount\">\r\n            <div class=\"header-amount-number\">\r\n                <span>{{amountInt}}</span><span class=\"decimal\">,{{amountDec}} \u20AC</span>\r\n            </div>\r\n            <div class=\"header-amount-text\">PATRIMONIO</div>\r\n        </div>\r\n    </div>\r\n    <ul class=\"header-menu\">\r\n        <li class=\"header-item\" *ngFor=\"let item of menuItems;\" [class.active]=\"navigationActive(item)\" [ngClass]=\"{ disabled: item.disabled }\" (click)=\"navigationMenu(item)\">\r\n            {{ item.text }}\r\n        </li>\r\n    </ul>\r\n</header>",
                styles: [".header-wrapper{min-height:80px;display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:3px;box-shadow:0 10px 18px -5px #ccc;top:0;left:0;background:#ffffff;z-index:99;padding:8px 0}.header-wrapper .header-info{display:flex}.header-wrapper .header-info .header-search{cursor:pointer;color:#000;font-family:\"GillSans\";font-weight:400;padding-left:20px;display:flex;align-items:center}.header-wrapper .header-info .header-search .header-icon-back{background-image:url(/assets/img/arrow-back.png);background-size:contain;background-repeat:no-repeat;width:12px;height:12px;display:inline-block;padding-right:5px}.header-wrapper .header-info .header-user{display:flex;margin:0 20px 0 10px}@media only screen and (max-width: 540px){.header-wrapper .header-info .header-user{margin:20px 0 10px;justify-content:center;text-align:center;width:100%}}.header-wrapper .header-info .header-user .header-initial{width:50px;min-width:50px;height:50px;border-radius:50%;background-color:#f1f5fc;display:flex;align-items:center;justify-content:center;color:#2f9ad3;text-transform:uppercase;font-family:\"Roboto900\";font-size:20px}.header-wrapper .header-info .header-user .header-user-info{margin-left:10px}@media only screen and (max-width: 540px){.header-wrapper .header-info .header-user .header-user-info{flex-wrap:wrap}}.header-wrapper .header-info .header-user .header-user-info .header-user-name{color:#202967;font-family:\"GillSansBold\";font-size:20px}.header-wrapper .header-info .header-user .header-user-info .header-user-icon{cursor:pointer;padding-top:5px;display:flex;align-items:center}.header-wrapper .header-info .header-user .header-user-info .header-user-icon>span:first-child{font-family:\"GillSans\";padding-right:10px;border-right:2px solid lightgray;display:inline-block;background-image:url(/assets/img/cliente-real.png);background-repeat:no-repeat;background-size:contain;width:30px;height:28px}.header-wrapper .header-info .header-user .header-user-info .header-user-icon>span:last-child{display:flex;align-items:center;font-family:\"Roboto\";padding-left:10px}.header-wrapper .header-info .header-user .header-user-info .header-user-icon>span:last-child:before{content:\" \";padding-right:5px;position:relative;display:inline-block;width:19px;height:26px;top:0px;background-image:url(/assets/img/success.png);background-repeat:no-repeat;background-size:contain}.header-wrapper .header-info .header-amount{margin-left:20px}.header-wrapper .header-info .header-amount .header-amount-number{color:#2f9ad3;font-family:\"RobotoBold\";font-size:24px;padding-bottom:3px;white-space:nowrap}.header-wrapper .header-info .header-amount .header-amount-number .decimal{font-size:18px}.header-wrapper .header-info .header-amount .header-amount-text{display:flex;justify-content:left;align-items:center;font-family:\"Roboto\";padding-bottom:3px}@media only screen and (max-width: 540px){.header-wrapper .header-info .header-amount{text-align:center;width:100%}.header-wrapper .header-info .header-amount .header-amount-number,.header-wrapper .header-info .header-amount .header-amount-text{text-align:center;justify-content:center}}.header-wrapper .header-menu{list-style:none;padding:0;display:flex;min-height:80px;align-items:center;margin:0}.header-wrapper .header-menu .header-item{margin-right:20px;cursor:pointer;display:flex;min-height:80px;align-items:center;box-sizing:border-box;border-bottom:4px solid transparent;font-family:\"GillSans500\";outline:none;text-align:center}.header-wrapper .header-menu .header-item.active{border-bottom:4px solid #202967;outline:none}.header-wrapper .header-menu .header-item.disabled{color:#9999;pointer-events:none}.header-wrapper .header-menu .header-item:focus{outline:none}@media only screen and (max-width: 980px){.header-wrapper{flex-wrap:wrap;justify-content:space-between}.header-wrapper .header-info{width:100%;display:flex;justify-content:space-between;align-items:center;padding-top:10px;padding-right:10px}}@media only screen and (max-width: 980px) and (max-width: 540px){.header-wrapper .header-info{flex-wrap:wrap}}@media only screen and (max-width: 980px){.header-wrapper .header-menu{justify-content:center;display:flex;width:100%;margin:0}}\n"]
            }]
    }], function () { return []; }, { user: [{
            type: Input
        }], menuItems: [{
            type: Input
        }], backButtonAction: [{
            type: Output
        }], informationUserAction: [{
            type: Output
        }], navigationAction: [{
            type: Output
        }] }); })();

class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: HeaderModule });
HeaderModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(HeaderModule, [{
        type: NgModule,
        args: [{
                declarations: [HeaderComponent],
                imports: [CommonModule],
                exports: [HeaderComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(HeaderModule, { declarations: function () { return [HeaderComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [HeaderComponent]; } }); })();

class ProgressBarComponent {
    constructor() { }
    ngOnInit() { }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ProgressBarComponent, selectors: [["mln-progress-bar"]], inputs: { icon: "icon", deadline: "deadline", time: "time", progressInfo: "progressInfo" }, decls: 11, vars: 4, consts: [[1, "pb-wrapper"], [1, "pb-type"], [1, "pb-img", "material-icons-outlined"], [1, "pb-deadline"], [1, "pb-time"], [1, "pb-bar-info-wrapper"], ["class", "pb-bar-info-item", 4, "ngFor", "ngForOf"], [1, "pb-bar-info-item"], [1, "pb-bar"], ["mode", "determinate", 3, "value"], [1, "pb-info"], [1, "pb-amount"], [1, "pb-text"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "mat-icon", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div");
        ɵngcc0.ɵɵelementStart(5, "div", 3);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 4);
        ɵngcc0.ɵɵtext(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 5);
        ɵngcc0.ɵɵtemplate(10, ProgressBarComponent_div_10_Template, 8, 3, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.icon);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.deadline, " ");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.time, " ");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.progressInfo);
    } }, directives: [ɵngcc3.MatIcon, ɵngcc1.NgForOf, ɵngcc4.MatProgressBar], styles: [".pb-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;border-radius:5px;min-height:110px;border:1px solid lightgray;background:white}.pb-wrapper[_ngcontent-%COMP%]   .pb-type[_ngcontent-%COMP%]{flex-wrap:wrap;width:25%;padding-left:40px;box-sizing:border-box;display:flex;align-items:center}@media only screen and (max-width: 980px){.pb-wrapper[_ngcontent-%COMP%]   .pb-type[_ngcontent-%COMP%]{width:30%}}@media only screen and (max-width: 720px){.pb-wrapper[_ngcontent-%COMP%]   .pb-type[_ngcontent-%COMP%]{width:100%;padding-left:10px}}.pb-wrapper[_ngcontent-%COMP%]   .pb-type[_ngcontent-%COMP%]   .pb-img[_ngcontent-%COMP%]{margin-right:20px;display:inline-block;background-repeat:no-repeat;background-size:cover;width:30px;height:30px;font-size:35px;top:-3px;position:relative}.pb-wrapper[_ngcontent-%COMP%]   .pb-type[_ngcontent-%COMP%]   .pb-deadline[_ngcontent-%COMP%]{font-family:\"RobotoBold\";font-size:13px}.pb-wrapper[_ngcontent-%COMP%]   .pb-type[_ngcontent-%COMP%]   .pb-time[_ngcontent-%COMP%]{font-family:\"Roboto\";font-size:13px}.pb-wrapper[_ngcontent-%COMP%]   .pb-bar-info-wrapper[_ngcontent-%COMP%]{width:75%;display:flex;align-items:center;box-sizing:border-box;flex-wrap:wrap}@media only screen and (max-width: 980px){.pb-wrapper[_ngcontent-%COMP%]   .pb-bar-info-wrapper[_ngcontent-%COMP%]{width:70%}}@media only screen and (max-width: 720px){.pb-wrapper[_ngcontent-%COMP%]   .pb-bar-info-wrapper[_ngcontent-%COMP%]{width:100%;margin:0 10px}}.pb-wrapper[_ngcontent-%COMP%]   .pb-bar-info-wrapper[_ngcontent-%COMP%]   .pb-bar-info-item[_ngcontent-%COMP%]{display:flex;align-items:center;box-sizing:border-box;width:100%;padding:2px 0}.pb-wrapper[_ngcontent-%COMP%]   .pb-bar-info-wrapper[_ngcontent-%COMP%]   .pb-bar-info-item[_ngcontent-%COMP%]   .pb-bar[_ngcontent-%COMP%]{width:80%;box-sizing:border-box;padding-right:5px}.pb-wrapper[_ngcontent-%COMP%]   .pb-bar-info-wrapper[_ngcontent-%COMP%]   .pb-bar-info-item[_ngcontent-%COMP%]   .pb-info[_ngcontent-%COMP%]{text-align:left;padding:0 5px 0 25px;box-sizing:border-box}.pb-wrapper[_ngcontent-%COMP%]   .pb-bar-info-wrapper[_ngcontent-%COMP%]   .pb-bar-info-item[_ngcontent-%COMP%]   .pb-info[_ngcontent-%COMP%]   .pb-amount[_ngcontent-%COMP%]{font-family:\"RobotoBold\"}.pb-wrapper[_ngcontent-%COMP%]   .pb-bar-info-wrapper[_ngcontent-%COMP%]   .pb-bar-info-item[_ngcontent-%COMP%]   .pb-info[_ngcontent-%COMP%]   .pb-text[_ngcontent-%COMP%]{font-size:11px;text-transform:uppercase}"] });
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    icon: [{ type: Input }],
    deadline: [{ type: Input }],
    time: [{ type: Input }],
    progressInfo: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ProgressBarComponent, [{
        type: Component,
        args: [{
                selector: 'mln-progress-bar',
                template: "<div class=\"pb-wrapper\">\r\n    <div class=\"pb-type\">\r\n        <mat-icon class=\"pb-img material-icons-outlined\">{{icon}}</mat-icon>\r\n        <div>\r\n            <div class=\"pb-deadline\">\r\n                {{ deadline }}\r\n            </div>\r\n            <div class=\"pb-time\">\r\n                {{ time }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"pb-bar-info-wrapper\">\r\n        <div class=\"pb-bar-info-item\" *ngFor=\"let progress of progressInfo\">\r\n            <div class=\"pb-bar\">\r\n                <mat-progress-bar mode=\"determinate\" value=\"{{ progress.amount }}\"></mat-progress-bar>\r\n            </div>\r\n            <div class=\"pb-info\">\r\n                <div class=\"pb-amount\">{{ progress.amount }} %</div>\r\n                <div class=\"pb-text\">\r\n                    {{ progress.text }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [".pb-wrapper{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;border-radius:5px;min-height:110px;border:1px solid lightgray;background:white}.pb-wrapper .pb-type{flex-wrap:wrap;width:25%;padding-left:40px;box-sizing:border-box;display:flex;align-items:center}@media only screen and (max-width: 980px){.pb-wrapper .pb-type{width:30%}}@media only screen and (max-width: 720px){.pb-wrapper .pb-type{width:100%;padding-left:10px}}.pb-wrapper .pb-type .pb-img{margin-right:20px;display:inline-block;background-repeat:no-repeat;background-size:cover;width:30px;height:30px;font-size:35px;top:-3px;position:relative}.pb-wrapper .pb-type .pb-deadline{font-family:\"RobotoBold\";font-size:13px}.pb-wrapper .pb-type .pb-time{font-family:\"Roboto\";font-size:13px}.pb-wrapper .pb-bar-info-wrapper{width:75%;display:flex;align-items:center;box-sizing:border-box;flex-wrap:wrap}@media only screen and (max-width: 980px){.pb-wrapper .pb-bar-info-wrapper{width:70%}}@media only screen and (max-width: 720px){.pb-wrapper .pb-bar-info-wrapper{width:100%;margin:0 10px}}.pb-wrapper .pb-bar-info-wrapper .pb-bar-info-item{display:flex;align-items:center;box-sizing:border-box;width:100%;padding:2px 0}.pb-wrapper .pb-bar-info-wrapper .pb-bar-info-item .pb-bar{width:80%;box-sizing:border-box;padding-right:5px}.pb-wrapper .pb-bar-info-wrapper .pb-bar-info-item .pb-info{text-align:left;padding:0 5px 0 25px;box-sizing:border-box}.pb-wrapper .pb-bar-info-wrapper .pb-bar-info-item .pb-info .pb-amount{font-family:\"RobotoBold\"}.pb-wrapper .pb-bar-info-wrapper .pb-bar-info-item .pb-info .pb-text{font-size:11px;text-transform:uppercase}\n"]
            }]
    }], function () { return []; }, { icon: [{
            type: Input
        }], deadline: [{
            type: Input
        }], time: [{
            type: Input
        }], progressInfo: [{
            type: Input
        }] }); })();

class ProgressBarModule {
}
ProgressBarModule.ɵfac = function ProgressBarModule_Factory(t) { return new (t || ProgressBarModule)(); };
ProgressBarModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: ProgressBarModule });
ProgressBarModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, MatProgressBarModule, MatIconModule], MatProgressBarModule, MatIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ProgressBarModule, [{
        type: NgModule,
        args: [{
                declarations: [ProgressBarComponent],
                imports: [CommonModule, MatProgressBarModule, MatIconModule],
                exports: [ProgressBarComponent, MatProgressBarModule, MatIconModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ProgressBarModule, { declarations: function () { return [ProgressBarComponent]; }, imports: function () { return [CommonModule, MatProgressBarModule, MatIconModule]; }, exports: function () { return [ProgressBarComponent, MatProgressBarModule, MatIconModule]; } }); })();

const OPTION_EDIT = 1;
const OPTION_CONSULT = 2;
const OPTION_COPY = 3;
const OPTION_CANCEL = 4;
const OPTION_PDF_PROPOSAL = 5;
const OPTION_PDF_RECORDS = 6;
const datatableActionsMock = [
    {
        id: OPTION_EDIT,
        name: 'Editar',
        icon: 'edit',
    },
    {
        id: OPTION_CONSULT,
        name: 'Consultar',
        icon: 'search',
        disabled: true,
    },
    {
        id: OPTION_COPY,
        name: 'Copiar',
        icon: 'content_copy',
    },
    {
        id: OPTION_CANCEL,
        name: 'Anular',
        icon: 'delete',
    },
    {
        id: OPTION_PDF_PROPOSAL,
        name: 'PDF Propuesta',
        icon: 'insert_drive_file',
        disabled: true,
    },
    {
        id: OPTION_PDF_RECORDS,
        name: 'PDF Fichas',
        icon: 'insert_drive_file',
        disabled: true,
    },
];

class SelectComponent {
    constructor() {
        this.settings = {
            firstOption: 'Ninguna',
            title: 'Ver opciones',
        };
        this.listItem = datatableActionsMock;
        this.actionSelected = new EventEmitter();
    }
    ngOnInit() { }
    onActionChange(seletecValue) {
        this.actionSelected.emit(this.listItem[seletecValue]);
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["mln-select"]], inputs: { settings: "settings", listItem: "listItem" }, outputs: { actionSelected: "actionSelected" }, decls: 8, vars: 4, consts: [["appearance", "outline", 1, "custome-select"], [4, "ngIf"], [3, "selectionChange"], ["options", ""], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mat-form-field", 0);
        ɵngcc0.ɵɵtemplate(1, SelectComponent_mat_label_1_Template, 2, 1, "mat-label", 1);
        ɵngcc0.ɵɵelementStart(2, "mat-select", 2, 3);
        ɵngcc0.ɵɵlistener("selectionChange", function SelectComponent_Template_mat_select_selectionChange_2_listener($event) { return ctx.onActionChange($event.value); });
        ɵngcc0.ɵɵtemplate(4, SelectComponent_mat_option_4_Template, 2, 1, "mat-option", 1);
        ɵngcc0.ɵɵelementStart(5, "mat-select-trigger");
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, SelectComponent_mat_option_7_Template, 3, 5, "mat-option", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.settings == null ? null : ctx.settings.title);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.settings == null ? null : ctx.settings.firstOption);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.listItem[_r1.value] == null ? null : ctx.listItem[_r1.value].name, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.listItem);
    } }, directives: [ɵngcc5.MatFormField, ɵngcc1.NgIf, ɵngcc6.MatSelect, ɵngcc6.MatSelectTrigger, ɵngcc1.NgForOf, ɵngcc5.MatLabel, ɵngcc7.MatOption, ɵngcc3.MatIcon], styles: [""] });
SelectComponent.ctorParameters = () => [];
SelectComponent.propDecorators = {
    settings: [{ type: Input }],
    listItem: [{ type: Input }],
    actionSelected: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{
                selector: 'mln-select',
                template: "<mat-form-field class=\"custome-select\" appearance=\"outline\">\r\n    <mat-label *ngIf=\"settings?.title\">{{ settings?.title }}</mat-label>\r\n    <mat-select (selectionChange)=\"onActionChange($event.value)\" #options>\r\n        <mat-option *ngIf=\"settings?.firstOption\">{{ settings?.firstOption }}</mat-option>\r\n        <mat-select-trigger>\r\n            {{listItem[options.value]?.name}}\r\n        </mat-select-trigger>\r\n        <mat-option *ngFor=\"let action of listItem; let i = index\" [value]=\"i\" [disabled]=\"action.disabled\" [attr.data-index]=\"i\">\r\n            <mat-icon *ngIf=\"action.icon\">{{action?.icon}}</mat-icon> {{ action.name }}\r\n        </mat-option>\r\n    </mat-select>\r\n</mat-form-field>",
                styles: [""]
            }]
    }], function () { return []; }, { settings: [{
            type: Input
        }], listItem: [{
            type: Input
        }], actionSelected: [{
            type: Output
        }] }); })();

class SelectModule {
}
SelectModule.ɵfac = function SelectModule_Factory(t) { return new (t || SelectModule)(); };
SelectModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: SelectModule });
SelectModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, MatFormFieldModule, MatSelectModule, MatIconModule], MatFormFieldModule,
        MatSelectModule,
        MatIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SelectModule, [{
        type: NgModule,
        args: [{
                declarations: [SelectComponent],
                imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatIconModule],
                exports: [
                    SelectComponent,
                    MatFormFieldModule,
                    MatSelectModule,
                    MatIconModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SelectModule, { declarations: function () { return [SelectComponent]; }, imports: function () { return [CommonModule, MatFormFieldModule, MatSelectModule, MatIconModule]; }, exports: function () { return [SelectComponent, MatFormFieldModule,
        MatSelectModule,
        MatIconModule]; } }); })();

class SliderToggleComponent {
    constructor() {
        this.changeToggleAction = new EventEmitter();
        this.statusText = { first: '', second: '' };
    }
    ngOnInit() { }
    changeToggle(status) {
        this.changeToggleAction.emit(status);
    }
}
SliderToggleComponent.ɵfac = function SliderToggleComponent_Factory(t) { return new (t || SliderToggleComponent)(); };
SliderToggleComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: SliderToggleComponent, selectors: [["mln-slider-toggle"]], inputs: { statusText: "statusText", label: "label" }, outputs: { changeToggleAction: "changeToggleAction" }, decls: 6, vars: 3, consts: [[1, "sliderToggle"], [3, "fontWeight", 4, "ngIf"], [1, "mat-slide-toggle", 3, "change"], ["toggle", ""]], template: function SliderToggleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, SliderToggleComponent_mat_label_1_Template, 2, 3, "mat-label", 1);
        ɵngcc0.ɵɵelementStart(2, "mat-slide-toggle", 2, 3);
        ɵngcc0.ɵɵlistener("change", function SliderToggleComponent_Template_mat_slide_toggle_change_2_listener($event) { return ctx.changeToggle($event.checked); });
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, SliderToggleComponent_mat_label_5_Template, 2, 3, "mat-label", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.statusText);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1("", ctx.label, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.statusText);
    } }, directives: [ɵngcc1.NgIf, ɵngcc8.MatSlideToggle, ɵngcc5.MatLabel], styles: [".sliderToggle[_ngcontent-%COMP%]{display:flex;align-items:center}.sliderToggle[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%]{margin:0 8px}"] });
SliderToggleComponent.ctorParameters = () => [];
SliderToggleComponent.propDecorators = {
    changeToggleAction: [{ type: Output }],
    statusText: [{ type: Input }],
    label: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderToggleComponent, [{
        type: Component,
        args: [{
                selector: 'mln-slider-toggle',
                template: "<div class=\"sliderToggle\">\r\n    <mat-label [style.fontWeight]=\"!toggle.checked ? '700' : '' \" *ngIf=\"statusText\">{{ statusText?.first }}</mat-label>\r\n    <mat-slide-toggle #toggle class=\"mat-slide-toggle\" (change)=\"changeToggle($event.checked)\">{{ label }}\r\n    </mat-slide-toggle>\r\n    <mat-label [style.fontWeight]=\"toggle.checked ? '700' : '' \" *ngIf=\"statusText\"> {{ statusText?.second }}</mat-label>\r\n</div>",
                styles: [".sliderToggle{display:flex;align-items:center}.sliderToggle .mat-slide-toggle{margin:0 8px}\n"]
            }]
    }], function () { return []; }, { changeToggleAction: [{
            type: Output
        }], statusText: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();

class SliderToggleModule {
}
SliderToggleModule.ɵfac = function SliderToggleModule_Factory(t) { return new (t || SliderToggleModule)(); };
SliderToggleModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: SliderToggleModule });
SliderToggleModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, MatSlideToggleModule, MatFormFieldModule], MatSlideToggleModule, MatFormFieldModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderToggleModule, [{
        type: NgModule,
        args: [{
                declarations: [SliderToggleComponent],
                imports: [CommonModule, MatSlideToggleModule, MatFormFieldModule],
                exports: [SliderToggleComponent, MatSlideToggleModule, MatFormFieldModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SliderToggleModule, { declarations: function () { return [SliderToggleComponent]; }, imports: function () { return [CommonModule, MatSlideToggleModule, MatFormFieldModule]; }, exports: function () { return [SliderToggleComponent, MatSlideToggleModule, MatFormFieldModule]; } }); })();

class CheckBoxComponent {
    constructor() {
        // @ViewChild('checkmark') public checkmark!: ElementRef;
        this.changeChkAction = new EventEmitter();
    }
    set settings(settings) {
        /* setTimeout(() => {
          this.checkmark.nativeElement.style.border = '2px solid ' + settings.color;
          this.checkmark.nativeElement.style.backgroundColor = settings.color;
        }, 120); */
        this.settings$ = settings;
    }
    get settings() {
        return this.settings$;
    }
    ngOnInit() { }
    ngAfterViewInit() { }
    changeChk(status, callback) {
        callback.next(status);
    }
}
CheckBoxComponent.ɵfac = function CheckBoxComponent_Factory(t) { return new (t || CheckBoxComponent)(); };
CheckBoxComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: CheckBoxComponent, selectors: [["mln-check-box"]], inputs: { settings: "settings" }, outputs: { changeChkAction: "changeChkAction" }, decls: 5, vars: 6, consts: [[1, "container"], ["type", "checkbox", 3, "checked", "change"], [1, "checkmark", 3, "ngStyle"], [1, "label"]], template: function CheckBoxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "label", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1);
        ɵngcc0.ɵɵlistener("change", function CheckBoxComponent_Template_input_change_1_listener($event) { return ctx.changeChk($event.target.checked, ctx.settings == null ? null : ctx.settings.callBack); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(2, "span", 2);
        ɵngcc0.ɵɵelementStart(3, "span", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("checked", ctx.settings == null ? null : ctx.settings.checked);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(3, _c2, "2px solid " + ctx.settings.color, ctx.settings.color));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.settings == null ? null : ctx.settings.title);
    } }, directives: [ɵngcc1.NgStyle], styles: [".container[_ngcontent-%COMP%]{display:block;position:relative;padding-left:30px;margin-bottom:12px;cursor:pointer;font-size:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:\"Roboto\";color:#afbfc6}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark[_ngcontent-%COMP%]{position:absolute;top:-2px;left:0;height:18px;width:18px;background-color:#fff;border-radius:50%;border:2px solid #2f9ad3}.container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{background-color:#ccc}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background-color:#2f9ad3}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .label[_ngcontent-%COMP%]{font-family:\"RobotoBold\";color:#9b9b9b}.checkmark[_ngcontent-%COMP%]:after{content:\"\";position:absolute;display:none}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block}.container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{left:6px;top:2px;width:4px;height:10px;border:solid #ffffff;border-width:0 2px 2px 0;transform:rotate(45deg)}"] });
CheckBoxComponent.ctorParameters = () => [];
CheckBoxComponent.propDecorators = {
    changeChkAction: [{ type: Output }],
    settings: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CheckBoxComponent, [{
        type: Component,
        args: [{
                selector: 'mln-check-box',
                template: "<label class=\"container\">\r\n  <input type=\"checkbox\" [checked]=\"settings?.checked\" (change)=\"changeChk($event.target.checked, settings?.callBack)\">\r\n  <span class=\"checkmark\" [ngStyle]=\"{'border': ('2px solid ' + settings.color), 'background-color': settings.color}\"></span>\r\n  <!-- <mat-icon class=\"checkmark\" [ngStyle]=\"{'color': '#2fb8de'}\" aria-hidden=\"false\" aria-label=\"icon\" matSufix>\r\n    check_circle\r\n  </mat-icon> -->\r\n  <span class=\"label\">{{ settings?.title }}</span>\r\n</label>",
                styles: [".container{display:block;position:relative;padding-left:30px;margin-bottom:12px;cursor:pointer;font-size:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:\"Roboto\";color:#afbfc6}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:-2px;left:0;height:18px;width:18px;background-color:#fff;border-radius:50%;border:2px solid #2f9ad3}.container:hover input~.checkmark{background-color:#ccc}.container input:checked~.checkmark{background-color:#2f9ad3}.container input:checked~.label{font-family:\"RobotoBold\";color:#9b9b9b}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{left:6px;top:2px;width:4px;height:10px;border:solid #ffffff;border-width:0 2px 2px 0;transform:rotate(45deg)}\n"]
            }]
    }], function () { return []; }, { changeChkAction: [{
            type: Output
        }], settings: [{
            type: Input
        }] }); })();

class CheckBoxModule {
}
CheckBoxModule.ɵfac = function CheckBoxModule_Factory(t) { return new (t || CheckBoxModule)(); };
CheckBoxModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: CheckBoxModule });
CheckBoxModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, MatIconModule], MatIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CheckBoxModule, [{
        type: NgModule,
        args: [{
                declarations: [CheckBoxComponent],
                imports: [CommonModule, MatIconModule],
                exports: [CheckBoxComponent, MatIconModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CheckBoxModule, { declarations: function () { return [CheckBoxComponent]; }, imports: function () { return [CommonModule, MatIconModule]; }, exports: function () { return [CheckBoxComponent, MatIconModule]; } }); })();

class CustomerInfoComponent {
    constructor() {
        this.user = {
            name: 'Jose',
            lastname: 'Manuel Perez',
            type: 'equilibrado',
            available: true,
            patrimony: 52416362,
        };
        this.textRow = 'Patrimonio';
        this.rightButtonSettings = { text: 'Ver' };
        this.userProposal = new EventEmitter();
        this.currency = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
        });
    }
    ngOnInit() {
        this.initials =
            this.user.name[0].toUpperCase() + this.user.lastname[0].toUpperCase();
    }
    goToUserProposal() {
        if (!this.proposalSelected || !this.user.available) {
            return;
        }
        this.userProposal.emit({
            user: this.user,
            proposal: this.proposalSelected,
        });
    }
}
CustomerInfoComponent.ɵfac = function CustomerInfoComponent_Factory(t) { return new (t || CustomerInfoComponent)(); };
CustomerInfoComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: CustomerInfoComponent, selectors: [["mln-customer-info"]], viewQuery: function CustomerInfoComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(SelectComponent, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.customSelect = _t.first);
    } }, inputs: { user: "user", textRow: "textRow", rightButtonSettings: "rightButtonSettings", settingsSelect: "settingsSelect" }, outputs: { userProposal: "userProposal" }, decls: 26, vars: 13, consts: [[1, "customer-wrapper"], [1, "customer-head"], [1, "customer-left"], [1, "customer-initial"], [1, "customer-name"], [1, "customer-nif"], [1, "customer-right"], [1, "customer-state"], [3, "ngClass"], [1, "customer-footer"], ["fxLayout", "row", 1, "customer-amount"], ["matPrefix", "", "color", "primary"], [4, "ngIf"], ["class", "", 4, "ngIf"], [1, "customer-go", 3, "click"], ["matSufix", ""], [1, "opaque"], [1, ""], [3, "settings", "listItem", "actionSelected"], ["customSelect", ""]], template: function CustomerInfoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 5);
        ɵngcc0.ɵɵtext(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 6);
        ɵngcc0.ɵɵelementStart(10, "div", 7);
        ɵngcc0.ɵɵtext(11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(12, "div", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "div", 9);
        ɵngcc0.ɵɵelementStart(14, "div", 2);
        ɵngcc0.ɵɵelementStart(15, "div", 10);
        ɵngcc0.ɵɵelementStart(16, "mat-icon", 11);
        ɵngcc0.ɵɵtext(17, "check_circle");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(18, CustomerInfoComponent_div_18_Template, 5, 2, "div", 12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(19, CustomerInfoComponent_div_19_Template, 3, 2, "div", 13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(20, "div", 6);
        ɵngcc0.ɵɵelementStart(21, "div", 14);
        ɵngcc0.ɵɵlistener("click", function CustomerInfoComponent_Template_div_click_21_listener() { return ctx.goToUserProposal(); });
        ɵngcc0.ɵɵelementStart(22, "span");
        ɵngcc0.ɵɵtext(23);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(24, "mat-icon", 15);
        ɵngcc0.ɵɵtext(25, "navigate_next");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵtextInterpolate(ctx.initials);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate2("", ctx.user == null ? null : ctx.user.name, " ", ctx.user == null ? null : ctx.user.lastname, "");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.user == null ? null : ctx.user.nif, " ");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.user == null ? null : ctx.user.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.user.available ? "customer-icon" : "customer-icon");
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngIf", ctx.user == null ? null : ctx.user.patrimony);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.settingsSelect);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵclassProp("disabled", !ctx.user.available);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.rightButtonSettings == null ? null : ctx.rightButtonSettings.text);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("disabled", !ctx.user.available);
    } }, directives: [ɵngcc1.NgClass, ɵngcc3.MatIcon, ɵngcc5.MatPrefix, ɵngcc1.NgIf, SelectComponent], styles: [".customer-wrapper[_ngcontent-%COMP%]{width:100%;margin:10px 0;box-sizing:border-box;box-shadow:0 0 7px #00000040}.customer-wrapper[_ngcontent-%COMP%]   .customer-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;min-height:45px;padding:5px 20px}@media only screen and (max-width: 720px){.customer-wrapper[_ngcontent-%COMP%]   .customer-head[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:center}}.customer-wrapper[_ngcontent-%COMP%]   .customer-head[_ngcontent-%COMP%]   .customer-left[_ngcontent-%COMP%]{display:flex;align-items:center}.customer-wrapper[_ngcontent-%COMP%]   .customer-head[_ngcontent-%COMP%]   .customer-left[_ngcontent-%COMP%]   .customer-initial[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;background-color:#f1f5fc;display:flex;align-items:center;justify-content:center;color:#5cafdd;text-transform:uppercase;font-family:\"Roboto\";font-size:16px}.customer-wrapper[_ngcontent-%COMP%]   .customer-head[_ngcontent-%COMP%]   .customer-left[_ngcontent-%COMP%]   .customer-name[_ngcontent-%COMP%]{color:#202967;font-family:\"GillSansBold\";font-size:16px;padding-left:20px}.customer-wrapper[_ngcontent-%COMP%]   .customer-head[_ngcontent-%COMP%]   .customer-left[_ngcontent-%COMP%]   .customer-nif[_ngcontent-%COMP%]{color:#202967;font-family:\"GillSansBold\";font-size:16px;padding-left:20px}.customer-wrapper[_ngcontent-%COMP%]   .customer-head[_ngcontent-%COMP%]   .customer-right[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.customer-wrapper[_ngcontent-%COMP%]   .customer-head[_ngcontent-%COMP%]   .customer-right[_ngcontent-%COMP%]   .customer-state[_ngcontent-%COMP%]{border-right:2px solid lightgray;padding-right:20px;margin-right:20px;font-family:\"RobotoBold\"}.customer-wrapper[_ngcontent-%COMP%]   .customer-head[_ngcontent-%COMP%]   .customer-right[_ngcontent-%COMP%]   .customer-icon[_ngcontent-%COMP%]{font-family:\"Roboto\";padding-right:10px;display:inline-block;background-image:url(/assets/img/cliente-real.png);background-repeat:no-repeat;background-size:contain;width:30px;height:28px}.customer-wrapper[_ngcontent-%COMP%]   .customer-footer[_ngcontent-%COMP%]{background-color:#f1f5fc;padding:5px 20px;min-height:45px;display:flex;justify-content:space-between;align-items:center}@media only screen and (max-width: 720px){.customer-wrapper[_ngcontent-%COMP%]   .customer-footer[_ngcontent-%COMP%]{flex-wrap:wrap;flex-direction:row-reverse}}.customer-wrapper[_ngcontent-%COMP%]   .customer-footer[_ngcontent-%COMP%]   .customer-right[_ngcontent-%COMP%]   .customer-go[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;font-family:\"Roboto\"}.customer-wrapper[_ngcontent-%COMP%]   .customer-footer[_ngcontent-%COMP%]   .customer-right[_ngcontent-%COMP%]   .customer-go[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{color:#bcbfd1}.customer-wrapper[_ngcontent-%COMP%]   .customer-footer[_ngcontent-%COMP%]   .customer-left[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}@media only screen and (max-width: 720px){.customer-wrapper[_ngcontent-%COMP%]   .customer-footer[_ngcontent-%COMP%]   .customer-left[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:center}}.customer-wrapper[_ngcontent-%COMP%]   .customer-footer[_ngcontent-%COMP%]   .customer-left[_ngcontent-%COMP%]   .customer-amount[_ngcontent-%COMP%]{color:#4e5c63;font-family:\"RobotoBold\";font-size:14px;padding-right:20px;display:contents}.customer-wrapper[_ngcontent-%COMP%]   .customer-footer[_ngcontent-%COMP%]   .customer-left[_ngcontent-%COMP%]   .customer-amount[_ngcontent-%COMP%]   .opaque[_ngcontent-%COMP%]{color:#00000061}.customer-wrapper[_ngcontent-%COMP%]   .customer-footer[_ngcontent-%COMP%]   .customer-left[_ngcontent-%COMP%]   .customer-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}.customer-wrapper[_ngcontent-%COMP%]   .customer-footer[_ngcontent-%COMP%]   .customer-left[_ngcontent-%COMP%]   .customer-amount[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{padding-right:10px}"] });
CustomerInfoComponent.ctorParameters = () => [];
CustomerInfoComponent.propDecorators = {
    customSelect: [{ type: ViewChild, args: [SelectComponent, { static: false },] }],
    user: [{ type: Input }],
    settingsSelect: [{ type: Input }],
    textRow: [{ type: Input }],
    rightButtonSettings: [{ type: Input }],
    userProposal: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CustomerInfoComponent, [{
        type: Component,
        args: [{
                selector: 'mln-customer-info',
                template: "<div class=\"customer-wrapper\">\r\n    <div class=\"customer-head\">\r\n        <div class=\"customer-left\">\r\n            <div class=\"customer-initial\">{{initials}}</div>\r\n            <div class=\"customer-name\">{{ user?.name }} {{ user?.lastname }}</div>\r\n            <div class=\"customer-nif\"> {{user?.nif }} </div>\r\n        </div>\r\n        <div class=\"customer-right\">\r\n            <div class=\"customer-state\">{{ user?.type }}</div>\r\n            <div [ngClass]=\"user.available ? 'customer-icon' : 'customer-icon'\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"customer-footer\">\r\n        <div class=\"customer-left\">\r\n            <div class=\"customer-amount\" fxLayout=\"row\">\r\n                <mat-icon matPrefix color=\"primary\">check_circle</mat-icon>\r\n                <div *ngIf=\"user?.patrimony\">\r\n                    <span>{{ textRow }}</span>\r\n                    <span class=\"opaque\">{{ currency.format(user?.patrimony) }}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"\" *ngIf=\"settingsSelect\">\r\n                <mln-select #customSelect [settings]=\"settingsSelect\" [listItem]=\"settingsSelect?.listItemSelect\" (actionSelected)=\"proposalSelected = $event.name\"></mln-select>\r\n            </div>\r\n        </div>\r\n        <div class=\"customer-right\">\r\n            <div class=\"customer-go\" (click)=\"goToUserProposal()\">\r\n                <span [class.disabled]=\"!user.available\">{{ rightButtonSettings?.text }}</span>\r\n                <mat-icon matSufix [class.disabled]=\"!user.available\">navigate_next</mat-icon>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [".customer-wrapper{width:100%;margin:10px 0;box-sizing:border-box;box-shadow:0 0 7px #00000040}.customer-wrapper .customer-head{display:flex;justify-content:space-between;min-height:45px;padding:5px 20px}@media only screen and (max-width: 720px){.customer-wrapper .customer-head{flex-wrap:wrap;justify-content:center}}.customer-wrapper .customer-head .customer-left{display:flex;align-items:center}.customer-wrapper .customer-head .customer-left .customer-initial{width:40px;height:40px;border-radius:50%;background-color:#f1f5fc;display:flex;align-items:center;justify-content:center;color:#5cafdd;text-transform:uppercase;font-family:\"Roboto\";font-size:16px}.customer-wrapper .customer-head .customer-left .customer-name{color:#202967;font-family:\"GillSansBold\";font-size:16px;padding-left:20px}.customer-wrapper .customer-head .customer-left .customer-nif{color:#202967;font-family:\"GillSansBold\";font-size:16px;padding-left:20px}.customer-wrapper .customer-head .customer-right{display:flex;justify-content:space-between;align-items:center}.customer-wrapper .customer-head .customer-right .customer-state{border-right:2px solid lightgray;padding-right:20px;margin-right:20px;font-family:\"RobotoBold\"}.customer-wrapper .customer-head .customer-right .customer-icon{font-family:\"Roboto\";padding-right:10px;display:inline-block;background-image:url(/assets/img/cliente-real.png);background-repeat:no-repeat;background-size:contain;width:30px;height:28px}.customer-wrapper .customer-footer{background-color:#f1f5fc;padding:5px 20px;min-height:45px;display:flex;justify-content:space-between;align-items:center}@media only screen and (max-width: 720px){.customer-wrapper .customer-footer{flex-wrap:wrap;flex-direction:row-reverse}}.customer-wrapper .customer-footer .customer-right .customer-go{display:flex;align-items:center;cursor:pointer;font-family:\"Roboto\"}.customer-wrapper .customer-footer .customer-right .customer-go .disabled{color:#bcbfd1}.customer-wrapper .customer-footer .customer-left{display:flex;justify-content:space-between;align-items:center}@media only screen and (max-width: 720px){.customer-wrapper .customer-footer .customer-left{flex-wrap:wrap;justify-content:center}}.customer-wrapper .customer-footer .customer-left .customer-amount{color:#4e5c63;font-family:\"RobotoBold\";font-size:14px;padding-right:20px;display:contents}.customer-wrapper .customer-footer .customer-left .customer-amount .opaque{color:#00000061}.customer-wrapper .customer-footer .customer-left .customer-amount span{padding-right:10px}.customer-wrapper .customer-footer .customer-left .customer-amount>:first-child{padding-right:10px}\n"]
            }]
    }], function () { return []; }, { user: [{
            type: Input
        }], textRow: [{
            type: Input
        }], rightButtonSettings: [{
            type: Input
        }], userProposal: [{
            type: Output
        }], customSelect: [{
            type: ViewChild,
            args: [SelectComponent, { static: false }]
        }], settingsSelect: [{
            type: Input
        }] }); })();

class CustomerInfoModule {
}
CustomerInfoModule.ɵfac = function CustomerInfoModule_Factory(t) { return new (t || CustomerInfoModule)(); };
CustomerInfoModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: CustomerInfoModule });
CustomerInfoModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [
        {
            provide: LOCALE_ID,
            useValue: 'es-ES'
        },
    ], imports: [[CommonModule, FormsModule, MatIconModule, SelectModule], FormsModule, MatIconModule, SelectModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CustomerInfoModule, [{
        type: NgModule,
        args: [{
                declarations: [CustomerInfoComponent],
                imports: [CommonModule, FormsModule, MatIconModule, SelectModule],
                exports: [CustomerInfoComponent, FormsModule, MatIconModule, SelectModule],
                providers: [
                    {
                        provide: LOCALE_ID,
                        useValue: 'es-ES'
                    },
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CustomerInfoModule, { declarations: function () { return [CustomerInfoComponent]; }, imports: function () { return [CommonModule, FormsModule, MatIconModule, SelectModule]; }, exports: function () { return [CustomerInfoComponent, FormsModule, MatIconModule, SelectModule]; } }); })();

class RadioButtonListComponent {
    constructor() {
        this.actionRadioButton = new EventEmitter();
    }
    ngOnInit() { }
    changeDetectionRadio(event) {
        var _a, _b, _c, _d, _e;
        const text = (_c = (_b = (_a = event === null || event === void 0 ? void 0 : event.source) === null || _a === void 0 ? void 0 : _a._elementRef) === null || _b === void 0 ? void 0 : _b.nativeElement) === null || _c === void 0 ? void 0 : _c.textContent.trim();
        const element = (_e = (_d = event === null || event === void 0 ? void 0 : event.source) === null || _d === void 0 ? void 0 : _d._elementRef) === null || _e === void 0 ? void 0 : _e.nativeElement;
        const value = event === null || event === void 0 ? void 0 : event.value;
        this.actionRadioButton.emit({ text, element, value });
    }
}
RadioButtonListComponent.ɵfac = function RadioButtonListComponent_Factory(t) { return new (t || RadioButtonListComponent)(); };
RadioButtonListComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: RadioButtonListComponent, selectors: [["mln-radio-button-list"]], inputs: { textLabel: "textLabel", list: "list", vertical: "vertical" }, outputs: { actionRadioButton: "actionRadioButton" }, decls: 2, vars: 2, consts: [["id", "radio-group-label", "class", "radio-group-label", 4, "ngIf"], ["aria-labelledby", "radio-group-label", "class", "radio-group", 3, "ngClass", "change", 4, "ngIf"], ["id", "radio-group-label", 1, "radio-group-label"], ["aria-labelledby", "radio-group-label", 1, "radio-group", 3, "ngClass", "change"], ["class", "radio-button", 3, "value", "checked", 4, "ngFor", "ngForOf"], [1, "radio-button", 3, "value", "checked"]], template: function RadioButtonListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, RadioButtonListComponent_label_0_Template, 2, 1, "label", 0);
        ɵngcc0.ɵɵtemplate(1, RadioButtonListComponent_mat_radio_group_1_Template, 2, 2, "mat-radio-group", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.textLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.list && ctx.list.length);
    } }, directives: [ɵngcc1.NgIf, ɵngcc9.MatRadioGroup, ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc9.MatRadioButton], styles: [".radio-group[_ngcontent-%COMP%]{margin:15px 0}.radio-group--vertical[_ngcontent-%COMP%]{display:flex;flex-direction:column}.radio-button[_ngcontent-%COMP%]{margin:5px}.radio-group-label[_ngcontent-%COMP%]{font-weight:600;color:#191919;width:100%;display:block}"] });
RadioButtonListComponent.ctorParameters = () => [];
RadioButtonListComponent.propDecorators = {
    actionRadioButton: [{ type: Output }],
    textLabel: [{ type: Input }],
    list: [{ type: Input }],
    vertical: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RadioButtonListComponent, [{
        type: Component,
        args: [{
                selector: 'mln-radio-button-list',
                template: "<label id=\"radio-group-label\" class=\"radio-group-label\" *ngIf=\"textLabel\">{{ textLabel }}</label>\r\n<mat-radio-group *ngIf=\"list && list.length\" aria-labelledby=\"radio-group-label\" class=\"radio-group\" [ngClass]=\"vertical ? 'radio-group--vertical' : ''\" (change)=\"changeDetectionRadio($event)\">\r\n    <mat-radio-button class=\"radio-button\" *ngFor=\"let item of list; let i = index\" [value]=\"i\" [checked]=\"item.checked\">\r\n        {{ item.text }}\r\n    </mat-radio-button>\r\n</mat-radio-group>",
                styles: [".radio-group{margin:15px 0}.radio-group--vertical{display:flex;flex-direction:column}.radio-button{margin:5px}.radio-group-label{font-weight:600;color:#191919;width:100%;display:block}\n"]
            }]
    }], function () { return []; }, { actionRadioButton: [{
            type: Output
        }], textLabel: [{
            type: Input
        }], list: [{
            type: Input
        }], vertical: [{
            type: Input
        }] }); })();

class RadioButtonListModule {
}
RadioButtonListModule.ɵfac = function RadioButtonListModule_Factory(t) { return new (t || RadioButtonListModule)(); };
RadioButtonListModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: RadioButtonListModule });
RadioButtonListModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, MatRadioModule], MatRadioModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RadioButtonListModule, [{
        type: NgModule,
        args: [{
                declarations: [RadioButtonListComponent],
                imports: [CommonModule, MatRadioModule],
                exports: [RadioButtonListComponent, MatRadioModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RadioButtonListModule, { declarations: function () { return [RadioButtonListComponent]; }, imports: function () { return [CommonModule, MatRadioModule]; }, exports: function () { return [RadioButtonListComponent, MatRadioModule]; } }); })();

class SearchInputComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.changes = new EventEmitter();
    }
    ngOnInit() {
        this.formGroupSearch = this.formBuilder.group({ search: [''] });
        this.subscribeToFormFilters();
    }
    subscribeToFormFilters() {
        this.formGroupSearch.valueChanges.subscribe(({ search }) => this.changes.emit(search));
    }
}
SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) { return new (t || SearchInputComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc10.FormBuilder)); };
SearchInputComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: SearchInputComponent, selectors: [["mln-search-input"]], inputs: { settings: "settings", amount: "amount" }, outputs: { changes: "changes" }, decls: 8, vars: 5, consts: [[1, "form-search", 3, "formGroup"], [1, "example-full-width"], ["matPrefix", "", 1, "mr-2"], ["matInput", "", "formControlName", "search", "type", "text", 3, "placeholder"], [4, "ngIf"]], template: function SearchInputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "form", 0);
        ɵngcc0.ɵɵelementStart(1, "mat-form-field", 1);
        ɵngcc0.ɵɵelementStart(2, "mat-label");
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "mat-icon", 2);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(6, "input", 3);
        ɵngcc0.ɵɵtemplate(7, SearchInputComponent_mat_hint_7_Template, 4, 2, "mat-hint", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("formGroup", ctx.formGroupSearch);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.settings == null ? null : ctx.settings.textInputDefault);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.settings == null ? null : ctx.settings.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("placeholder", ctx.settings == null ? null : ctx.settings.textInputDefault);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.amount);
    } }, directives: [ɵngcc10.ɵNgNoValidate, ɵngcc10.NgControlStatusGroup, ɵngcc10.FormGroupDirective, ɵngcc5.MatFormField, ɵngcc5.MatLabel, ɵngcc3.MatIcon, ɵngcc5.MatPrefix, ɵngcc11.MatInput, ɵngcc10.DefaultValueAccessor, ɵngcc10.NgControlStatus, ɵngcc10.FormControlName, ɵngcc1.NgIf, ɵngcc5.MatHint], styles: [".mr-2[_ngcontent-%COMP%]{margin-right:.5rem}.form-search[_ngcontent-%COMP%]{margin:5px}.example-full-width[_ngcontent-%COMP%]{width:100%}"] });
SearchInputComponent.ctorParameters = () => [
    { type: FormBuilder }
];
SearchInputComponent.propDecorators = {
    settings: [{ type: Input }],
    amount: [{ type: Input }],
    changes: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SearchInputComponent, [{
        type: Component,
        args: [{
                selector: 'mln-search-input',
                template: "<form [formGroup]=\"formGroupSearch\" class=\"form-search\">\r\n    <mat-form-field class=\"example-full-width\">\r\n        <mat-label>{{ settings?.textInputDefault }}</mat-label>\r\n        <mat-icon matPrefix class=\"mr-2\">{{ settings?.icon }}</mat-icon>\r\n        <input matInput formControlName=\"search\" type=\"text\" [placeholder]=\"settings?.textInputDefault\">\r\n        <mat-hint *ngIf=\"amount\">\r\n            {{ amount }} resultados para <i>{{ formGroupSearch?.get('search')?.value }}</i>\r\n        </mat-hint>\r\n    </mat-form-field>\r\n</form>",
                styles: [".mr-2{margin-right:.5rem}.form-search{margin:5px}.example-full-width{width:100%}\n"]
            }]
    }], function () { return [{ type: ɵngcc10.FormBuilder }]; }, { changes: [{
            type: Output
        }], settings: [{
            type: Input
        }], amount: [{
            type: Input
        }] }); })();

class SearchInputModule {
}
SearchInputModule.ɵfac = function SearchInputModule_Factory(t) { return new (t || SearchInputModule)(); };
SearchInputModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: SearchInputModule });
SearchInputModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
        ], FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SearchInputModule, [{
        type: NgModule,
        args: [{
                declarations: [SearchInputComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                ],
                exports: [
                    SearchInputComponent,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SearchInputModule, { declarations: function () { return [SearchInputComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule]; }, exports: function () { return [SearchInputComponent, FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule]; } }); })();

class ProfileTableComponent {
    constructor() { }
    ngOnInit() { }
}
ProfileTableComponent.ɵfac = function ProfileTableComponent_Factory(t) { return new (t || ProfileTableComponent)(); };
ProfileTableComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ProfileTableComponent, selectors: [["mln-profile-table"]], inputs: { title: "title" }, ngContentSelectors: _c3, decls: 6, vars: 1, consts: [[1, "profile-table"], [1, "table-title"], [1, "separator"], [1, "content"]], template: function ProfileTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.title, " ");
    } }, styles: [".profile-table[_ngcontent-%COMP%]{box-sizing:border-box;padding:1.5625rem;background-color:#ebeff2;border:.0625rem solid #c2ced3;border-radius:.3125rem}.profile-table[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{border-bottom:.125rem solid #8080803b;margin:.375rem 0;padding:.3125rem 0}.profile-table[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]{padding-left:.3125rem;font-family:\"RobotoBold\";color:#202967}.profile-table[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:1rem}"] });
ProfileTableComponent.ctorParameters = () => [];
ProfileTableComponent.propDecorators = {
    title: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ProfileTableComponent, [{
        type: Component,
        args: [{
                selector: 'mln-profile-table',
                template: "<div class=\"profile-table\">\r\n    <div class=\"table-title\">\r\n        {{ title }}\r\n    </div>\r\n    <div class=\"separator\"></div>\r\n    <div class=\"content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>",
                styles: [".profile-table{box-sizing:border-box;padding:1.5625rem;background-color:#ebeff2;border:.0625rem solid #c2ced3;border-radius:.3125rem}.profile-table .separator{border-bottom:.125rem solid #8080803b;margin:.375rem 0;padding:.3125rem 0}.profile-table .table-title{padding-left:.3125rem;font-family:\"RobotoBold\";color:#202967}.profile-table .content{padding:1rem}\n"]
            }]
    }], function () { return []; }, { title: [{
            type: Input
        }] }); })();

class ProfileTableModule {
}
ProfileTableModule.ɵfac = function ProfileTableModule_Factory(t) { return new (t || ProfileTableModule)(); };
ProfileTableModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: ProfileTableModule });
ProfileTableModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, MatIconModule], MatIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ProfileTableModule, [{
        type: NgModule,
        args: [{
                declarations: [ProfileTableComponent],
                imports: [CommonModule, MatIconModule],
                exports: [ProfileTableComponent, MatIconModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ProfileTableModule, { declarations: function () { return [ProfileTableComponent]; }, imports: function () { return [CommonModule, MatIconModule]; }, exports: function () { return [ProfileTableComponent, MatIconModule]; } }); })();

class AlertComponent {
    constructor() { }
    ngOnInit() { }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["mln-alert"]], inputs: { message: "message" }, decls: 8, vars: 6, consts: [[1, "alert-wrapper"], [1, "alert-icon"], [1, "alert-text"], [3, "href", "target"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "mat-icon", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "span", 2);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementStart(5, "a", 3);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.message.matIcon);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1("", ctx.message.textStart, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("href", ctx.message.link == null ? null : ctx.message.link.href, ɵngcc0.ɵɵsanitizeUrl)("target", ctx.message.link == null ? null : ctx.message.link.target);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.message.link.text);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.message.textEnd);
    } }, directives: [ɵngcc3.MatIcon], styles: [".alert-wrapper[_ngcontent-%COMP%]{margin:10px auto;width:90%;background-color:#fff!important;border:1px solid lightgray;display:flex;min-height:40px;align-items:center}.alert-wrapper[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{margin:0 30px;color:#afbfc6;font-size:32px;height:32px;padding-left:20px}.alert-wrapper[_ngcontent-%COMP%]   .alert-text[_ngcontent-%COMP%]{font-family:\"Roboto\";padding:0 40px 0 30px;line-height:1.6;text-align:center;margin:15px 0}.alert-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline;font-family:\"RobotoBold\";color:#4aa7d9}"] });
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    message: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: 'mln-alert',
                template: "<div class=\"alert-wrapper\">\r\n    <mat-icon class=\"alert-icon\">{{message.matIcon}}</mat-icon>\r\n    <span class=\"alert-text\">{{message.textStart}} <a [href]=\"message.link?.href\" [target]=\"message.link?.target\">{{message.link.text}}</a>{{message.textEnd}}</span>\r\n</div>",
                styles: [".alert-wrapper{margin:10px auto;width:90%;background-color:#fff!important;border:1px solid lightgray;display:flex;min-height:40px;align-items:center}.alert-wrapper .alert-icon{margin:0 30px;color:#afbfc6;font-size:32px;height:32px;padding-left:20px}.alert-wrapper .alert-text{font-family:\"Roboto\";padding:0 40px 0 30px;line-height:1.6;text-align:center;margin:15px 0}.alert-wrapper a{text-decoration:underline;font-family:\"RobotoBold\";color:#4aa7d9}\n"]
            }]
    }], function () { return []; }, { message: [{
            type: Input
        }] }); })();

class AlertModule {
}
AlertModule.ɵfac = function AlertModule_Factory(t) { return new (t || AlertModule)(); };
AlertModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: AlertModule });
AlertModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, FormsModule, MatIconModule], FormsModule, MatIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AlertModule, [{
        type: NgModule,
        args: [{
                declarations: [AlertComponent],
                imports: [CommonModule, FormsModule, MatIconModule],
                exports: [AlertComponent, FormsModule, MatIconModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AlertModule, { declarations: function () { return [AlertComponent]; }, imports: function () { return [CommonModule, FormsModule, MatIconModule]; }, exports: function () { return [AlertComponent, FormsModule, MatIconModule]; } }); })();

class ProposalMessageComponent {
    constructor() { }
    ngOnInit() { }
}
ProposalMessageComponent.ɵfac = function ProposalMessageComponent_Factory(t) { return new (t || ProposalMessageComponent)(); };
ProposalMessageComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ProposalMessageComponent, selectors: [["mln-proposal-message"]], inputs: { icon: "icon", textUp: "textUp", textDonw: "textDonw" }, decls: 7, vars: 3, consts: [[1, "proposal-msg"], [1, "icon"], [1, "title"], [1, "date"]], template: function ProposalMessageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "mat-icon", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "p", 2);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "p", 3);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.icon);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.textUp);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.textDonw);
    } }, directives: [ɵngcc3.MatIcon], styles: [".proposal-msg[_ngcontent-%COMP%]{width:100%;text-align:center;margin:40px 10px}.proposal-msg[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:45px;height:45px;background-position:center;background-repeat:no-repeat;background-size:auto;display:inline-block;font-size:30px;font-size:40px}.proposal-msg[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#202967;font-size:20px;font-family:\"GillSansBold\"}.proposal-msg[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{color:#9b9b9b;font-size:15px;font-family:\"Roboto\"}"] });
ProposalMessageComponent.ctorParameters = () => [];
ProposalMessageComponent.propDecorators = {
    icon: [{ type: Input }],
    textUp: [{ type: Input }],
    textDonw: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ProposalMessageComponent, [{
        type: Component,
        args: [{
                selector: 'mln-proposal-message',
                template: "<div class=\"proposal-msg\">\r\n    <mat-icon class=\"icon\">{{icon}}</mat-icon>\r\n    <p class=\"title\">{{textUp}}</p>\r\n    <p class=\"date\">{{textDonw}}</p>\r\n</div>",
                styles: [".proposal-msg{width:100%;text-align:center;margin:40px 10px}.proposal-msg .icon{width:45px;height:45px;background-position:center;background-repeat:no-repeat;background-size:auto;display:inline-block;font-size:30px;font-size:40px}.proposal-msg .title{color:#202967;font-size:20px;font-family:\"GillSansBold\"}.proposal-msg .date{color:#9b9b9b;font-size:15px;font-family:\"Roboto\"}\n"]
            }]
    }], function () { return []; }, { icon: [{
            type: Input
        }], textUp: [{
            type: Input
        }], textDonw: [{
            type: Input
        }] }); })();

class ProposalMessageModule {
}
ProposalMessageModule.ɵfac = function ProposalMessageModule_Factory(t) { return new (t || ProposalMessageModule)(); };
ProposalMessageModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: ProposalMessageModule });
ProposalMessageModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, MatIconModule], MatIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ProposalMessageModule, [{
        type: NgModule,
        args: [{
                declarations: [ProposalMessageComponent],
                imports: [CommonModule, MatIconModule],
                exports: [ProposalMessageComponent, MatIconModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ProposalMessageModule, { declarations: function () { return [ProposalMessageComponent]; }, imports: function () { return [CommonModule, MatIconModule]; }, exports: function () { return [ProposalMessageComponent, MatIconModule]; } }); })();

class DatatableComponent {
    constructor() {
        this.actionChangeOptions = new EventEmitter();
        this.datasourcesColumns = [];
        this.currency = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
        });
    }
    set datacolumns(datacolumns) {
        this.datacolumns$ = datacolumns;
        this.datasourcesColumns =
            datacolumns && datacolumns.map((column) => column.key);
    }
    get datacolumns() {
        return this.datacolumns$;
    }
    set datasources(datasources) {
        this.isAccordion =
            datasources && datasources.some((datasource) => datasource.accordion);
        this.dataSources = new MatTableDataSource(datasources);
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.paginator) {
            this.dataSources.paginator = this.paginator;
        }
    }
    onActionChange(datasource, value) {
        this.actionChangeOptions.emit({ datasource, value });
    }
}
DatatableComponent.ɵfac = function DatatableComponent_Factory(t) { return new (t || DatatableComponent)(); };
DatatableComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: DatatableComponent, selectors: [["mln-datatable"]], viewQuery: function DatatableComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(MatPaginator, 5);
        ɵngcc0.ɵɵviewQuery(SelectComponent, 5);
        ɵngcc0.ɵɵviewQuery(ButtonComponent, 5);
        ɵngcc0.ɵɵviewQuery(SliderToggleComponent, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.customSelect = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.customButton = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.customToggle = _t.first);
    } }, inputs: { datacolumns: "datacolumns", datasources: "datasources", paginatorSettings: "paginatorSettings" }, outputs: { actionChangeOptions: "actionChangeOptions" }, decls: 1, vars: 1, consts: [["class", "overflow-table", 4, "ngIf"], [1, "overflow-table"], ["multiTemplateDataRows", "", 1, "c-proposal-table", "table-wrapper", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail", 4, "ngIf"], [4, "matHeaderRowDef"], [3, "class", "expanded-row", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [3, "pageSize", "pageSizeOptions"], ["MatPaginator", ""], [3, "matColumnDef"], ["class", "", 4, "matHeaderCellDef"], ["class", "flex-wrap pr-2", 3, "ngSwitch", 4, "matCellDef"], [1, ""], [1, "flex-wrap", "pr-2", 3, "ngSwitch"], ["class", "img-accordion", "src", "/assets/img/chevron-bottom.svg", "alt", "accordion", 3, "img-accordion--up", "click", 4, "ngIf"], [3, "class", 4, "ngSwitchCase"], [3, "settings", "listItem", "actionSelected", 4, "ngSwitchCase"], ["target", "__blank", 3, "class", "href", 4, "ngSwitchCase"], [3, "callback", "classButton", "icon", "isSquare", "isDisabled", 4, "ngSwitchCase"], [3, "label", "statusText", "changeToggleAction", 4, "ngSwitchCase"], [3, "class", 4, "ngSwitchDefault"], ["src", "/assets/img/chevron-bottom.svg", "alt", "accordion", 1, "img-accordion", 3, "click"], [3, "settings", "listItem", "actionSelected"], ["customSelect", ""], ["target", "__blank", 3, "href"], [3, "callback", "classButton", "icon", "isSquare", "isDisabled"], ["customButton", ""], [3, "label", "statusText", "changeToggleAction"], ["customToggle", ""], ["matColumnDef", "expandedDetail"], ["class", "flex-wrap pr-2", 4, "matCellDef"], [1, "flex-wrap", "pr-2"], [1, "element-detail"], [1, "table-child", 3, "datasources", "datacolumns"], ["class", "detail-row", 3, "ngStyle", 4, "matRowDef", "matRowDefColumns"], [1, "detail-row", 3, "ngStyle"]], template: function DatatableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, DatatableComponent_div_0_Template, 9, 10, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.dataSources == null ? null : ctx.dataSources.data == null ? null : ctx.dataSources.data.length);
    } }, directives: [ɵngcc1.NgIf, ɵngcc12.MatTable, ɵngcc1.NgForOf, ɵngcc12.MatHeaderRowDef, ɵngcc12.MatRowDef, ɵngcc13.MatPaginator, ɵngcc12.MatColumnDef, ɵngcc12.MatHeaderCellDef, ɵngcc12.MatCellDef, ɵngcc12.MatHeaderCell, ɵngcc12.MatCell, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, ɵngcc1.NgSwitchDefault, SelectComponent, ButtonComponent, SliderToggleComponent, DatatableComponent, ɵngcc12.MatHeaderRow, ɵngcc12.MatRow, ɵngcc1.NgStyle], pipes: [ɵngcc1.DatePipe], styles: [".overflow-table[_ngcontent-%COMP%]{overflow-y:auto}.hidden-paginator[_ngcontent-%COMP%]{display:none}.bg[_ngcontent-%COMP%]{background-color:#f8fafd;height:100vh}.header-proposal[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-between;margin:30px;border-bottom:1px solid;padding-bottom:20px;color:#afbfc6}.header-proposal[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#202967;font-family:\"GillSansBold\";font-size:20px}.header-proposal[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:14px;color:#4e5c63}@media only screen and (max-width: 720px){.header-proposal[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:center}.header-proposal[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:10px 0}}.table-wrapper[_ngcontent-%COMP%]{box-sizing:border-box}.table-wrapper[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{color:#2699d6;text-align:center}.table-wrapper[_ngcontent-%COMP%]   .proposal-table__options[_ngcontent-%COMP%]{text-align:center}.table-wrapper[_ngcontent-%COMP%]   .example-element-detail[_ngcontent-%COMP%]{overflow:hidden}.table-wrapper[_ngcontent-%COMP%]   .example-element-detail[_ngcontent-%COMP%]     mln-datatable mat-table thead{display:table-header-group}.table-wrapper[_ngcontent-%COMP%]   .img-accordion[_ngcontent-%COMP%]{cursor:pointer;padding:.3125rem}.table-wrapper[_ngcontent-%COMP%]   .img-accordion--up[_ngcontent-%COMP%]{transform:rotate(180deg)}.table-paginator[_ngcontent-%COMP%]{font-family:\"Roboto\"}.table-paginator[_ngcontent-%COMP%]   .mat-paginator-page-size[_ngcontent-%COMP%]{color:red}.detail-row[_ngcontent-%COMP%]{height:0;min-height:0}.element-row[_ngcontent-%COMP%]:not(.expanded-row):hover{background:whitesmoke}.element-row[_ngcontent-%COMP%]:not(.expanded-row):active{background:#efefef}.element-row[_ngcontent-%COMP%]{background:#f1f5fc}.element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.element-detail[_ngcontent-%COMP%]{overflow:hidden;display:flex;width:100%}.element-diagram[_ngcontent-%COMP%]{min-width:80px;border:2px solid black;padding:8px;font-weight:lighter;margin:8px 0;height:104px}.element-symbol[_ngcontent-%COMP%]{font-weight:bold;font-size:40px;line-height:normal}.element-description[_ngcontent-%COMP%]{padding:16px}.element-description-attribution[_ngcontent-%COMP%]{opacity:.5}.mat-column-expandedDetail[_ngcontent-%COMP%]{border-bottom-style:none}.block-left[_ngcontent-%COMP%]{margin:0 2px;vertical-align:middle}.Table[_ngcontent-%COMP%]{display:table;border:1px solid rgba(0,0,0,.1)}.Title[_ngcontent-%COMP%]{display:table-caption;text-align:center;font-weight:bold;font-size:larger}.Heading[_ngcontent-%COMP%]{display:table-row;font-weight:bold;text-align:center;background-color:#fff}.Heading[_ngcontent-%COMP%]   .Cell[_ngcontent-%COMP%]{color:#4e5c63;font-family:\"Roboto\";font-size:12px}.Row[_ngcontent-%COMP%]{display:table-row}.Cell[_ngcontent-%COMP%]{display:table-cell;border:solid;border-width:thin;padding:15px;vertical-align:middle;border-color:#fff9;color:#4e5c63;font-family:\"Roboto\";font-size:12px}.table-child[_ngcontent-%COMP%]{width:100%;margin-top:20px}@media screen and (max-width: 580px){.table-child[_ngcontent-%COMP%], .element-row.expandable-element[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:before, .buttonExpanded[_ngcontent-%COMP%]{display:none}}"], data: { animation: [
            trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0' })),
                state('expanded', style({ height: '*' })),
                /* transition(
                  'expanded <=> collapsed',
                  animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
                ), */
            ]),
        ] } });
DatatableComponent.ctorParameters = () => [];
DatatableComponent.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator, { static: false },] }],
    customSelect: [{ type: ViewChild, args: [SelectComponent, { static: false },] }],
    customButton: [{ type: ViewChild, args: [ButtonComponent, { static: false },] }],
    customToggle: [{ type: ViewChild, args: [SliderToggleComponent, { static: false },] }],
    actionChangeOptions: [{ type: Output }],
    datacolumns: [{ type: Input }],
    datasources: [{ type: Input }],
    paginatorSettings: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DatatableComponent, [{
        type: Component,
        args: [{
                selector: 'mln-datatable',
                template: "<!-- table proposals -->\r\n<div *ngIf=\"dataSources?.data?.length\" class=\"overflow-table\">\r\n    <mat-table [dataSource]=\"dataSources\" class=\"c-proposal-table table-wrapper\" multiTemplateDataRows>\r\n        <ng-container *ngFor=\"let column of datacolumns; let i = index\" [matColumnDef]=\"column.key\">\r\n            <mat-header-cell class=\"\" *matHeaderCellDef>{{ column.name }}</mat-header-cell>\r\n            <mat-cell class=\"flex-wrap pr-2\" *matCellDef=\"let datasource\" [ngSwitch]=\"column.types.type\">\r\n                <ng-container>\r\n                    <img *ngIf=\"i === 0 && isAccordion\" class=\"img-accordion\" [class.img-accordion--up]=\"expandedElement === datasource\" src=\"/assets/img/chevron-bottom.svg\" alt=\"accordion\" (click)=\"expandedElement = expandedElement === datasource ? null : datasource\" />\r\n                </ng-container>\r\n                <span *ngSwitchCase=\"'text'\" [class]=\"column.class\">\r\n                    {{ datasource[column.key] }}\r\n                </span>\r\n                <span *ngSwitchCase=\"'money'\" [class]=\"column.class\">\r\n                    {{ currency.format(datasource[column.key]) }}\r\n                </span>\r\n                <span *ngSwitchCase=\"'date'\" [class]=\"column.class\">\r\n                    {{ datasource[column.key] | date:column.types.settings.format }}\r\n                </span>\r\n                <mln-select #customSelect *ngSwitchCase=\"'select'\" [settings]=\"column.types.settings.select\" [listItem]=\"column.types.settings.listItem\" (actionSelected)=\"onActionChange(datasource, $event)\"></mln-select>\r\n                <a *ngSwitchCase=\"'link'\" [class]=\"column.class\" [href]=\"datasource.url\" target=\"__blank\">\r\n                    {{ datasource[column.key] }}\r\n                </a>\r\n                <mln-button #customButton *ngSwitchCase=\"'button'\" [callback]=\"column.types.settings.callback\" [classButton]=\"column.types.settings.classButton\" [icon]='column.types.settings.icon' [isSquare]=\"column.types.settings.isSquare\" [isDisabled]=\"column.types.settings.isDisabled\"></mln-button>\r\n                <mln-slider-toggle #customToggle *ngSwitchCase=\"'toggle'\" [label]=\"column.types.settings.label\" [statusText]=\"column.types.settings.statusText\" (changeToggleAction)=\"column.types.settings.callback\"></mln-slider-toggle>\r\n                <span *ngSwitchDefault [class]=\"column?.class\">\r\n                    {{ datasource[column.key] }}\r\n                </span>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n        <ng-container matColumnDef=\"expandedDetail\" *ngIf=\"isAccordion\">\r\n            <mat-cell class=\"flex-wrap pr-2\" *matCellDef=\"let element\" [attr.colspan]=\"datacolumns.length\">\r\n                <ng-container *ngIf=\"element.accordion\">\r\n                    <div class=\"element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n                        <mln-datatable class=\"table-child\" [datasources]=\"element.accordion.datasources\" [datacolumns]=\"element.accordion.datacolumns\"></mln-datatable>\r\n                    </div>\r\n                </ng-container>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <mat-header-row *matHeaderRowDef=\"datasourcesColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let datasource; columns: datasourcesColumns\" class=\"element-row {{ isAccordion ? 'expandable-element' : '' }}\" [class.expanded-row]=\"expandedElement === datasource\"></mat-row>\r\n        <ng-container *ngIf=\"isAccordion\">\r\n            <mat-row *matRowDef=\"let datasource; columns: ['expandedDetail']\" class=\"detail-row\" [ngStyle]=\"{'min-height': expandedElement === datasource ? '48px' : '0px', 'display': expandedElement === datasource ? 'block' : 'flex', 'height': expandedElement === datasource ? 'auto' : '0'}\"></mat-row>\r\n        </ng-container>\r\n    </mat-table>\r\n    <mat-paginator #MatPaginator [pageSize]=\"paginatorSettings?.items\" [pageSizeOptions]=\"paginatorSettings?.perPage\" [class.hidden-paginator]=\"!paginatorSettings?.items\"></mat-paginator>\r\n</div>",
                animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        /* transition(
                          'expanded <=> collapsed',
                          animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
                        ), */
                    ]),
                ],
                styles: [".overflow-table{overflow-y:auto}.hidden-paginator{display:none}.bg{background-color:#f8fafd;height:100vh}.header-proposal{display:flex;align-items:flex-end;justify-content:space-between;margin:30px;border-bottom:1px solid;padding-bottom:20px;color:#afbfc6}.header-proposal .title{color:#202967;font-family:\"GillSansBold\";font-size:20px}.header-proposal .text{font-size:14px;color:#4e5c63}@media only screen and (max-width: 720px){.header-proposal{flex-wrap:wrap;justify-content:center}.header-proposal .title{margin:10px 0}}.table-wrapper{box-sizing:border-box}.table-wrapper .status{color:#2699d6;text-align:center}.table-wrapper .proposal-table__options{text-align:center}.table-wrapper .example-element-detail{overflow:hidden}.table-wrapper .example-element-detail ::ng-deep mln-datatable mat-table thead{display:table-header-group}.table-wrapper .img-accordion{cursor:pointer;padding:.3125rem}.table-wrapper .img-accordion--up{transform:rotate(180deg)}.table-paginator{font-family:\"Roboto\"}.table-paginator .mat-paginator-page-size{color:red}.detail-row{height:0;min-height:0}.element-row:not(.expanded-row):hover{background:whitesmoke}.element-row:not(.expanded-row):active{background:#efefef}.element-row{background:#f1f5fc}.element-row td{border-bottom-width:0}.element-detail{overflow:hidden;display:flex;width:100%}.element-diagram{min-width:80px;border:2px solid black;padding:8px;font-weight:lighter;margin:8px 0;height:104px}.element-symbol{font-weight:bold;font-size:40px;line-height:normal}.element-description{padding:16px}.element-description-attribution{opacity:.5}.mat-column-expandedDetail{border-bottom-style:none}.block-left{margin:0 2px;vertical-align:middle}.Table{display:table;border:1px solid rgba(0,0,0,.1)}.Title{display:table-caption;text-align:center;font-weight:bold;font-size:larger}.Heading{display:table-row;font-weight:bold;text-align:center;background-color:#fff}.Heading .Cell{color:#4e5c63;font-family:\"Roboto\";font-size:12px}.Row{display:table-row}.Cell{display:table-cell;border:solid;border-width:thin;padding:15px;vertical-align:middle;border-color:#fff9;color:#4e5c63;font-family:\"Roboto\";font-size:12px}.table-child{width:100%;margin-top:20px}@media screen and (max-width: 580px){.table-child,.element-row.expandable-element .mat-cell:before,.buttonExpanded{display:none}}\n"]
            }]
    }], function () { return []; }, { actionChangeOptions: [{
            type: Output
        }], datacolumns: [{
            type: Input
        }], datasources: [{
            type: Input
        }], paginator: [{
            type: ViewChild,
            args: [MatPaginator, { static: false }]
        }], customSelect: [{
            type: ViewChild,
            args: [SelectComponent, { static: false }]
        }], customButton: [{
            type: ViewChild,
            args: [ButtonComponent, { static: false }]
        }], customToggle: [{
            type: ViewChild,
            args: [SliderToggleComponent, { static: false }]
        }], paginatorSettings: [{
            type: Input
        }] }); })();

class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule], CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [CommonModule],
                exports: [CommonModule],
                schemas: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SharedModule, { imports: function () { return [CommonModule]; }, exports: function () { return [CommonModule]; } }); })();

class CustomPaginator extends MatPaginatorIntl {
    constructor() {
        super();
        this.nextPageLabel = ' Siguiente';
        this.previousPageLabel = ' Atrás';
        this.itemsPerPageLabel = 'Cantidad por página';
    }
}
CustomPaginator.ɵfac = function CustomPaginator_Factory(t) { return new (t || CustomPaginator)(); };
CustomPaginator.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: CustomPaginator, factory: CustomPaginator.ɵfac });
CustomPaginator.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CustomPaginator, [{
        type: Injectable
    }], function () { return []; }, null); })();
class DataTableModule {
}
DataTableModule.ɵfac = function DataTableModule_Factory(t) { return new (t || DataTableModule)(); };
DataTableModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: DataTableModule });
DataTableModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [
        {
            provide: MatPaginatorIntl,
            useClass: CustomPaginator
        },
    ], imports: [[
            CommonModule,
            SharedModule,
            SelectModule,
            ButtonModule,
            SliderToggleModule,
            MatIconModule,
            MatSortModule,
            MatPaginatorModule,
            MatTableModule,
            MatFormFieldModule,
            MatSelectModule,
            MatInputModule,
        ], SelectModule, ButtonModule, SliderToggleModule, MatIconModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DataTableModule, [{
        type: NgModule,
        args: [{
                declarations: [DatatableComponent],
                imports: [
                    CommonModule,
                    SharedModule,
                    SelectModule,
                    ButtonModule,
                    SliderToggleModule,
                    MatIconModule,
                    MatSortModule,
                    MatPaginatorModule,
                    MatTableModule,
                    MatFormFieldModule,
                    MatSelectModule,
                    MatInputModule,
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [
                    SelectModule,
                    ButtonModule,
                    SliderToggleModule,
                    MatIconModule,
                    MatSortModule,
                    MatPaginatorModule,
                    MatTableModule,
                    MatFormFieldModule,
                    MatSelectModule,
                    MatInputModule,
                    DatatableComponent,
                ],
                providers: [
                    {
                        provide: MatPaginatorIntl,
                        useClass: CustomPaginator
                    },
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DataTableModule, { declarations: function () { return [DatatableComponent]; }, imports: function () { return [CommonModule, SharedModule, SelectModule, ButtonModule, SliderToggleModule, MatIconModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule]; }, exports: function () { return [SelectModule, ButtonModule, SliderToggleModule, MatIconModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule, DatatableComponent]; } }); })();

class StepComponent {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
        this.index = 0;
    }
    get selected() {
        return this.selected$;
    }
    set selected(selected) {
        this.selected$ = selected;
        if (this.selected$) {
            this.loaded = true;
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((template, i) => {
            this.contentTemplate = template;
            this.index = i;
        });
    }
}
StepComponent.ɵfac = function StepComponent_Factory(t) { return new (t || StepComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
StepComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: StepComponent, selectors: [["mln-step"]], contentQueries: function StepComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c6, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { selected: "selected", title: "title", icon: "icon", descriptionLabel: "descriptionLabel", count: "count", disabled: "disabled" }, ngContentSelectors: _c3, decls: 3, vars: 6, consts: [["role", "tabpanel", 1, "mln-tabs-panel"], [4, "ngIf"], [4, "ngTemplateOutlet"]], template: function StepComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, StepComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mln-tabs-panel--selected", ctx.selected);
        ɵngcc0.ɵɵattribute("id", ctx.index)("aria-hidden", !ctx.selected)("aria-labelledby", "header-" + ctx.index);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.contentTemplate && ctx.loaded);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".mln-tabs-panel[_ngcontent-%COMP%]{display:none}.mln-tabs-panel--selected[_ngcontent-%COMP%]{display:block}"] });
StepComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
StepComponent.propDecorators = {
    title: [{ type: Input }],
    icon: [{ type: Input }],
    descriptionLabel: [{ type: Input }],
    count: [{ type: Input }],
    disabled: [{ type: Input }],
    selected: [{ type: Input }],
    templates: [{ type: ContentChildren, args: ['content',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(StepComponent, [{
        type: Component,
        args: [{
                selector: 'mln-step',
                template: "<div [attr.id]=\"index\" class=\"mln-tabs-panel\" role=\"tabpanel\" [class.mln-tabs-panel--selected]=\"selected\" [attr.aria-hidden]=\"!selected\" [attr.aria-labelledby]=\"'header-' + index\">\r\n    <ng-content></ng-content>\r\n    <ng-container *ngIf=\"contentTemplate && loaded\">\r\n        <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\r\n    </ng-container>\r\n</div>",
                styles: [".mln-tabs-panel{display:none}.mln-tabs-panel--selected{display:block}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, { selected: [{
            type: Input
        }], title: [{
            type: Input
        }], icon: [{
            type: Input
        }], descriptionLabel: [{
            type: Input
        }], count: [{
            type: Input
        }], disabled: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: ['content']
        }] }); })();

class StepperComponent {
    constructor() {
        this.selectAction = new EventEmitter();
        this.closeAction = new EventEmitter();
        this.saveAction = new EventEmitter();
        this.panelsArray = [];
    }
    ngAfterContentInit() {
        this.initTabs();
        this.panels.changes.subscribe(() => this.initTabs());
    }
    initTabs() {
        this.panels.forEach((tab, i) => tab.index = i);
        this.panelsArray = this.panels.toArray();
        const selectedTab = this.panelsArray.find((panel) => panel.selected);
        if (!selectedTab && this.panelsArray.length) {
            this.panelsArray[0].selected = true;
            this.selectedIndex = this.panelsArray[0].index;
        }
    }
    /**
     * @description set the given panel to the selected and emit onchange event
     * @param panel StepComponent
     */
    changePanelSelected(panel) {
        this.panelsArray = this.panels.toArray();
        this.panelsArray = this.panelsArray.map((panelArray) => {
            panelArray.selected = panelArray.index === panel.index;
            return panelArray;
        });
    }
    /**
     * @description triggered when the user select another tab and emit onSelect event
     * @param event Event
     * @param panel StepComponent
     */
    selectTab(event, panel, index) {
        if (event) {
            event.preventDefault();
        }
        this.selectedIndex = index;
        if (event && !(panel === null || panel === void 0 ? void 0 : panel.disabled)) {
            this.changePanelSelected(panel);
            this.selectAction.emit({ originalEvent: event, panel, tab: this.tabName || 'tab' });
        }
    }
    next(event) {
        if ((this.selectedIndex + 1) < this.panels.length) {
            this.selectedIndex++;
            const panel = this.panels.find(d => d.index === this.selectedIndex);
            this.selectTab(event, panel, this.selectedIndex);
        }
    }
    back(event) {
        if (this.selectedIndex) {
            this.selectedIndex--;
            const panel = this.panels.find(d => d.index === this.selectedIndex);
            this.selectTab(event, panel, this.selectedIndex);
        }
    }
    close() {
        this.closeAction.emit(true);
    }
    save() {
        this.saveAction.emit(true);
    }
    changeHiring(hiringAction) {
        if (!hiringAction.disabled && hiringAction.show) {
            hiringAction.callback.next(true);
        }
    }
    changeAmount(amountAction) {
        if (!amountAction.disabled && amountAction.show) {
            amountAction.callback.next(true);
        }
    }
}
StepperComponent.ɵfac = function StepperComponent_Factory(t) { return new (t || StepperComponent)(); };
StepperComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: StepperComponent, selectors: [["mln-stepper"]], contentQueries: function StepperComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, StepComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.panels = _t);
    } }, inputs: { tabName: "tabName", linkAmount: "linkAmount", linkHiring: "linkHiring" }, outputs: { selectAction: "selectAction", closeAction: "closeAction", saveAction: "saveAction" }, ngContentSelectors: _c3, decls: 24, vars: 3, consts: [[1, "header-proposal"], [1, "np-title"], [1, "np-links"], ["class", "np-link", 3, "disabled", "click", 4, "ngIf"], [1, "np-bar-wrapper"], ["class", "np-bar", "role", "presentation", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "footer-proposal"], [1, "footer-action", 3, "click"], [1, "footer-link", 3, "click"], [1, "footer-action", "back", 3, "click"], ["mat-stroked-button", "", 1, "mln-button", "primary", 3, "click"], [1, "container"], [1, "np-link", 3, "click"], [1, "icon", "contratacion"], [1, "icon", "costes"], ["role", "presentation", 1, "np-bar", 3, "ngClass", "click"], [1, "np-block"], ["role", "tab", 1, "np-text"], [1, "icon"]], template: function StepperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "section");
        ɵngcc0.ɵɵelementStart(1, "header", 0);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtext(3, " Nueva Propuesta ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 2);
        ɵngcc0.ɵɵtemplate(5, StepperComponent_div_5_Template, 4, 2, "div", 3);
        ɵngcc0.ɵɵtemplate(6, StepperComponent_div_6_Template, 4, 2, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div");
        ɵngcc0.ɵɵelementStart(8, "ul", 4);
        ɵngcc0.ɵɵtemplate(9, StepperComponent_li_9_Template, 6, 8, "li", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "footer", 6);
        ɵngcc0.ɵɵelementStart(11, "div");
        ɵngcc0.ɵɵelementStart(12, "span", 7);
        ɵngcc0.ɵɵlistener("click", function StepperComponent_Template_span_click_12_listener() { return ctx.close(); });
        ɵngcc0.ɵɵtext(13, " X CERRAR ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div");
        ɵngcc0.ɵɵelementStart(15, "span", 8);
        ɵngcc0.ɵɵlistener("click", function StepperComponent_Template_span_click_15_listener() { return ctx.save(); });
        ɵngcc0.ɵɵtext(16, "Guardar Borrador");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(17, "div");
        ɵngcc0.ɵɵelementStart(18, "button", 9);
        ɵngcc0.ɵɵlistener("click", function StepperComponent_Template_button_click_18_listener($event) { return ctx.back($event); });
        ɵngcc0.ɵɵtext(19, " < VOLVER ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(20, "button", 10);
        ɵngcc0.ɵɵlistener("click", function StepperComponent_Template_button_click_20_listener($event) { return ctx.next($event); });
        ɵngcc0.ɵɵtext(21, " Continuar ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "div", 11);
        ɵngcc0.ɵɵprojection(23);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngIf", ctx.linkHiring.show);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.linkAmount.show);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.panels);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.MatButton, ɵngcc1.NgClass], styles: [".header-proposal[_ngcontent-%COMP%]{width:100%;box-shadow:0 10px 18px -5px #ccc;position:relative;background:#ffffff;z-index:99}.header-proposal[_ngcontent-%COMP%]   .np-title[_ngcontent-%COMP%]{font-size:30px;color:#202967;text-align:center;font-family:\"GillSans500\";height:60px;display:flex;align-items:center;justify-content:center}@media only screen and (max-width: 1040px){.header-proposal[_ngcontent-%COMP%]   .np-title[_ngcontent-%COMP%]{height:80px;align-items:flex-end;margin-bottom:10px}}.header-proposal[_ngcontent-%COMP%]   .np-links[_ngcontent-%COMP%]{position:absolute;right:10px;top:22px;display:flex;align-items:center}.header-proposal[_ngcontent-%COMP%]   .np-links[_ngcontent-%COMP%]   .np-link[_ngcontent-%COMP%]{padding-right:6px;font-family:\"GillSansCondensedBold\";color:#2f9ad3;display:flex;align-items:center;font-size:16px;cursor:pointer}.header-proposal[_ngcontent-%COMP%]   .np-links[_ngcontent-%COMP%]   .np-link.disabled[_ngcontent-%COMP%]{cursor:auto;cursor:initial;opacity:.3}.header-proposal[_ngcontent-%COMP%]   .np-links[_ngcontent-%COMP%]   .np-link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{background-position:center;background-repeat:no-repeat;background-size:contain;margin-right:5px;padding:10px;color:#2f9ad3}.header-proposal[_ngcontent-%COMP%]   .np-links[_ngcontent-%COMP%]   .np-link[_ngcontent-%COMP%]   .icon.costes[_ngcontent-%COMP%]{background-image:url(/assets/img/costes.png)}.header-proposal[_ngcontent-%COMP%]   .np-links[_ngcontent-%COMP%]   .np-link[_ngcontent-%COMP%]   .icon.contratacion[_ngcontent-%COMP%]{background-image:url(/assets/img/contratacion.png)}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]{width:90%;margin:0 auto;display:flex;justify-content:space-between;box-sizing:border-box;flex-wrap:wrap}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar[_ngcontent-%COMP%]{flex:1 1 0;padding:5px;height:50px;cursor:pointer}@media only screen and (max-width: 980px){.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar[_ngcontent-%COMP%]{flex:initial;width:30%}}@media only screen and (max-width: 540px){.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar[_ngcontent-%COMP%]{flex:initial;width:45%}}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar[_ngcontent-%COMP%]   .np-block[_ngcontent-%COMP%]{height:12px}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar[_ngcontent-%COMP%]   .np-text[_ngcontent-%COMP%]{text-align:center;margin:0 auto;display:flex;justify-content:center;padding-left:2px;align-items:center;font-family:\"RobotoBold\";color:gray}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar[_ngcontent-%COMP%]   .np-text[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:15px;height:15px;margin-right:5px;background-repeat:no-repeat;background-size:cover}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar[_ngcontent-%COMP%]   .np-text[_ngcontent-%COMP%]   .icon.tick-ok[_ngcontent-%COMP%]{background-image:url(/assets/img/tick-ok.png)}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar[_ngcontent-%COMP%]   .np-text[_ngcontent-%COMP%]   .icon.tick-ko[_ngcontent-%COMP%]{background-image:url(/assets/img/tick-ko.png)}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar[_ngcontent-%COMP%]   .np-text[_ngcontent-%COMP%]   .icon.tick-warning[_ngcontent-%COMP%]{background-image:url(/assets/img/tick-warning.png)}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar[_ngcontent-%COMP%]   .np-text[_ngcontent-%COMP%]   .icon.none[_ngcontent-%COMP%]{display:none}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar.done[_ngcontent-%COMP%]   .np-block[_ngcontent-%COMP%]{background-color:#2f9ad3}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar.done[_ngcontent-%COMP%]   .np-text[_ngcontent-%COMP%]{color:#9b9b9b}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar.active[_ngcontent-%COMP%]   .np-block[_ngcontent-%COMP%]{background-color:#2f9ad3}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar.active[_ngcontent-%COMP%]   .np-text[_ngcontent-%COMP%]{color:#4aa7d9}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar.pending[_ngcontent-%COMP%]   .np-block[_ngcontent-%COMP%]{background-color:#bedef0}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar.pending[_ngcontent-%COMP%]   .np-text[_ngcontent-%COMP%]{color:#bcbfd1}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar[_ngcontent-%COMP%]:first-child   .np-block[_ngcontent-%COMP%]{border-top-left-radius:5px;border-bottom-left-radius:5px}.header-proposal[_ngcontent-%COMP%]   .np-bar-wrapper[_ngcontent-%COMP%]   .np-bar[_ngcontent-%COMP%]:last-child   .np-block[_ngcontent-%COMP%]{border-top-right-radius:5px;border-bottom-right-radius:5px}.footer-proposal[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;z-index:99;width:100%;display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:50px;padding:0 20px;box-sizing:border-box;border-top:1px solid gray;background:#ffffff}.footer-proposal[_ngcontent-%COMP%]   .footer-action[_ngcontent-%COMP%]{color:#000;font-family:\"GillSans500\";padding:0 30px;cursor:pointer;border:none;background:none}.footer-proposal[_ngcontent-%COMP%]   .footer-action[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none}.footer-proposal[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{font:inherit;font-family:\"GillSans500\"}.footer-proposal[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]{color:#2f9ad3;font-family:\"GillSans500\";text-decoration:underline;cursor:pointer}.footer-proposal[_ngcontent-%COMP%]   .mln-button[_ngcontent-%COMP%]{padding:0 30px;font-weight:bold;border-radius:20px;margin:0 auto;border-width:2px;height:40px;font-family:\"Roboto\"}.footer-proposal[_ngcontent-%COMP%]   .mln-button.primary[_ngcontent-%COMP%]{color:#212b65;border-color:#212b65;background-color:#fff}.footer-proposal[_ngcontent-%COMP%]   .mln-button.disabled[_ngcontent-%COMP%]{color:#bcbfd1;border-color:#bcbfd1;background-color:#fff}.container[_ngcontent-%COMP%]{width:80%;margin:0 auto;padding:2rem}"] });
StepperComponent.ctorParameters = () => [];
StepperComponent.propDecorators = {
    tabName: [{ type: Input }],
    linkAmount: [{ type: Input }],
    linkHiring: [{ type: Input }],
    selectAction: [{ type: Output }],
    closeAction: [{ type: Output }],
    saveAction: [{ type: Output }],
    panels: [{ type: ContentChildren, args: [StepComponent,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(StepperComponent, [{
        type: Component,
        args: [{
                selector: 'mln-stepper',
                template: "<section>\r\n    <header class=\"header-proposal\">\r\n        <div class=\"np-title\">\r\n            Nueva Propuesta\r\n        </div>\r\n        <div class=\"np-links\">\r\n            <div class=\"np-link\" [class.disabled]=\"linkHiring.disabled\" *ngIf=\"linkHiring.show\" (click)=\"changeHiring(linkHiring)\">\r\n                <i class=\"icon contratacion\"></i>\r\n                <span>Contrataci\u00F3n</span>\r\n            </div>\r\n            <div class=\"np-link\" [class.disabled]=\"linkAmount.disabled\" *ngIf=\"linkAmount.show\" (click)=\"changeAmount(linkAmount)\">\r\n                <i class=\"icon costes\"></i>\r\n                <span>Costes</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <ul class=\"np-bar-wrapper\">\r\n                <li class=\"np-bar\" [attr.title]=\"panel.descriptionLabel\" [attr.id]=\"'header-' + panel.index\" [attr.aria-selected]=\"panel.selected\" [attr.aria-controls]=\"panel.index\" [ngClass]=\"(selectedIndex >= i && !panel.disabled) ? 'done' : 'pending'\" *ngFor=\"let panel of panels; let i = index\"\r\n                    role=\"presentation\" (click)=\"selectTab($event, panel, i)\">\r\n                    <div class=\"np-block\"></div>\r\n                    <div class=\"np-text\" role=\"tab\">\r\n                        <i class=\"icon\" [class.tick-ok]=\"selectedIndex > i\"></i>\r\n                        <span>{{panel.title}}</span>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </header>\r\n\r\n    <footer class=\"footer-proposal\">\r\n        <div>\r\n            <span class=\"footer-action\" (click)=\"close()\">\r\n                X CERRAR\r\n            </span>\r\n        </div>\r\n        <div>\r\n            <span class=\"footer-link\" (click)=\"save()\">Guardar Borrador</span>\r\n        </div>\r\n        <div>\r\n            <button class=\"footer-action back\" (click)=\"back($event)\">\r\n                &#60; VOLVER\r\n            </button>\r\n            <button mat-stroked-button class=\"mln-button primary\" (click)=\"next($event)\">\r\n                Continuar\r\n            </button>\r\n        </div>\r\n    </footer>\r\n</section>\r\n\r\n<div class=\"container\">\r\n    <ng-content></ng-content>\r\n</div>",
                styles: [".header-proposal{width:100%;box-shadow:0 10px 18px -5px #ccc;position:relative;background:#ffffff;z-index:99}.header-proposal .np-title{font-size:30px;color:#202967;text-align:center;font-family:\"GillSans500\";height:60px;display:flex;align-items:center;justify-content:center}@media only screen and (max-width: 1040px){.header-proposal .np-title{height:80px;align-items:flex-end;margin-bottom:10px}}.header-proposal .np-links{position:absolute;right:10px;top:22px;display:flex;align-items:center}.header-proposal .np-links .np-link{padding-right:6px;font-family:\"GillSansCondensedBold\";color:#2f9ad3;display:flex;align-items:center;font-size:16px;cursor:pointer}.header-proposal .np-links .np-link.disabled{cursor:auto;cursor:initial;opacity:.3}.header-proposal .np-links .np-link .icon{background-position:center;background-repeat:no-repeat;background-size:contain;margin-right:5px;padding:10px;color:#2f9ad3}.header-proposal .np-links .np-link .icon.costes{background-image:url(/assets/img/costes.png)}.header-proposal .np-links .np-link .icon.contratacion{background-image:url(/assets/img/contratacion.png)}.header-proposal .np-bar-wrapper{width:90%;margin:0 auto;display:flex;justify-content:space-between;box-sizing:border-box;flex-wrap:wrap}.header-proposal .np-bar-wrapper .np-bar{flex:1 1 0;padding:5px;height:50px;cursor:pointer}@media only screen and (max-width: 980px){.header-proposal .np-bar-wrapper .np-bar{flex:initial;width:30%}}@media only screen and (max-width: 540px){.header-proposal .np-bar-wrapper .np-bar{flex:initial;width:45%}}.header-proposal .np-bar-wrapper .np-bar .np-block{height:12px}.header-proposal .np-bar-wrapper .np-bar .np-text{text-align:center;margin:0 auto;display:flex;justify-content:center;padding-left:2px;align-items:center;font-family:\"RobotoBold\";color:gray}.header-proposal .np-bar-wrapper .np-bar .np-text .icon{width:15px;height:15px;margin-right:5px;background-repeat:no-repeat;background-size:cover}.header-proposal .np-bar-wrapper .np-bar .np-text .icon.tick-ok{background-image:url(/assets/img/tick-ok.png)}.header-proposal .np-bar-wrapper .np-bar .np-text .icon.tick-ko{background-image:url(/assets/img/tick-ko.png)}.header-proposal .np-bar-wrapper .np-bar .np-text .icon.tick-warning{background-image:url(/assets/img/tick-warning.png)}.header-proposal .np-bar-wrapper .np-bar .np-text .icon.none{display:none}.header-proposal .np-bar-wrapper .np-bar.done .np-block{background-color:#2f9ad3}.header-proposal .np-bar-wrapper .np-bar.done .np-text{color:#9b9b9b}.header-proposal .np-bar-wrapper .np-bar.active .np-block{background-color:#2f9ad3}.header-proposal .np-bar-wrapper .np-bar.active .np-text{color:#4aa7d9}.header-proposal .np-bar-wrapper .np-bar.pending .np-block{background-color:#bedef0}.header-proposal .np-bar-wrapper .np-bar.pending .np-text{color:#bcbfd1}.header-proposal .np-bar-wrapper .np-bar:first-child .np-block{border-top-left-radius:5px;border-bottom-left-radius:5px}.header-proposal .np-bar-wrapper .np-bar:last-child .np-block{border-top-right-radius:5px;border-bottom-right-radius:5px}.footer-proposal{position:fixed;bottom:0;left:0;z-index:99;width:100%;display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:50px;padding:0 20px;box-sizing:border-box;border-top:1px solid gray;background:#ffffff}.footer-proposal .footer-action{color:#000;font-family:\"GillSans500\";padding:0 30px;cursor:pointer;border:none;background:none}.footer-proposal .footer-action:focus{outline:none;box-shadow:none}.footer-proposal .back{font:inherit;font-family:\"GillSans500\"}.footer-proposal .footer-link{color:#2f9ad3;font-family:\"GillSans500\";text-decoration:underline;cursor:pointer}.footer-proposal .mln-button{padding:0 30px;font-weight:bold;border-radius:20px;margin:0 auto;border-width:2px;height:40px;font-family:\"Roboto\"}.footer-proposal .mln-button.primary{color:#212b65;border-color:#212b65;background-color:#fff}.footer-proposal .mln-button.disabled{color:#bcbfd1;border-color:#bcbfd1;background-color:#fff}.container{width:80%;margin:0 auto;padding:2rem}\n"]
            }]
    }], function () { return []; }, { selectAction: [{
            type: Output
        }], closeAction: [{
            type: Output
        }], saveAction: [{
            type: Output
        }], tabName: [{
            type: Input
        }], linkAmount: [{
            type: Input
        }], linkHiring: [{
            type: Input
        }], panels: [{
            type: ContentChildren,
            args: [StepComponent]
        }] }); })();

class StepperModule {
}
StepperModule.ɵfac = function StepperModule_Factory(t) { return new (t || StepperModule)(); };
StepperModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: StepperModule });
StepperModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatButtonModule,
        ], MatButtonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(StepperModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                ],
                exports: [
                    StepComponent,
                    StepperComponent,
                    MatButtonModule,
                ],
                declarations: [
                    StepComponent,
                    StepperComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(StepperModule, { declarations: function () { return [StepComponent, StepperComponent]; }, imports: function () { return [CommonModule,
        MatButtonModule]; }, exports: function () { return [StepComponent, StepperComponent, MatButtonModule]; } }); })();

class SubHeaderComponent {
    constructor() {
        this.d = new Date();
    }
    ngOnInit() {
    }
}
SubHeaderComponent.ɵfac = function SubHeaderComponent_Factory(t) { return new (t || SubHeaderComponent)(); };
SubHeaderComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: SubHeaderComponent, selectors: [["mln-sub-header"]], inputs: { settingsSubHeader: "settingsSubHeader" }, decls: 1, vars: 1, consts: [["class", "header", 4, "ngIf"], [1, "header"], ["class", "header-right", 4, "ngIf"], [1, "header-title"], [1, "header-title--left"], ["class", "header-title--sufix", 4, "ngIf"], [1, "header-title--right"], [1, ""], [1, "header-right"], [3, "text", "classButton", "isSquare", "isDisabled", "callback", "type"], [1, "header-title--sufix"]], template: function SubHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SubHeaderComponent_div_0_Template, 9, 4, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.settingsSubHeader);
    } }, directives: [ɵngcc1.NgIf, ButtonComponent], styles: [".header[_ngcontent-%COMP%]{border-bottom:1px solid;color:#bcbfd1;font-family:\"GillSansBold\";font-size:24px}.header-title[_ngcontent-%COMP%]{padding:0 0 1rem 1rem;display:block}.header-title--left[_ngcontent-%COMP%]{color:#202967;width:50%;display:inline-block}.header-title--right[_ngcontent-%COMP%]{width:50%;display:inline-block;font-size:14px;vertical-align:middle}.header-title--right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}.header-title--sufix[_ngcontent-%COMP%]{font-size:14px;color:#9b9b9b}.header-right[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}@media only screen and (max-width: 720px){.header[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:center}.header-title[_ngcontent-%COMP%]{margin:10px 0}}"] });
SubHeaderComponent.ctorParameters = () => [];
SubHeaderComponent.propDecorators = {
    settingsSubHeader: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SubHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'mln-sub-header',
                template: "<div class=\"header\" *ngIf=\"settingsSubHeader\">\r\n    <!-- button -->\r\n    <div class=\"header-right\" *ngIf=\"settingsSubHeader.buttonSettings\">\r\n        <mln-button [text]=\"settingsSubHeader.buttonSettings?.text\" [classButton]=\"settingsSubHeader.buttonSettings?.class\" [isSquare]=\"settingsSubHeader.buttonSettings?.isSquare\" [isDisabled]=\"settingsSubHeader.buttonSettings?.isDisabled\" [callback]=\"settingsSubHeader.buttonSettings?.callback\"\r\n            [type]=\"settingsSubHeader.buttonSettings?.type\"></mln-button>\r\n    </div>\r\n    <!-- title -->\r\n    <div class=\"header-title\">\r\n        <div class=\"header-title--left\">\r\n            {{ settingsSubHeader.title }}\r\n            <span class=\"header-title--sufix\" *ngIf=\"settingsSubHeader.sufix\"> {{ settingsSubHeader.sufix.amount }} {{ settingsSubHeader.sufix.text }}</span>\r\n        </div>\r\n        <div class=\"header-title--right\">\r\n            <span class=\"\">{{ settingsSubHeader.rightTitle }}</span>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [".header{border-bottom:1px solid;color:#bcbfd1;font-family:\"GillSansBold\";font-size:24px}.header-title{padding:0 0 1rem 1rem;display:block}.header-title--left{color:#202967;width:50%;display:inline-block}.header-title--right{width:50%;display:inline-block;font-size:14px;vertical-align:middle}.header-title--right span{float:right}.header-title--sufix{font-size:14px;color:#9b9b9b}.header-right{display:flex;justify-content:flex-end}@media only screen and (max-width: 720px){.header{flex-wrap:wrap;justify-content:center}.header-title{margin:10px 0}}\n"]
            }]
    }], function () { return []; }, { settingsSubHeader: [{
            type: Input
        }] }); })();

class SubHeaderModule {
}
SubHeaderModule.ɵfac = function SubHeaderModule_Factory(t) { return new (t || SubHeaderModule)(); };
SubHeaderModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: SubHeaderModule });
SubHeaderModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            ButtonModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SubHeaderModule, [{
        type: NgModule,
        args: [{
                declarations: [SubHeaderComponent],
                imports: [
                    CommonModule,
                    ButtonModule,
                ],
                exports: [SubHeaderComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SubHeaderModule, { declarations: function () { return [SubHeaderComponent]; }, imports: function () { return [CommonModule, ButtonModule]; }, exports: function () { return [SubHeaderComponent]; } }); })();

class HeritageModel {
    constructor() {
        this.currency = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
        });
    }
    getChartOptions(settings) {
        return {
            dataLabels: {
                enabled: false,
            },
            tooltip: {
                custom: ({ series, seriesIndex, w }) => {
                    const percent = ((series[seriesIndex] * 100) /
                        settings.total).toFixed(2);
                    return `
                  <div class="tooltipApxCustom">
                      <div class="tooltipheadCustom">
                          <span class="title-first">${w.globals.labels[seriesIndex]}</span>
                          <span class="title-first-amount" style="color: ${w.globals.colors[seriesIndex]}">${percent} %</span>
                      </div>
                      <span class="divider"></span>
                      <div class="tooltipfooterCustom">
                          <span class="title-second">${settings.popupText}</span>
                          <span class="total">${this.currency.format(series[seriesIndex])}</span>
                      </div>
                  </div>`;
                },
            },
            colors: settings.colors,
            series: settings.series,
            labels: settings.labels,
            chart: {
                width: '100%',
                height: 330,
                type: 'donut',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 1000,
                    },
                },
            },
            stroke: {
                lineCap: 'round',
                width: 2,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '90%',
                    },
                    expandOnClick: false,
                },
            },
            legend: { show: false },
        };
    }
    getSettingsToggle() {
        return { first: 'Gráfico', second: 'Detalle' };
    }
    getSettingsCheckBox() {
        const testObserver = new Subject();
        return [
            {
                title: 'Mediolanum',
                checked: true,
                id: 'medioLanum',
                callBack: testObserver,
            },
            {
                title: 'Otras entidades',
                checked: false,
                id: 'otherEntities',
                callBack: testObserver,
            },
            {
                title: 'Todo el patrimonio',
                checked: false,
                id: 'allHeritage',
                callBack: testObserver,
            },
        ];
    }
}

class ChartCircleComponent {
    constructor() {
        this.settingsCheckBox = [];
    }
    set settingsChart(settingsChart) {
        this.heritageModel = new HeritageModel();
        this.chartOptions = this.heritageModel.getChartOptions(settingsChart);
        this.total = settingsChart.total;
        const colors = settingsChart.colors;
        const labels = settingsChart.labels;
        this.settingsCheckBox = labels.map((label, i) => {
            return {
                color: colors[i],
                title: label,
                checked: true,
                id: null,
                callBack: settingsChart.callBack,
            };
        });
    }
    ngOnInit() { }
}
ChartCircleComponent.ɵfac = function ChartCircleComponent_Factory(t) { return new (t || ChartCircleComponent)(); };
ChartCircleComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ChartCircleComponent, selectors: [["mln-chart-circle"]], viewQuery: function ChartCircleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c7, 5);
        ɵngcc0.ɵɵviewQuery(ButtonComponent, 5);
        ɵngcc0.ɵɵviewQuery(CheckBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.chart = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.customButton = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.customChk = _t.first);
    } }, inputs: { settingsChart: "settingsChart", title: "title", subText: "subText", settingsButton: "settingsButton" }, decls: 21, vars: 16, consts: [[1, "title-wrapper"], [1, "title"], [1, "amount"], [1, "chart-wrapper"], [1, "left-space"], [1, "chart"], [3, "legend", "dataLabels", "plotOptions", "stroke", "tooltip", "colors", "series", "labels", "chart"], ["chart", ""], [1, "legend"], [1, "legend-ul"], [4, "ngFor", "ngForOf"], [1, "button-wrapper"], [3, "text", "classButton", "isDisabled"], ["customButton", ""], [1, "filter-msg"], [3, "settings"], ["customChk", ""]], template: function ChartCircleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "section");
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "div", 0);
        ɵngcc0.ɵɵelementStart(3, "h3", 1);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "span", 2);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 3);
        ɵngcc0.ɵɵelement(8, "div", 4);
        ɵngcc0.ɵɵelementStart(9, "div", 5);
        ɵngcc0.ɵɵelement(10, "apx-chart", 6, 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "div", 8);
        ɵngcc0.ɵɵelementStart(13, "ul", 9);
        ɵngcc0.ɵɵtemplate(14, ChartCircleComponent_li_14_Template, 3, 1, "li", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(15, "div");
        ɵngcc0.ɵɵelementStart(16, "div", 11);
        ɵngcc0.ɵɵelement(17, "mln-button", 12, 13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(19, "div", 14);
        ɵngcc0.ɵɵtext(20);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.heritageModel.currency.format(ctx.total));
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("legend", ctx.chartOptions.legend)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("colors", ctx.chartOptions.colors)("series", ctx.chartOptions.series)("labels", ctx.chartOptions.labels)("chart", ctx.chartOptions.chart);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.settingsCheckBox);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("text", ctx.settingsButton.text)("classButton", ctx.settingsButton.classButton)("isDisabled", ctx.settingsButton.isDisabled);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.subText, " ");
    } }, directives: [ɵngcc14.ChartComponent, ɵngcc1.NgForOf, ButtonComponent, CheckBoxComponent], styles: [".title-wrapper[_ngcontent-%COMP%]{margin:50px auto;text-align:center;width:100%}.title-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#212b65;font-size:18px;font-family:\"GillSansBold\"}.title-wrapper[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{font-size:36px;color:#202967;font-family:\"GillSansBold\"}.chart-wrapper[_ngcontent-%COMP%]{display:flex}.chart-wrapper[_ngcontent-%COMP%]   .left-space[_ngcontent-%COMP%]{width:25%}.chart-wrapper[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]{width:50%}.chart-wrapper[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]{width:25%;box-sizing:border-box;padding-right:20px}.chart-wrapper[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .legend-ul[_ngcontent-%COMP%]{list-style:none;display:flex;flex-direction:column}.chart-wrapper[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .legend-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;margin:5px 0;font-size:14px;font-family:\"GillSansBold\";color:#4e5c63}.chart-wrapper[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .legend-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding-right:5px}.chart-wrapper[_ngcontent-%COMP%]   .filter-msg[_ngcontent-%COMP%]{color:#4e5c63;font-size:14px;line-height:1.15;font-family:\"GillSans\";padding:10px 0}.chart-wrapper[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]{text-align:center;width:100%;margin:15px auto}@media only screen and (max-width: 720px){.chart-wrapper[_ngcontent-%COMP%]{flex-wrap:wrap}.chart-wrapper[_ngcontent-%COMP%]   .left-space[_ngcontent-%COMP%]{display:none}.chart-wrapper[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]{width:100%}.chart-wrapper[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]{width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:center;text-align:center;align-items:center}}"] });
ChartCircleComponent.ctorParameters = () => [];
ChartCircleComponent.propDecorators = {
    chart: [{ type: ViewChild, args: ['chart', { static: false },] }],
    customButton: [{ type: ViewChild, args: [ButtonComponent, { static: false },] }],
    customChk: [{ type: ViewChild, args: [CheckBoxComponent, { static: false },] }],
    title: [{ type: Input }],
    subText: [{ type: Input }],
    settingsChart: [{ type: Input }],
    settingsButton: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ChartCircleComponent, [{
        type: Component,
        args: [{
                selector: 'mln-chart-circle',
                template: "<section>\r\n    <div>\r\n        <div class=\"title-wrapper\">\r\n            <h3 class=\"title\">{{ title }}</h3>\r\n            <span class=\"amount\">{{ this.heritageModel.currency.format(total) }}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"chart-wrapper\">\r\n        <div class=\"left-space\"></div>\r\n        <div class=\"chart\">\r\n            <apx-chart #chart [legend]=\"chartOptions.legend\" [dataLabels]=\"chartOptions.dataLabels\" [plotOptions]=\"chartOptions.plotOptions\" [stroke]=\"chartOptions.stroke\" [tooltip]=\"chartOptions.tooltip\" [colors]=\"chartOptions.colors\" [series]=\"chartOptions.series\"\r\n                [labels]=\"chartOptions.labels\" [chart]=\"chartOptions.chart\">\r\n            </apx-chart>\r\n        </div>\r\n        <div class=\"legend\">\r\n            <ul class=\"legend-ul\">\r\n                <li *ngFor=\"let item of settingsCheckBox\">\r\n                    <mln-check-box #customChk [settings]=\"item\"></mln-check-box>\r\n                </li>\r\n            </ul>\r\n            <div>\r\n                <div class=\"button-wrapper\">\r\n                    <mln-button #customButton [text]=\"settingsButton.text\" [classButton]=\"settingsButton.classButton\" [isDisabled]=\"settingsButton.isDisabled\"></mln-button>\r\n                </div>\r\n                <div class=\"filter-msg\">\r\n                    {{ subText }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>",
                styles: [".title-wrapper{margin:50px auto;text-align:center;width:100%}.title-wrapper .title{color:#212b65;font-size:18px;font-family:\"GillSansBold\"}.title-wrapper .amount{font-size:36px;color:#202967;font-family:\"GillSansBold\"}.chart-wrapper{display:flex}.chart-wrapper .left-space{width:25%}.chart-wrapper .chart{width:50%}.chart-wrapper .legend{width:25%;box-sizing:border-box;padding-right:20px}.chart-wrapper .legend .legend-ul{list-style:none;display:flex;flex-direction:column}.chart-wrapper .legend .legend-ul li{display:flex;align-items:center;margin:5px 0;font-size:14px;font-family:\"GillSansBold\";color:#4e5c63}.chart-wrapper .legend .legend-ul li>*{padding-right:5px}.chart-wrapper .filter-msg{color:#4e5c63;font-size:14px;line-height:1.15;font-family:\"GillSans\";padding:10px 0}.chart-wrapper .button-wrapper{text-align:center;width:100%;margin:15px auto}@media only screen and (max-width: 720px){.chart-wrapper{flex-wrap:wrap}.chart-wrapper .left-space{display:none}.chart-wrapper .chart{width:100%}.chart-wrapper .legend{width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:center;text-align:center;align-items:center}}\n"]
            }]
    }], function () { return []; }, { settingsChart: [{
            type: Input
        }], chart: [{
            type: ViewChild,
            args: ['chart', { static: false }]
        }], customButton: [{
            type: ViewChild,
            args: [ButtonComponent, { static: false }]
        }], customChk: [{
            type: ViewChild,
            args: [CheckBoxComponent, { static: false }]
        }], title: [{
            type: Input
        }], subText: [{
            type: Input
        }], settingsButton: [{
            type: Input
        }] }); })();

class ChartCircleModule {
}
ChartCircleModule.ɵfac = function ChartCircleModule_Factory(t) { return new (t || ChartCircleModule)(); };
ChartCircleModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: ChartCircleModule });
ChartCircleModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, ButtonModule, NgApexchartsModule, CheckBoxModule], ButtonModule, NgApexchartsModule, CheckBoxModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ChartCircleModule, [{
        type: NgModule,
        args: [{
                declarations: [ChartCircleComponent],
                imports: [CommonModule, ButtonModule, NgApexchartsModule, CheckBoxModule],
                exports: [
                    ChartCircleComponent,
                    ButtonModule,
                    NgApexchartsModule,
                    CheckBoxModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ChartCircleModule, { declarations: function () { return [ChartCircleComponent]; }, imports: function () { return [CommonModule, ButtonModule, NgApexchartsModule, CheckBoxModule]; }, exports: function () { return [ChartCircleComponent, ButtonModule, NgApexchartsModule, CheckBoxModule]; } }); })();

class AccordionComponent {
    constructor() {
        this.image = '/assets/img/cliente-real.png';
        this.closeAction = new EventEmitter();
        this.openAction = new EventEmitter();
    }
    /**
     * @description Initialize accordion content.
     *
     */
    ngAfterContentInit() {
        this.AccordionTabList.forEach((tabInstance, i) => this.initAccordionTabs(tabInstance, i));
        this.AccordionTabListArray = this.AccordionTabList.toArray();
    }
    /**
     * @description Upadate index of accordion.
     * @param accordionTab any.
     * @param index index for the tab.
     */
    initAccordionTabs(accodionTab, index) {
        accodionTab.id = index;
    }
    ngOnDestroy() { }
}
AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(); };
AccordionComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: AccordionComponent, selectors: [["mln-accordion"]], contentQueries: function AccordionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, AccordionPanelComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.AccordionTabList = _t);
    } }, inputs: { multi: "multi" }, outputs: { closeAction: "closeAction", openAction: "openAction" }, ngContentSelectors: _c3, decls: 2, vars: 0, consts: [["role", "presentation", 1, ""]], template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [""] });
AccordionComponent.ctorParameters = () => [];
AccordionComponent.propDecorators = {
    multi: [{ type: Input }],
    closeAction: [{ type: Output }],
    openAction: [{ type: Output }],
    AccordionTabList: [{ type: ContentChildren, args: [forwardRef(() => AccordionPanelComponent),] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AccordionComponent, [{
        type: Component,
        args: [{
                selector: 'mln-accordion',
                template: "<div class=\"\" role=\"presentation\">\r\n    <ng-content></ng-content>\r\n</div>",
                styles: [""]
            }]
    }], function () { return []; }, { closeAction: [{
            type: Output
        }], openAction: [{
            type: Output
        }], multi: [{
            type: Input
        }], AccordionTabList: [{
            type: ContentChildren,
            args: [forwardRef(() => AccordionPanelComponent)]
        }] }); })();

class AccordionPanelComponent {
    constructor(accordion) {
        this.accordion$ = accordion;
    }
    ngOnInit() {
        this.iconToggle = this.active;
    }
    /**
     * @description Find the index of actual tab.
     *  @return index of active tab
     */
    findTabIndex() {
        const index = this.accordion$.AccordionTabListArray.findIndex((accordion) => accordion === this);
        return index;
    }
    /**
     * @description Enable/disable the collapse component
     *  @param event Event
     */
    toggleCollapse(event) {
        if (!this.disabled) {
            this.animate = true;
            const index = this.findTabIndex();
            if (!this.accordion$.multi && !this.active) {
                this.accordion$.AccordionTabListArray.forEach((accordion) => {
                    accordion.active = false;
                    accordion.iconToggle = false;
                });
            }
            if (!this.active) {
                this.accordion$.openAction.emit({ originalEvent: event, index });
            }
            else {
                this.accordion$.closeAction.emit({ originalEvent: event, index });
            }
            this.active = !this.active;
            this.iconToggle = !this.iconToggle;
        }
        event.preventDefault();
    }
    /**
     * @description Turn off the animation when the collapse ends.
     */
    onCollapseDone() {
        this.animate = false;
    }
    ngOnDestroy() {
        var _a, _b;
        if ((_b = (_a = this.accordion$) === null || _a === void 0 ? void 0 : _a.AccordionTabListArray) === null || _b === void 0 ? void 0 : _b.length) {
            this.accordion$.AccordionTabListArray.splice(this.findTabIndex(), 1);
        }
    }
}
AccordionPanelComponent.ɵfac = function AccordionPanelComponent_Factory(t) { return new (t || AccordionPanelComponent)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => AccordionComponent))); };
AccordionPanelComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: AccordionPanelComponent, selectors: [["mln-accordion-tab"]], inputs: { active: "active", imageIconUrl: "imageIconUrl", hideToggle: "hideToggle", title: "title", disabled: "disabled", hide: "hide" }, ngContentSelectors: _c11, decls: 12, vars: 18, consts: [[1, "mln-accordion-panel", 3, "ngClass", "hidden"], [1, "mln-accordion-panel__header", 3, "click"], ["role", "tab", 1, "mln-accordion-panel__action", 3, "click", "keydown.space"], [1, "block-left"], ["class", "image-icon block-left", 3, "ngStyle", 4, "ngIf"], ["role", "region", 1, "mln-accordion-panel__body"], [1, "mln-accordion-panel__content"], [1, "image-icon", "block-left", 3, "ngStyle"]], template: function AccordionPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c9);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵlistener("click", function AccordionPanelComponent_Template_div_click_1_listener() { return ctx.disabled ? null : ctx.iconToggle; });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵlistener("click", function AccordionPanelComponent_Template_div_click_2_listener($event) { return ctx.toggleCollapse($event); })("keydown.space", function AccordionPanelComponent_Template_div_keydown_space_2_listener($event) { return ctx.toggleCollapse($event); });
        ɵngcc0.ɵɵelementStart(3, "mat-icon", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, AccordionPanelComponent_span_5_Template, 1, 3, "span", 4);
        ɵngcc0.ɵɵelementStart(6, "span");
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 5);
        ɵngcc0.ɵɵlistener("@accordionTabContent.done", function AccordionPanelComponent_Template_div_animation_accordionTabContent_done_9_listener() { return ctx.onCollapseDone(); });
        ɵngcc0.ɵɵelementStart(10, "div", 6);
        ɵngcc0.ɵɵprojection(11, 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(15, _c10, ctx.disabled, ctx.active))("hidden", ctx.hide);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵattribute("tabindex", ctx.disabled ? -1 : 0)("id", "header-accordion-tab-" + ctx.id)("aria-controls", "content-accordion-tab-" + ctx.id)("aria-expanded", ctx.active);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("toggle-icon--hidden", ctx.hideToggle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.iconToggle ? "keyboard_arrow_down" : "keyboard_arrow_up");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.imageIconUrl || ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("@accordionTabContent", ctx.active ? "visible" : "hidden");
        ɵngcc0.ɵɵattribute("id", "content-accordion-tab-" + ctx.id)("aria-hidden", !ctx.active)("aria-labelledby", "content-accordion-tab-" + ctx.id);
    } }, directives: [ɵngcc1.NgClass, ɵngcc3.MatIcon, ɵngcc1.NgIf, ɵngcc1.NgStyle], styles: [".mln-accordion-panel__header[_ngcontent-%COMP%]{background:#f1f5fc;position:relative}.mln-accordion-panel__header[_ngcontent-%COMP%]:hover{background:#edf0f5}.mln-accordion-panel__action[_ngcontent-%COMP%]{padding:1rem;outline:0px solid transparent;display:block;cursor:pointer}.mln-accordion-panel__action[_ngcontent-%COMP%]   .toggle-icon--hidden[_ngcontent-%COMP%]{display:none}.mln-accordion-panel__action[_ngcontent-%COMP%]   .block-left[_ngcontent-%COMP%]{margin:0 2px;vertical-align:middle}.mln-accordion-panel__action[_ngcontent-%COMP%]   .image-icon[_ngcontent-%COMP%]{display:contents}.mln-accordion-panel__action[_ngcontent-%COMP%]   .image-icon[_ngcontent-%COMP%]:before{content:var(--image);transform:scale(.5);display:inline-block;vertical-align:middle}.mln-accordion-panel__body[_ngcontent-%COMP%]{overflow:hidden}.mln-accordion-panel__content[_ngcontent-%COMP%]{margin:0 auto;background:#e2e6ee}.mln-accordion-panel--disabled[_ngcontent-%COMP%]{background:#e2e2e22e}.mln-accordion-panel--disabled[_ngcontent-%COMP%]   .mln-accordion-panel__header[_ngcontent-%COMP%]{background:inherit}.mln-accordion-panel--disabled[_ngcontent-%COMP%]   .mln-accordion-panel__action[_ngcontent-%COMP%]{cursor:default}.mln-accordion-panel--disabled[_ngcontent-%COMP%]   .mln-accordion-panel__action[_ngcontent-%COMP%]:hover, .mln-accordion-panel--disabled[_ngcontent-%COMP%]   .mln-accordion-panel__action[_ngcontent-%COMP%]:focus, .mln-accordion-panel--disabled[_ngcontent-%COMP%]   .mln-accordion-panel__action[_ngcontent-%COMP%]:visited{text-decoration:none}"], data: { animation: [
            trigger('accordionTabContent', [
                state('hidden', style({
                    height: '0'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible <=> hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            ]),
        ] } });
AccordionPanelComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => AccordionComponent),] }] }
];
AccordionPanelComponent.propDecorators = {
    imageIconUrl: [{ type: Input }],
    hideToggle: [{ type: Input }],
    title: [{ type: Input }],
    active: [{ type: Input }],
    disabled: [{ type: Input }],
    hide: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AccordionPanelComponent, [{
        type: Component,
        args: [{
                selector: 'mln-accordion-tab',
                template: "<div class=\"mln-accordion-panel\" [ngClass]=\"{'mln-accordion-panel--disabled': disabled, 'mln-accordion-panel--active': active}\" [hidden]=\"hide\">\r\n    <div class=\"mln-accordion-panel__header\" (click)=\"disabled ? null : iconToggle\">\r\n        <div class=\"mln-accordion-panel__action\" [attr.tabindex]=\"disabled ? -1 : 0\" [attr.id]=\"'header-accordion-tab-' + id\" [attr.aria-controls]=\"'content-accordion-tab-' + id\" role=\"tab\" [attr.aria-expanded]=\"active\" (click)=\"toggleCollapse($event)\" (keydown.space)=\"toggleCollapse($event)\">\r\n            <mat-icon class=\"block-left\" [class.toggle-icon--hidden]=\"hideToggle\">{{iconToggle ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</mat-icon>\r\n            <span *ngIf=\"imageIconUrl || title\" class=\"image-icon block-left\" [ngStyle]=\"{'background-image': 'url(' + imageIconUrl + ')'}\"></span>\r\n            <span>{{ title }}</span>\r\n            <ng-content select=\"mln-accordion-header\"></ng-content>\r\n        </div>\r\n    </div>\r\n    <div class=\"mln-accordion-panel__body\" [attr.id]=\"'content-accordion-tab-' + id\" [@accordionTabContent]=\"active ? 'visible' : 'hidden'\" (@accordionTabContent.done)=\"onCollapseDone()\" role=\"region\" [attr.aria-hidden]=\"!active\" [attr.aria-labelledby]=\"'content-accordion-tab-' + id\">\r\n        <div class=\"mln-accordion-panel__content\">\r\n            <ng-content select=\"mln-accordion-content\"></ng-content>\r\n        </div>\r\n    </div>\r\n</div>",
                animations: [
                    trigger('accordionTabContent', [
                        state('hidden', style({
                            height: '0'
                        })),
                        state('visible', style({
                            height: '*'
                        })),
                        transition('visible <=> hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    ]),
                ],
                styles: [".mln-accordion-panel__header{background:#f1f5fc;position:relative}.mln-accordion-panel__header:hover{background:#edf0f5}.mln-accordion-panel__action{padding:1rem;outline:0px solid transparent;display:block;cursor:pointer}.mln-accordion-panel__action .toggle-icon--hidden{display:none}.mln-accordion-panel__action .block-left{margin:0 2px;vertical-align:middle}.mln-accordion-panel__action .image-icon{display:contents}.mln-accordion-panel__action .image-icon:before{content:var(--image);transform:scale(.5);display:inline-block;vertical-align:middle}.mln-accordion-panel__body{overflow:hidden}.mln-accordion-panel__content{margin:0 auto;background:#e2e6ee}.mln-accordion-panel--disabled{background:#e2e2e22e}.mln-accordion-panel--disabled .mln-accordion-panel__header{background:inherit}.mln-accordion-panel--disabled .mln-accordion-panel__action{cursor:default}.mln-accordion-panel--disabled .mln-accordion-panel__action:hover,.mln-accordion-panel--disabled .mln-accordion-panel__action:focus,.mln-accordion-panel--disabled .mln-accordion-panel__action:visited{text-decoration:none}\n"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => AccordionComponent)]
            }] }]; }, { active: [{
            type: Input
        }], imageIconUrl: [{
            type: Input
        }], hideToggle: [{
            type: Input
        }], title: [{
            type: Input
        }], disabled: [{
            type: Input
        }], hide: [{
            type: Input
        }] }); })();

class AccordionModule {
}
AccordionModule.ɵfac = function AccordionModule_Factory(t) { return new (t || AccordionModule)(); };
AccordionModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: AccordionModule });
AccordionModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
        ], MatIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AccordionModule, [{
        type: NgModule,
        args: [{
                declarations: [AccordionComponent, AccordionPanelComponent],
                imports: [
                    CommonModule,
                    MatIconModule,
                ],
                exports: [
                    AccordionComponent,
                    AccordionPanelComponent,
                    MatIconModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AccordionModule, { declarations: function () { return [AccordionComponent, AccordionPanelComponent]; }, imports: function () { return [CommonModule,
        MatIconModule]; }, exports: function () { return [AccordionComponent, AccordionPanelComponent, MatIconModule]; } }); })();

class ChartBarComponent {
    constructor() { }
    ngOnInit() { }
}
ChartBarComponent.ɵfac = function ChartBarComponent_Factory(t) { return new (t || ChartBarComponent)(); };
ChartBarComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ChartBarComponent, selectors: [["mln-chart-bar"]], viewQuery: function ChartBarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c12, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.chart = _t.first);
    } }, inputs: { chartOptions: "chartOptions" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis"], ["chart2", ""]], template: function ChartBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ChartBarComponent_section_0_Template, 3, 10, "section", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.chartOptions && (ctx.chartOptions == null ? null : ctx.chartOptions.series == null ? null : ctx.chartOptions.series.length));
    } }, directives: [ɵngcc1.NgIf, ɵngcc14.ChartComponent], styles: [""] });
ChartBarComponent.ctorParameters = () => [];
ChartBarComponent.propDecorators = {
    chart: [{ type: ViewChild, args: ['chart2', { static: false },] }],
    chartOptions: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ChartBarComponent, [{
        type: Component,
        args: [{
                selector: 'mln-chart-bar',
                template: "<section *ngIf=\"chartOptions && chartOptions?.series?.length\">\r\n    <apx-chart #chart2 [series]=\"chartOptions.series\" [chart]=\"chartOptions.chart\" [dataLabels]=\"chartOptions.dataLabels\" [plotOptions]=\"chartOptions.plotOptions\" [yaxis]=\"chartOptions.yaxis\" [legend]=\"chartOptions.legend\" [fill]=\"chartOptions.fill\" [stroke]=\"chartOptions.stroke\"\r\n        [tooltip]=\"chartOptions.tooltip\" [xaxis]=\"chartOptions.xaxis\"></apx-chart>\r\n</section>",
                styles: [""]
            }]
    }], function () { return []; }, { chart: [{
            type: ViewChild,
            args: ['chart2', { static: false }]
        }], chartOptions: [{
            type: Input
        }] }); })();

class ChartBarModule {
}
ChartBarModule.ɵfac = function ChartBarModule_Factory(t) { return new (t || ChartBarModule)(); };
ChartBarModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: ChartBarModule });
ChartBarModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, NgApexchartsModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ChartBarModule, [{
        type: NgModule,
        args: [{
                declarations: [ChartBarComponent],
                imports: [CommonModule, NgApexchartsModule],
                exports: [ChartBarComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ChartBarModule, { declarations: function () { return [ChartBarComponent]; }, imports: function () { return [CommonModule, NgApexchartsModule]; }, exports: function () { return [ChartBarComponent]; } }); })();

// components

/*
 * Public API Surface of app
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionModule, AccordionPanelComponent, AlertComponent, AlertModule, BigButtonModule, BoxItemsComponent, BoxItemsModule, ButtonBigComponent, ButtonComponent, ButtonDoubleComponent, ButtonModule, ChartBarComponent, ChartBarModule, ChartCircleComponent, ChartCircleModule, CheckBoxComponent, CheckBoxModule, CustomPaginator, CustomerInfoComponent, CustomerInfoModule, DataTableModule, DatatableComponent, DoubleButtonModule, HeaderComponent, HeaderModule, ProfileTableComponent, ProfileTableModule, ProgressBarComponent, ProgressBarModule, ProposalMessageComponent, ProposalMessageModule, RadioButtonListComponent, RadioButtonListModule, SearchInputComponent, SearchInputModule, SelectComponent, SelectModule, SharedModule, SliderToggleComponent, SliderToggleModule, StepComponent, StepperComponent, StepperModule, SubHeaderComponent, SubHeaderModule };

//# sourceMappingURL=arquetipo-storybook.js.map