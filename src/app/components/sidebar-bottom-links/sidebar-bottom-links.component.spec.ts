import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBottomLinksComponent } from './sidebar-bottom-links.component';

describe('SidebarBottomLinksComponent', () => {
  let component: SidebarBottomLinksComponent;
  let fixture: ComponentFixture<SidebarBottomLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarBottomLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarBottomLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
