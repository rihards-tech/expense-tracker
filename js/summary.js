import { state } from './state.js';
import { summaryBalance, summaryIncome, summaryExpense } from './selectors.js';

export function renderSummary() {
  const income = state.transactions
  .filter((transaction) => transaction.type === 'income')
  .reduce((acc, current) => acc + current.amount, 0);

  const expense = state.transactions
  .filter((transaction) => transaction.type === 'expense')
  .reduce((acc, current) => acc + current.amount, 0);

  const balance = income - expense;

  summaryBalance.textContent = `$${balance.toLocaleString('fr-FR')}`;
  summaryIncome.textContent = `$${income.toLocaleString('fr-FR')}`;
  summaryExpense.textContent = `$${expense.toLocaleString('fr-FR')}`;
}