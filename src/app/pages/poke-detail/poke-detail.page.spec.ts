import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeDetailPage } from './poke-detail.page';

describe('PokeDetailPage', () => {
  let component: PokeDetailPage;
  let fixture: ComponentFixture<PokeDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PokeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
