import { ListingContainer } from '@components/ListingContainer';
import { items } from '@data/items';

function App() {
  return (
    <div className="container">
      <ListingContainer items={items} />
    </div>
  );
}

export default App;
