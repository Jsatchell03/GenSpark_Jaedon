export default function RegisteredUser({ userData }) {
  return (
    <div className=" bg-gray-200 rounded shadow-md mx-8 p-8">
      <h1 className="text-center text-lg mb-4">Registered User</h1>
      <h1>{userData.firstName + " " + userData.lastName}</h1>
      <h1>{userData.email}</h1>
      <h1>{userData.address}</h1>
      <h1>{userData.dob}</h1>
    </div>
  );
}
