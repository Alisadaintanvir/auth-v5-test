"use server";
import { signIn, signOut } from "@/auth";

export const registrationAction = async (formData) => {
  const formDataToSubmit = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const client = await clientPromise;
  const db = client.db("auth");
  await db.collection("users").insertOne(formDataToSubmit);

  console.log(formData);
  redirect("/protected");
};

export const loginAction = async (formData) => {
  try {
    await signIn("credentials", formData);
    redirect("/protected");
  } catch (error) {
    console.log(error);
  }
};

export const logoutAction = async () => {
  await signOut();
  console.log("Sign Out Successfully");
  redirect("/protected");
};
