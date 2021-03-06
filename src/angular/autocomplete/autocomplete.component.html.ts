export const template = `
<div class="sdc-autocomplete-container" [attr.data-tests-id]="testId">
    <sdc-filter-bar
        [placeHolder]="placeHolder"
        [label]="label"
        [value]="searchQuery"
        [testId]="testId + '-filter-bar'"
        (valueChange)="onSearchQueryChanged($event)">
    </sdc-filter-bar>
    
    <dropdown-results *ngIf="autoCompleteResults.length" [options]="autoCompleteResults" (onItemSelected)="onItemSelected($event)"></dropdown-results>
</div>
`;
