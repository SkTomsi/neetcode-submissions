class MinStack {
    constructor() {
        this.min = Infinity;
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.min = val;
            this.stack.push(val);
        } else {
            if (val < this.min) {
                let newVal = 2 * val - this.min;
                this.stack.push(newVal);
                this.min = val;
            } else {
                this.stack.push(val);
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) {
            return;
        }
        let top = this.stack.pop();
        if (top < this.min) {
            let newMin = 2 * this.min - top;
            this.min = newMin;
        }
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length === 0) {
            return;
        }
        let top = this.stack[this.stack.length - 1];
        if (top < this.min) {
            return this.min;
        } else {
            return top;
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
