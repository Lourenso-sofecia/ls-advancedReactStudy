
export interface FakeUser {
  id: number;
  name: string;
  email: string;
  password: string;
  group: "SuperAdmin" | "normalUser";
  authorities: "full" | "onlyView";
}

export const fakeUsers: FakeUser[] = [
  {
    id: 1,
    name: "Lourenço",
    email: "lourenco@example.com",
    password: "123456",
    group: "SuperAdmin",
    authorities: "full",
  },
  {
    id: 2,
    name: "Sofécia",
    email: "sofecia@example.com",
    password: "abcdef",
    group: "normalUser",
    authorities: "onlyView",
  },
  
];