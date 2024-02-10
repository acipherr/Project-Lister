// repos-detail-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repos-detail-page',
  templateUrl: './repos-detail-page.component.html',
  styleUrls: ['./repos-detail-page.component.scss'],
})
export class ReposDetailPageComponent implements OnInit {
  username!: string;
  repos: any[] = [];
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
  pagedRepos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private githubService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['id'];
      console.log('ReposDetailPageComponent initialized with username', this.username);
    });

    this.loadRepositories();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadRepositories(page);
  }

  onItemsPerPageChange(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.loadRepositories();
  }

  private loadRepositories(page: number = 1): void {
    this.githubService.getUserRepos(this.username, page, this.itemsPerPage).subscribe({
      complete: () => {
        console.log('Repositories retrieved successfully!');
      },
      error: (error) => {
        console.error('Error retrieving repositories:', error);
        alert('Error! User repositories not found.');
        this.router.navigate(['repos', this.username]);
      },
      next: (data: any[] = []) => {
        console.log('Repositories data received:', data);
        this.repos = data.map((repo) => {
          return {
            name: repo.name,
            description: repo.description,
            language: repo.language,
          };
        });
        console.log('Processed Repositories:', this.repos);

        // Calculate total pages based on the response length
        this.totalPages = Math.ceil(this.repos.length / this.itemsPerPage);

        // Update the paged repos
        this.updatePagedRepos();
      },
    });
  }

  private updatePagedRepos(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedRepos = this.repos.slice(startIndex, endIndex);
  }
}
