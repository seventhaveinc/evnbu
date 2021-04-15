import { EventEmitter } from 'events';
const sqlite3 = require('sqlite3').verbose();

let table = 'queue';
let table_count = 'queue_count';

function PersistentQueue(this: any, filename: string, batchSize: number) {
    EventEmitter.call(this);

    if (filename === undefined)
        throw new Error('No filename parameter provided');

    this.debug = false;
    this.empty = undefined;
    this.dbPath = this.dbPath = (filename === '') ? ':memory:' : filename;
    this.batchSize = (batchSize === undefined) ? 10 : batchSize;

    if (typeof this.batchSize !== 'number' || this.batchSize < 1)
        throw new Error('Invalid batchSize parameter.  Must be a NUMBER > 0');

    this.queue = [];
    this.length = null;
    this.db = null;
    this.opened = false;
    this.run = false;
}