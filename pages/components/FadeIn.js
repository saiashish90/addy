import { useInView } from "react-intersection-observer";
export default function FadeIn({ children }) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  console.log(inView);
  return <div ref={ref}>{children}</div>;
}
