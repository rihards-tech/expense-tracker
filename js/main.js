import { 
  setupFormToggle, 
  setupTransactionForm
} from "./form.js";
import { renderTransactions } from './render.js';

function init() {
  setupFormToggle();
  setupTransactionForm();
  renderTransactions();
}

init();