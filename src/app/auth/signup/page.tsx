import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";
import TransitionWrapper from "@/components/TransitionWrapper";

export default function SignupPage() {
  return (
    <AuthLayout>
      <TransitionWrapper>
        <SignupForm />
      </TransitionWrapper>
    </AuthLayout>
  );
}