//给需要变化的元素加一个watcher,数据变化后执行对应的方法
let i =0;
class Watcher{
    constructor(vm,expr,cb){
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        this.value = this.get();
        console.log(i++);
    }
    handleExpr(p,data){
                
        let expr = p.split('.');
        return expr.reduce((prev,curr)=>{
            return prev[curr];
        },data)
    }
    get(){
        debugger;//watcher
        Dep.target = this;
        let value =this.handleExpr(this.expr,this.vm.$data);
        Dep.target = null;
        return value;
    }
    update(){//暴露 供数据变化时调用
        let newV = this.handleExpr(this.expr,this.vm.$data);
        if(newV != this.value){
            this.cb(newV);
        }
    }
}