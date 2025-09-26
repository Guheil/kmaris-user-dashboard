"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Checkbox, FormControlLabel } from "@mui/material";
import { SignupProps, SignupFormData } from "./interface";
import {
  FormRoot,
  BackToHomeLink,
  LogoContainer,
  Title,
  Subtitle,
  Form,
  Row,
  InputGroup,
  Label,
  Input,
  InputWrapper,
  PasswordIconButton,
  SubmitButton,
  Divider,
  LoginButton,
  CheckboxContainer,
} from "./elements";

export function SignupForm({ onSubmit, onLogin }: SignupProps) {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleGoToHomepage = () => {
    window.location.href = "https://kmarisimmigration.vercel.app/";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match. Please try again.",
      });
      return;
    }

    try {
      const response = await fetch('/api/auth/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }
      
      Swal.fire({
        title: 'Registration Successful!',
        text: 'Your account is pending approval. You will be able to login once an admin approves your account.',
        icon: 'success',
        confirmButtonText: 'Go to Login'
      }).then((result) => {
        if (result.isConfirmed && onLogin) {
          onLogin();
        }
      });
    } catch (error) {
      console.error('Signup error:', error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error instanceof Error ? error.message : "Something went wrong! Please try again.",
      });
      
      if (onSubmit) {
        onSubmit(formData);
      }
    }
  };

  return (
    <FormRoot>
      <BackToHomeLink onClick={handleGoToHomepage}>
        Return to Homepage
      </BackToHomeLink>
      
      <LogoContainer onClick={handleGoToHomepage}>
        <Image
          src="/LogoOriginal.png"
          alt="KMARIS LLC"
          width={140}
          height={80}
          priority
          style={{ 
            objectFit: "contain"
          }}
        />
      </LogoContainer>
      
      <Title>Create Your Account</Title>
      <Subtitle>
        Join us to access premium immigration services
      </Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <Row>
          <InputGroup>
            <Label>First Name</Label>
            <Input
              name="firstName"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label>Last Name</Label>
            <Input
              name="lastName"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Row>

        <Row>
          <InputGroup>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label>Mobile No.</Label>
            <Input
              name="mobile"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Row>

        <Row>
          <InputGroup>
            <Label>Password</Label>
            <InputWrapper>
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <PasswordIconButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </PasswordIconButton>
            </InputWrapper>
          </InputGroup>
          <InputGroup>
            <Label>Confirm Password</Label>
            <InputWrapper>
              <Input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <PasswordIconButton
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </PasswordIconButton>
            </InputWrapper>
          </InputGroup>
        </Row>

        <CheckboxContainer>
          <FormControlLabel
            control={
              <Checkbox
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                size="small"
              />
            }
            label="I agree to the terms and conditions"
          />
        </CheckboxContainer>

        <SubmitButton type="submit" disabled={!termsAccepted}>
          Create Account
        </SubmitButton>

        <Divider>OR</Divider>

        <LoginButton type="button" onClick={onLogin}>
          Already have an account? Sign in
        </LoginButton>
      </Form>
    </FormRoot>
  );
}