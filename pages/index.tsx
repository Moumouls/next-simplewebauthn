import { supportsWebauthn } from "@simplewebauthn/browser";

export default function Home() {
  return <h1>Support webauthn: {supportsWebauthn()}</h1>;
}
