import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMoviesComponent } from './fav-movies.component';

describe('FavMoviesComponent', () => {
  let component: FavMoviesComponent;
  let fixture: ComponentFixture<FavMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
