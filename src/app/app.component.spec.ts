import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    });
  });

  it('should work', () => {
    // Arrange
    // Act
    const sut = TestBed.createComponent(AppComponent);
    // Assert
    expect(sut.componentInstance instanceof AppComponent)
      .toBe(true, 'should create AppComponent');
  });
});