import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTeamsComponent } from './sidebar-teams.component';

describe('SidebarTeamsComponent', () => {
  let component: SidebarTeamsComponent;
  let fixture: ComponentFixture<SidebarTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
