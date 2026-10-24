import assert from 'node:assert/strict';
import { LogicEngine } from '@x12i/graphenix-logic';

const context = { state: {}, variables: {}, history: [], outputs: { byNodeId: {}, byKey: {} }, nodeStatus: {} };
const highScore = { type: 'simple', simple: { left: 5, operator: '>', right: 3 } };
const matches = { type: 'simple', simple: { left: 'ready', operator: '==', right: 'ready' } };
assert.equal(LogicEngine.evaluateCondition(highScore, {}, context), true);
assert.equal(LogicEngine.evaluateCondition({ type: 'complex', complex: { logic: 'AND', conditions: [highScore, matches] } }, {}, context), true);
assert.equal(LogicEngine.evaluateCondition({ type: 'simple', simple: { left: 2, operator: '>', right: 3 } }, {}, context), false);
console.log('Graph condition evaluation passed.');
