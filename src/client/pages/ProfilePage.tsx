import { type AuthUser } from 'wasp/auth'

export default function ProfilePage({ user }: { user: AuthUser }) {
  return (
    <div>
      <h1 className="text-4xl font-bold">{user.username}</h1>
    </div>
  );
}