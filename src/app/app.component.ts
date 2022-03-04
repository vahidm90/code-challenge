import { Component, OnDestroy } from '@angular/core';
import { PoetryDbService } from './services/poetry-db.service';
import { finalize, Subject, takeUntil } from 'rxjs';
import { IPoemModel } from './interfaces/poem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  poems!: IPoemModel[] | undefined;
  selectedPoem!: IPoemModel | undefined;
  selectedIndex!: number;
  isLoading!: boolean;

  private _destroy$ = new Subject<void>();

  constructor(private _poetryService: PoetryDbService) {}

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  onFetchButtonClick(): void {
    this.reset();
    this._poetryService.getRandomPoems()
      .pipe(finalize(() => this.isLoading = false), takeUntil(this._destroy$))
      .subscribe(poems => this.poems = poems);
  }

  selectPoem(index: number) {
    this.selectedPoem = (this.poems as IPoemModel[])[index];
    this.selectedIndex = index;
  }

  private reset(): void {
    this.poems = undefined;
    this.selectedPoem = undefined;
    this.isLoading = true;
  }

}
