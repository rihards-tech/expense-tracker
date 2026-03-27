import { 
  setupFormToggle, 
  setupTransactionForm
} from "./form.js";
import { renderTransactions } from './render.js';
import { renderSummary } from './summary.js';

function init() {
  setupFormToggle();
  setupTransactionForm();
  renderTransactions();
  renderSummary();
}

init();