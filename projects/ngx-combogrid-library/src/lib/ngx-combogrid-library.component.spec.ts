import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCombogridLibraryComponent } from './ngx-combogrid-library.component';

describe('NgxCombogridLibraryComponent', () => {
  let component: NgxCombogridLibraryComponent;
  let fixture: ComponentFixture<NgxCombogridLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCombogridLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCombogridLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
