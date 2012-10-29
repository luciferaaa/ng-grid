/// <reference path="../../lib/jquery-1.8.2.min" />
/// <reference path="../../lib/angular.js" />
/// <reference path="../constants.js"/>
/// <reference path="../namespace.js" />
/// <reference path="../navigation.js"/>
/// <reference path="../utils.js"/>

ng.defaultGridTemplate = function () {
    var b = new ng.utils.StringBuilder();
    b.append('<div class="ngGrid">');
    b.append('	 <div class="ngTopPanel" ng-size="headerDim">');
    b.append(    	'<div class="ngHeaderContainer" ng-size="headerDim">');
    b.append(        	'<div class="ngHeaderScroller" ng-size="headerScrollerDim">');
    
    //b.append(            '<div ng-show="displayRowIndex" class="ngHeaderCell col0 ngNoSort">');
    //b.append(                '<div title="Filter Results" class="ngFilterBtn openBtn" ng-hide="filterVisible" ng-click="showFilter_Click()"></div>');
    //b.append(                '<div title="Close" class="ngFilterBtn closeBtn" ng-show="filterVisible" ng-click="showFilter_Click()"></div>');
    //b.append(                '<div title="Clear Filters" class="ngFilterBtn clearBtn" ng-show="filterVisible" ng-click="clearFilter_Click()"></div>');
    //b.append(            '</div>');
    //b.append(            '<div ng-show="displaySelectionCheckbox" class="ngSelectionCell ngHeaderCell col1 ngNoSort">');
    //b.append(                '<input type="checkbox" ng-checked="toggleSelectAll()"/>');
    //b.append(            '</div>');

    b.append(             	'<div unselectable="on" ng-repeat="col in columns" class="ngHeaderCell {{columnClass($index)}}" ng-style="headerCellSize(col)">');
    b.append(                 	'<div ng-click="col.sort()" ng-class="{ \'ngSorted\': !noSortVisible }">');
    b.append(                   	 '<span class="ngHeaderText">{{col.displayName}}</span>');
    b.append(                   	 '<div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div>');
    b.append(                   	 '<div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div>');
    b.append(                	 '</div>');
    b.append(                	 '<div class="ngHeaderGrip" ng-show="allowResize" ng-mouseDown="gripOnMouseDown()"></div>');
    b.append(                 	 '<div ng-show="_filterVisible">');
    b.append(                     	'<input type="text" ng-model="col.filter" style="width: 80%" tabindex="1" />');
    b.append(                 	 '</div>');
    b.append(             	 '</div>');
    b.append(        	 '</div>');
    b.append(    	 '</div>');
    b.append(	 '</div>');
    b.append(	 '<div class="ngViewport" ng-size="viewportDim">');
    b.append(    	 '<div class="ngCanvas" style="height: {{canvasHeight()}};">'); 
    b.append(            '<div style="height: 30px; top: {{row.offsetTop}}px; width: {{totalRowWidth()}}" ng-repeat="row in renderedRows" ng-click="row.toggleSelected(row,$event)" ng-class="{\'selected\': row.selected}" class="ngRow" ng-class-odd="row.class()" ng-class-even="row.class()">');
    b.append(        	    '<div ng-repeat="col in columns" style="width: {{col.width}}px" class="ngCell {{columnClass($index)}} {{col.cellClass}}">{{row.entity[col.field]}}</div>');
    b.append(        	 '</div>');
    b.append(   	 '</div>');
    b.append(	 '</div>');
    b.append(	 '<div class="ngFooterPanel" ng-size="footerDim">');
    b.append(   	 '<div class="ngTotalSelectContainer" ng-show="footerVisible">');
    b.append(       	 '<div class="ngFooterTotalItems" ng-class="{\'ngNoMultiSelect\': !multiSelect}" >');
    b.append(          		 '<span class="ngLabel">Total Items: {{totalItemsLength()}}</span>');
    b.append(       	 '</div>');
    b.append(       	 '<div class="ngFooterSelectedItems" ng-show="multiSelect">');
    b.append(       	 '<span class="ngLabel">Selected Items: {{selectedItems.length}}</span>');
    b.append(       	 '</div>');
    b.append(   	 '</div>');
    //b.append(   	 '<div class="ngPagerContainer" ng-show="pagerVisible && footerVisible" ng-class="{\'ngNoMultiSelect\': !multiSelect}">');
    //b.append(       	 '<div style="float: right;">');
    //b.append(           	 '<div class="ngRowCountPicker">');
    //b.append(               	 '<span class="ngLabel">Rows:</span>');
    //b.append(               	 '<select ng-model="selectedPageSize">');
    //b.append(                   	 '<option ng-repeat="size in pageSizes">{{size}}</option>');
    //b.append(               	 '</select>');
    //b.append(           	 '</div>');
    //b.append(           	 '<div class="ngPagerControl" style="float: left; min-width: 135px;">');
    //b.append(               	 '<input class="ngPagerFirst" type="button" ng-click="pageToFirst" ng-disable="!canPageBackward" title="First Page"/>');
    //b.append(               	 '<input class="ngPagerPrev" type="button"  ng-click="pageBackward" ng-disable="!canPageBackward" title="Previous Page"/>');
    //b.append(               	 '<input class="ngPagerCurrent" type="text" ng-model="protectedCurrentPage" ng-disable="{ maxPages() < 1 }" />');
    //b.append(               	 '<input class="ngPagerNext" type="button"  ng-click="pageForward" ng-disable="!canPageForward" title="Next Page"/>');
    //b.append(               	 '<input class="ngPagerLast" type="button"  ng-click="pageToLast" ng-disable="!canPageForward" title="Last Page"/>');
    //b.append(           	 '</div>');
    //b.append(       	 '</div>');
    //b.append(   	 '</div>');
    b.append(	 '</div>');
    b.append('</div>');
    return b.toString();
};