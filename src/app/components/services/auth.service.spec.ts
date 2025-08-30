import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user on valid login', (done) => {
    service.login('teste@teste.com', '123456').subscribe(users => {
      expect(users.length).toBe(1);
      expect(users[0].email).toBe('teste@teste.com');
      done();
    });
  });

  it('should return empty array on invalid login', (done) => {
    service.login('invalido@teste.com', 'errado').subscribe(users => {
      expect(users.length).toBe(0);
      done();
    });
  });

  it('should return user on register', (done) => {
    service.registrar('novo@teste.com', 'senha').subscribe(user => {
      expect(user.email).toBe('novo@teste.com');
      done();
    });
  });
});