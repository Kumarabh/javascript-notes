import https from 'https';
import Axios from 'axios';

type ITodo = {
  id: number,
  userId: number,
  title: string,
  completed: boolean
}

async function getTodos (id: number): Promise<ITodo> {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const httpOptions = {
    headers: {},
    httpsAgent: new https.Agent({rejectUnauthorized: false})
  }
  return (await Axios.get(url, httpOptions)).data;

}

const p1 = getTodos(1);
const p2 = getTodos(2);
const p3 = getTodos(3);

Promise.all([p1, p2, p3])
.then(
  (data: ITodo[]) => {console.log(data)},
  () => {}
)
