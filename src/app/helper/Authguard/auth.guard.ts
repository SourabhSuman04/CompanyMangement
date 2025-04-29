import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isLoggedIn = !!localStorage.getItem('token'); // Check token

  if (isLoggedIn) {
    return true; // allow access
  } else {
    router.navigate(['/login']); // redirect to login
    return false; // block access
  }
};
