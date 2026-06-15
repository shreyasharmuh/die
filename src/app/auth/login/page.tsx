import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import TransitionWrapper from "@/components/TransitionWrapper";

export default function LoginPage() {
  return (
    <AuthLayout>
      <TransitionWrapper>
        <LoginForm />
      </TransitionWrapper>
    </AuthLayout>
  );
}