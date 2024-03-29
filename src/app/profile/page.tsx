"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const Profile = () => {
  const router = useRouter();
  const user = useAuth();

  return (
    <div className="my-16 space-y-4 sm:mt-24">
      <h2 className="text-4xl font-bold">Profile</h2>
      <div className="flex flex-col items-start gap-10 sm:flex-row">
        <div>
          <h4 className="space-x-2 text-lg">
            <span>Your name:</span>
            <span className="break-all font-medium">{user?.name}</span>
          </h4>
          <p className="space-x-2 text-lg">
            <span>Your email:</span>
            <span className="break-all font-medium">{user?.email}</span>
          </p>
        </div>
        {user?.image && (
          <Image
            src={user.image}
            alt="avatar"
            className="h-[200px] w-[200px]"
            width={200}
            height={200}
          />
        )}
      </div>
      <Button onClick={() => router.back()}>Back</Button>
    </div>
  );
};

export default Profile;
