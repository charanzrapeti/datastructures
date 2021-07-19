class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newnode = new Node(val)
        if(!this.head) {
            this.head = newnode;
            this.tail = this.head;  
        }
        else {
            this.tail.next = newnode;
            
            this.tail = newnode;
        }
        this.length += 1;
        return this;
    }
    traverse() {
        var current = this.head;
        if(!this.head){
            console.log("null")
        }
        while(current) {
            console.log(current.val);
            current = current.next;
        }
        
    }
    pop() {
        if(!this.head){
            console.log("no elements to pop");
        }
        var current = this.head;
        var temp = 1;
        while(current){
            var pre = current.val;
            console.log(pre)
            current = current.next;
           
            if(current){
                var temp = current.val;
                console.log("temp variable is "+temp);
            }
         
            
        }
    }
}
var list = new linkedlist();
console.log(list);
list.push("hello");
console.log(list);
list.push("world");
console.log(list);
list.push(1);
console.log(list);
list.pop()


