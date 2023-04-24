import logo from './logo.svg';
import './App.css';
import Table1 from './Comp/Table1';
import Table2 from './Comp/Table2';
import Table3 from './Comp/Table3';
import Table4 from './Comp/Table4';
import Table5 from './Comp/Table5';

function App() {
  return (
   <>
   <div>
     <h1>1.Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
</h1>
     <Table1/> <br />
     <h1>2.Male Users which have phone price greater than 10,000.</h1>
     <Table2/>
     <h1>3.Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</h1>
     <Table3/>
     <h1>4.Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</h1>
     <Table4/>
     <h1>5.Show the data of top 10 cities which have the highest number of users and their average income.</h1>
     <Table5/>
   </div>
   </>
  );
}

export default App;
