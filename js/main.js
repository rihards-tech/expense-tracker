import { 
  setupFormToggle, 
  setupTransactionForm
} from "./form.js";
import { renderTransactions } from './render.js';
import { renderSummary } from './summary.js';
import { setupDeleteTransaction } from './delete.js';
import { setupFilters } from './filters.js';
import { loadTransactions } from './storage.js';

function init() {
  setupFormToggle();
  setupTransactionForm();
  loadTransactions();
  renderTransactions();
  renderSummary();
  setupDeleteTransaction();
  setupFilters();
}

init();