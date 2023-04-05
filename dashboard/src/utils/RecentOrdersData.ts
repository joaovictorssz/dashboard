interface Name {
    first: string;
    last: string;
  }
  
  export interface Transaction {
    id: number;
    name: Name;
    total: number;
    status: 'failed' | 'successful' | 'processing';
    method: string;
    date: string;
  }
  
  const names: string[] = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];
  const institutions: string[] = ['Bank A', 'Bank B', 'Bank C', 'Bank D'];
  
  function getRandomName(): string {
    return names[Math.floor(Math.random() * names.length)];
  }
  
  function getRandomInstitution(): string {
    return institutions[Math.floor(Math.random() * institutions.length)];
  }
  
  function getRandomStatus(): 'failed' | 'successful' | 'processing' {
    const statuses: Array<'failed' | 'successful' | 'processing'> = ['failed', 'successful', 'processing'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  }
  
  function getRandomDate(): string {
    const start: Date = new Date(2020, 0, 1);
    const end: Date = new Date(2023, 3, 5);
    const randomDate: Date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().slice(0, 10);
  }
  
function generateRandomData(): Transaction {
    const id: number = Math.floor(Math.random() * 10000);
    const name: Name = {
      first: getRandomName(),
      last: getRandomName()
    };
    const total: number = parseFloat((Math.random() * 1000).toFixed(2));
    const status: 'failed' | 'successful' | 'processing' = getRandomStatus();
    const method: string = getRandomInstitution();
    const date: string = getRandomDate();
  
    return { id, name, total, status, method, date };
  }

  export function RecentOrdersData(dataArray: Transaction[]){
      

  
  for (let i: number = 0; i < 10; i++) {
    dataArray.push(generateRandomData());
  }
  
  return (dataArray);
  }