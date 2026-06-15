import TransitionWrapper from "@/components/TransitionWrapper";
import AccountView from "@/components/account/AccountView";

export default function Page() {
  return (
    <TransitionWrapper>
      <AccountView />
    </TransitionWrapper>
  );
}