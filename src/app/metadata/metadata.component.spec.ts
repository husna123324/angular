import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMetadataComponent } from './metadata.component';

describe('MetadataComponent', () => {
  let component: HelloMetadataComponent;
  let fixture: ComponentFixture<HelloMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloMetadataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});