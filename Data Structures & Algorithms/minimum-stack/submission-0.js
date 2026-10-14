class MinStack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        if (this.stack.length === 0) {
            this.stack.push({ val, min: val });
        } else {
            const previousTop = this.stack[this.stack.length - 1];

            this.stack.push({
                val,
                min: Math.min(previousTop.min, val),
            });
        }
    }

    pop() {
        this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1].val;
    }

    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}
