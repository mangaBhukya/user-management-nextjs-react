
type UserCardProps = {
  name: string;
  email: string;
};

const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
    console.log('name', name, 'email, email')

  return (
    <div className="max-w-sm mx-auto mt-5 p-4 bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">User Information</h2>
      <p className="text-gray-600 mt-2"><strong>Name:</strong> {name}</p>
      <p className="text-gray-600"><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default UserCard;
