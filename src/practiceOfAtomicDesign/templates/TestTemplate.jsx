import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/input/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
export const TestTemplate = () => {
  const user = {
    image: "https://source.unsplash.com/Sg3XwuEpybU",
    name: "ken",
    email: "test@test",
    phone: "049-3945-3953",
    company: {
      name: "test comp",
    },
    website: "https://google.com",
  };

  return (
    <>
      <PrimaryButton>テスト用1</PrimaryButton>
      <SecondaryButton>テスト用2</SecondaryButton>
      <br />
      <SearchInput />
      <br />
      <UserCard user={user} />
    </>
  );
};
