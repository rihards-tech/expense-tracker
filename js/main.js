import { 
  setupFormToggle, 
  setupTransactionForm
} from "./form.js";
import { renderTransactions } from './render.js';
import { renderSummary } from './summary.js';
import { setupDeleteTransaction } from './delete.js';

function init() {
  setupFormToggle();
  setupTransactionForm();
  renderTransactions();
  renderSummary();
  setupDeleteTransaction();
}

init();