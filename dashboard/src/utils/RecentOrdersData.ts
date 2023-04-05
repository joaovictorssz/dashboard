export interface Customer {
  id: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
  total: number;
  status: 'failed' | 'successful' | 'processing';
  method: string;
  date: string;
}

export const data:  Customer[] = [
  {
    id: 1,
    name: {
      first: "Alice",
      last: "Smith"
    },
    email: "alice.smith@example.com",
    total: 123.45,
    status: "failed",
    method: "Banco do Brasil",
    date: "2022-03-20"
  },
  {
    id: 2,
    name: {
      first: "Bob",
      last: "Johnson"
    },
    email: "bob.johnson@example.com",
    total: 678.90,
    status: "successful",
    method: "Itaú",
    date: "2022-02-15"
  },
  {
    id: 3,
    name: {
      first: "Carol",
      last: "Williams"
    },
    email: "carol.williams@example.com",
    total: 234.56,
    status: "processing",
    method: "Santander",
    date: "2022-04-01"
  },
  {
    id: 4,
    name: {
      first: "Dave",
      last: "Brown"
    },
    email: "dave.brown@example.com",
    total: 789.01,
    status: "successful",
    method: "Bradesco",
    date: "2022-01-10"
  },
  {
    id: 5,
    name: {
      first: "Eve",
      last: "Jones"
    },
    email: "eve.jones@example.com",
    total: 345.67,
    status: "processing",
    method: "Caixa Econômica",
    date: "2022-03-25"
  },
  {
    id: 6,
    name: {
      first: "Frank",
      last: "Davis"
    },
    email: "frank.davis@example.com",
    total: 901.23,
    status: "failed",
    method: "Banco do Brasil",
    date: "2022-02-01"
  },
  {
    id: 7,
    name: {
      first: "Grace",
      last: "Garcia"
    },
    email: "grace.garcia@example.com",
    total: 456.78,
    status: "successful",
    method: "Itaú",
    date: "2022-04-02"
  },
  {
    id: 8,
    name: {
      first: "Heidi",
      last: "Rodriguez"
    },
    email: "heidi.rodriguez@example.com",
    total: 12.34,
    status: "processing",
    method: "Santander",
    date: "2022-03-31"
  },
  {
    id: 9,
    name: {
      first: "Ivan",
      last: "Martinez"
    },
    email: "ivan.martinez@example.com",
    total: 567.89,
    status: "failed",
    method: "Bradesco",
    date: "2022-01-20"
  },
  {
    id: 10,
    name: {
      first: "Julia",
      last: "Taylor"
    },
    email: "julia.taylor@example.com",
    total: 234.56,
    status: "successful",
    method: "Caixa Econômica",
    date: "2022-02-05"
  }
]
