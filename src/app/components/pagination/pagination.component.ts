import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <div class="items-per-page">
      <label for="perPageSelect">Items per page:</label>
      <select id="perPageSelect" [(ngModel)]="itemsPerPage" (change)="onItemsPerPageChange()">
        <option *ngFor="let option of perPageOptions" [value]="option">{{ option }}</option>
      </select>
    </div>

    <div>
      <ul class="pagination">
        <li class="page-item" (click)="onPrevious()">Previous</li>
        <ng-container *ngFor="let page of getPageArray()">
          <li class="page-item" [class.active]="currentPage === page">
            <a class="page-link" (click)="onPageChange(page)">{{ page }}</a>
          </li>
        </ng-container>
        <li class="page-item" (click)="onNext()">Next</li>
      </ul>
    </div>
  `,
  styles: [`
    /* Add your pagination styles here */
    .pagination {
      list-style: none;
      display: flex;
      margin: 10px 0;
    }

    .page-item {
      cursor: pointer;
      margin: 0 5px;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    .page-item.active {
      background-color: #007bff;
      color: white;
    }
  `],
})
export class PaginationComponent {
  @Input() itemsPerPage!: number;
  @Output() itemsPerPageChange = new EventEmitter<number>();
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 3;
  @Output() pageChange = new EventEmitter<number>();

  perPageOptions: number[] = [10, 25, 50, 100];

  onItemsPerPageChange(): void {
    this.itemsPerPageChange.emit(this.itemsPerPage);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  onPrevious(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  onNext(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  getPageArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }
}
