import { useRouter } from "next/router";

export default function MovieDetaid() {
  const router = useRouter();
  return `Detail movie ${router.query.id}`;
}
