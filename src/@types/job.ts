export type Tech =
  | "React"
  | "TypeScript"
  | "TailwindCSS"
  | "Node.js"
  | "PostgreSQL"
  | "Docker"
  | "MongoDB"
  | "React Native"
  | "Expo"
  | "Figma"
  | "Adobe XD"
  | "AWS"
  | "Kubernetes"
  | "Terraform"
  | "Cypress"
  | "Jest"
  | "Python"
  | "TensorFlow"
  | "Agile"
  | "Scrum"
  | "Leadership"
  | "JavaScript";

export interface Job {
  id: string;
  title: string;
  location: string;
  technologies: string[];
  company: string;
}