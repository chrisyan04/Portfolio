import Image from "next/image";

export interface SkillIconProps {
  src: string;
  alt: string;
}

export const SkillIcon = ({ src, alt }: SkillIconProps) => (
  <Image
    src={src}
    alt={alt}
    height={100}
    width={100}
    style={{ height: "60px", width: "auto" }}
  />
);