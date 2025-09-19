import UpdatePasswordData from "../features/authentication/UpdatePasswordData";
import UpdateUserData from "../features/authentication/UpdateUserData";

function Account() {
  return (
    <div className="w-full flex justify-around flex-wrap gap-10">
      <UpdateUserData />
      <UpdatePasswordData />
    </div>
  );
}

export default Account;
