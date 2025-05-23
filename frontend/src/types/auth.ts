export interface User {
  id: number;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  confirmPassword?: string;
}

export interface DecodedToken {
  id: number;
  email: string;
  exp: number;
  iat: number;
}
