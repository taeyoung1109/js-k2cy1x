// Import stylesheets
import './style.css';
import { from, take } from 'rxjs';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const result = from(
  fetch("www.samsungvx.com")
    .then((data)=>console.log(data))
    .catch(()=>1))
    .pipe(take(10));

result.subscribe(x => console.log(x));