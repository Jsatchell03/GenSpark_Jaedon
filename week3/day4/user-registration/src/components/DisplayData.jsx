import RegisteredUser from "./RegisteredUser";
export default function DisplayData({ userData }) {
  return (
    <div className="flex flex-col gap-2 w-128">
      {userData.map((user, idx) => (
        <RegisteredUser userData={user} key={idx} />
      ))}
    </div>
  );
}
