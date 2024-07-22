import { ExpoResponse, ExpoRequest } from "expo-router/server";
export async function POST(request: any) {
  const { email, password } = await request.json();

  if (email === "wander@gmail.com" && password === "123456") {
    return ExpoResponse.json({
      email,
      name: "Wander Amaral",
    });
  }

  return new ExpoResponse("User or password incorrect", {
    status: 404,
    headers: {
        "Content-Type": "text/plain"
    }
  })
}
