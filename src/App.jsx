import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';

export default function App() {
  const [advices, setAdvices] = useState({});
  const [load, setLoad] = useState(true);
  const [error, setError] = useState('');
  async function getDataApi() {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvices(response.data);
    } catch (error) {
      setError('erro na api');
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    getDataApi();
  }, []);
  if (load) {
    return <h1>carregando..</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Container>
      <button onClick={getDataApi}>Clique para obter um conselho</button>
      <strong>{advices.slip.advice}</strong>
    </Container>
  );
}
