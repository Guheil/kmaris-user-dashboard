

export interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
}

export interface SignupProps {
  onSubmit?: (data: SignupFormData) => void;
  onLogin?: () => void;
}